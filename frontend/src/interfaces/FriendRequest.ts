import type { UserPopulated } from "./UserPopulated"

export interface FriendRequest {
  sender: UserPopulated
  mutualCount: number
  mutualPreview: {
    userId: string
    profile: string | undefined
    avatar: string
  }[]
}
