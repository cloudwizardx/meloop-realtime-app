import { Types } from 'mongoose'

export interface Conversation {
  _id?: Types.ObjectId
  isGroupChat: boolean
  name?: string
  members?: {
    memberId: Types.ObjectId
    nickname?: string
  }[]
  ownerNameLastMessage?: string
  lastMessage?: string
  lastSeen?: Date
  theme: string
  emotionSymbol: string
  status: 'Active' | 'Blocked'
  createdAt?: Date
  updatedAt?: Date
}
