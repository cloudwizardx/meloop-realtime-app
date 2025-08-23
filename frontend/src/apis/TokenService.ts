import { useAuthStore } from "../stores/AuthStore"

export const getAccessToken = () => {
    return useAuthStore.getState().accessToken
}

export const setAccessToken = (token: string) => {
    useAuthStore.getState().setAccessToken(token)
}

export const refreshToken = async () => {
  return useAuthStore.getState().refreshToken();
}

export const clearAuth = () => {
  useAuthStore.getState().clearAuth()
}