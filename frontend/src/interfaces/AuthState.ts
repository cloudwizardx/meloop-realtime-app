import type { User } from "./User";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthState {
  authUser: User | null
  accessToken: string | null
  isSigningUp: boolean
  isLoggingIn: boolean
  isUpdatingProfile: boolean
  isCheckingAuth: boolean
  isRefreshingToken: boolean
  onlineUsers: string[]
  error: string | null

  setAccessToken: (token: string | null) => void
  checkAuth: () => Promise<void>
  signup: (data: any) => Promise<void>
  login: (data: any) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  updateProfile: (data: any) => Promise<void>
  connectSocket: () => void
  disconnectSocket: () => void
  clearError: () => void
  clearAuth: () => void
}
