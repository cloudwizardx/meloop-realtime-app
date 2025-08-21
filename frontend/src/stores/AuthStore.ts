/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import type { AuthState } from '../interfaces/AuthState'
import { subscribeWithSelector } from 'zustand/middleware'
import { toast } from 'react-toastify'
import { axiosInstance } from '../libs/Axios'


export const useAuthStore = create<AuthState>()(
    subscribeWithSelector((set, get) => ({
        authUser: null,
        accessToken: null,
        isLoggingIn: false,
        isCheckingAuth: false,
        isRefreshingToken: false,
        isAuthenticated: false,
        error: null,

        setAccessToken: (token: string | null) => {
            set({ accessToken: token })
            if (token) {
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
            } else {
                delete axiosInstance.defaults.headers.common['Authorization']
            }
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
                const res = await axiosInstance.get('/auth/check')
                if (res) {
                    const { user, accessToken } = res.data
                    set({ authUser: user })
                    get().setAccessToken(accessToken)
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
                const res = await axiosInstance.post('/auth/login', {
                    data
                })

                const { accessToken, isAuthenticated } = res.data
                get().setAccessToken(accessToken)
                set({ isAuthenticated: isAuthenticated })
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
                toast.success('Logged out successfully')
            } catch (error: any) {
                toast.error(error.response?.data?.message || 'Logout failed')
                get().clearAuth()
            }
        }

    }))
)