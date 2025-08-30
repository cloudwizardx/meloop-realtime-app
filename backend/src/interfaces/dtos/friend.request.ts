import { Types } from 'mongoose'
import { UserPopulated } from '../schema/user.schema'

export interface FriendRequest {
  _id: Types.ObjectId
  sender: UserPopulated
  createdAt: Date | null
  mutualCount: number
  mutualPreview: {
    userId: Types.ObjectId
    profile: Types.ObjectId | undefined
    avatar: string
  }[]
}
