import { Types } from 'mongoose'

export interface Conversation {
  _id?: Types.ObjectId
  isGroupChat: boolean
  name?: string
  members?: Types.ObjectId[]
  ownerNameLastMessage?: string
  lastMessage?: string
  lastSeen?: Date
  status: 'Active' | 'Blocked'
  createdAt?: Date
  updatedAt?: Date
}
