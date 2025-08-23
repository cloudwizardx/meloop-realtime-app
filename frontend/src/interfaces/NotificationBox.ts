import type { UserPopulated } from "./UserPopulated"

export interface NotificationBox {
  _id: string
  sender: UserPopulated
  contextType: 'Post' | 'Comment' | 'Message' | 'Follower' | 'Page' | 'Group'
  contextId?: string
  content: {
    text: string
    extraInfo: string
  }
  isRead: boolean
  createdAt: Date
  updatedAt: Date
}
