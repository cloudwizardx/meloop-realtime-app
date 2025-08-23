import { Types } from 'mongoose'
import { UserPopulated } from '../schema/user.schema'

export interface FriendRequest {
  sender: UserPopulated
  mutualCount: number
  mutualPreview: {
    userId: Types.ObjectId
    profile: Types.ObjectId | undefined
    avatar: string
  }[]
}
