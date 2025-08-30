import type { UserPopulated } from "./UserPopulated"

export interface FriendRequest {
  _id: string
  sender: UserPopulated
  createdAt: Date
  mutualCount: number
  mutualPreview: {
    userId: string
    profile: string | undefined
    avatar: string
  }[]
}
