import { Types } from 'mongoose'

export interface Notification {
  _id: Types.ObjectId
  senderId: Types.ObjectId
  receiverIds: Types.ObjectId[]
  contextType: 'Post' | 'Comment' | 'Message' | 'Follower' | 'Page' | 'Group'
  contextId?: Types.ObjectId
  content: string
  isRead: boolean
  createdAt: Date
  updatedAt: Date
}
