import { Types } from 'mongoose'
import { Profile } from '../schema/profile.schema'
import { UserPopulated } from '../schema/user.schema'

export interface FriendRequest {
  sender: {
    user: UserPopulated
    profile: Profile
  }
  mutualCount: number
  mutualPreview: {
    userId: Types.ObjectId
    profile: Types.ObjectId | undefined
    avatar: string
  }[]
}
