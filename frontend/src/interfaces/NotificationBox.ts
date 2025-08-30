import type { UserPopulated } from "./UserPopulated"

export interface NotificationBox {
  _id: string
  sender: UserPopulated | null
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
