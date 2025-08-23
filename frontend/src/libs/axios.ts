import axios from "axios"
import { clearAuth, getAccessToken, refreshToken } from "../apis/TokenService"

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api/v1',
    withCredentials: true
})

let isRefreshing = false
let refreshSubscribers: ((token: string) => void)[] = []

const subscribeTokenRefresh = (cb: (token: string | null) => void) => {
  refreshSubscribers.push(cb)
}

const onTokenRefreshed = (token: string | null) => {
  refreshSubscribers.forEach((cb) => cb(token ?? ''))
  refreshSubscribers = []
}

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      const isAuthEndpoint = originalRequest.url?.includes("/auth/")
      if (isAuthEndpoint) return Promise.reject(error)

      originalRequest._retry = true

      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token: string | null) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token ?? ''}`
            }
            resolve(axiosInstance(originalRequest))
          })
        })
      }

      isRefreshing = true
      try {
        await refreshToken()
        const newToken = getAccessToken()
        isRefreshing = false

        if (newToken) {
          onTokenRefreshed(newToken)
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`
          }
          return axiosInstance(originalRequest)
        }
      } catch (err) {
        isRefreshing = false
        refreshSubscribers = []
        clearAuth()
        if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
          window.location.href = "/login"
        }
        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  }
)