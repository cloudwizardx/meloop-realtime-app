import { Types } from 'mongoose'

export interface Friend {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  friendId: Types.ObjectId
  status: 'Pending' | 'Accepted' | 'Deleted'
  createdAt?: Date
  updatedAt?: Date
}
