import { Types } from 'mongoose'
import { UserPopulated } from '../schema/user.schema'

export interface NotificationBox {
  _id: Types.ObjectId
  sender: UserPopulated
  contextType: 'Post' | 'Comment' | 'Message' | 'Follower' | 'Page' | 'Group'
  contextId?: Types.ObjectId
  content: {
    text: string
    extraInfo: string
  }
  isRead: boolean
  createdAt: Date
  updatedAt: Date
}
