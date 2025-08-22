import { Types } from 'mongoose'

export interface Friend {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  friendId: Types.ObjectId
  status: 'Pending' | 'Accepted' | 'Deleted'
  mutualCount: number
  mutualPreview: Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}
