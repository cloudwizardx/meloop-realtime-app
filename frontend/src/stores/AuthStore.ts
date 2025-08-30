/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import type { AuthState } from '../interfaces/AuthState'
import { subscribeWithSelector } from 'zustand/middleware'
import { toast } from 'react-toastify'
import { axiosInstance } from '../libs/Axios'
import { connectSocket } from '../libs/Socket'


export const useAuthStore = create<AuthState>()(
    subscribeWithSelector((set, get) => ({
        authUser: null,
        authProfile: null,
        accessToken: null,
        isLoggingIn: false,
        isCheckingAuth: false,
        isRefreshingToken: false,
        isAuthenticated: false,
        onlineUsers: [],
        socket: null,
        error: null,

        setAccessToken: (token: string | null) => {
            set({ accessToken: token })
            if (token) {
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
            } else {
                delete axiosInstance.defaults.headers.common['Authorization']
            }
        },

        setOnlineUsers: (target: string[]) => {
            set({ onlineUsers: target })
        },

        clearError: () => {
            set({ error: null })
        },

        clearAuth: () => {
            set({
                authUser: null,
                accessToken: null,
                error: null,
            })
        },

        checkAuth: async () => {
            try {
                set({ isCheckingAuth: true, error: null })
                const res = await axiosInstance.post('/auth/check')
                if (res) {
                    const { user, accessToken, profile, isAuthenticated } = res.data
                    const socket = connectSocket(accessToken)
                    set({ authUser: user, authProfile: profile, isAuthenticated: isAuthenticated, socket: socket })
                    get().setAccessToken(accessToken)
                    return isAuthenticated
                }
            } catch (error: any) {
                console.log(error)
                set({ error: error.response?.data?.message || "Authentication failed" });
            } finally {
                set({ isCheckingAuth: false })
            }
        },

        refreshToken: async () => {
            if (get().isRefreshingToken) return
            try {
                set({ isRefreshingToken: true })
                const res = await axiosInstance.post('/auth/refresh')
                if (res) {
                    const { accessToken } = res.data
                    get().setAccessToken(accessToken)
                }
            } catch (error) {
                get().clearAuth()
                throw error
            } finally {
                set({ isRefreshingToken: false })
            }
        },

        login: async (data) => {
            set({ isLoggingIn: true, error: null })
            try {
                const res = await axiosInstance.post('/auth/login', data
                )

                const { accessToken, isAuthenticated, user, profile } = res.data
                get().setAccessToken(accessToken)
                const socket = connectSocket(accessToken) as any
                set({ isAuthenticated: isAuthenticated, authUser: user, authProfile: profile, socket: socket })

                return isAuthenticated
            } catch (error: any) {
                const message = error.response?.data?.message || 'Login failed'
                set({ error: message })
                toast.error(message)
            }
        },

        logout: async () => {
            try {
                await axiosInstance.post('/auth/logout')
                get().clearAuth()
                if (get().socket) {
                    get().socket?.disconnect()
                    set({ socket: null })
                }

                toast.success('Logged out successfully')
            } catch (error: any) {
                toast.error(error.response?.data?.message || 'Logout failed')
                get().clearAuth()
            }
        }

    }))
)