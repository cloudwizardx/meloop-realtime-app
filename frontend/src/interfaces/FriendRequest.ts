import type { UserPopulated } from "./UserPopulated"

export interface FriendRequest {
  sender: {
    user: UserPopulated
  }
  mutualCount: number
  mutualPreview: {
    userId: string
    profile: string | undefined
    avatar: string
  }[]
}
