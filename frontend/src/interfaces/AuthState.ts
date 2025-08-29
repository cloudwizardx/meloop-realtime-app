import type { Socket } from "socket.io-client";
import type { Profile } from "./Profile";
import type { User } from "./User";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthState {
  authUser: User | null
  authProfile: Profile | null
  accessToken: string | null
  isLoggingIn: boolean
  isCheckingAuth: boolean
  isRefreshingToken: boolean
  isAuthenticated: boolean
  onlineUsers: string[]
  socket: Socket | null
  error: string | null

  setAccessToken: (token: string | null) => void
  setOnlineUsers: (onlineUsers: string[]) => void
  checkAuth: () => Promise<boolean>
  login: (data: any) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  clearError: () => void
  clearAuth: () => void
}
