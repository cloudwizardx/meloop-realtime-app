import type { User } from "./User";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthState {
  authUser: User | null
  accessToken: string | null
  isLoggingIn: boolean
  isCheckingAuth: boolean
  isRefreshingToken: boolean
  error: string | null

  setAccessToken: (token: string | null) => void
  checkAuth: () => Promise<void>
  login: (data: any) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  clearError: () => void
  clearAuth: () => void
}
