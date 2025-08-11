import { Types } from 'mongoose'

export interface Message {
  _id?: Types.ObjectId
  conversationId: Types.ObjectId
  sender: Types.ObjectId
  type: 'Text' | 'Image' | 'Video'
  text: string
  isEdited: boolean
  media?: [
    {
      url: string
      type: 'Image' | 'Video'
      size: number
    }
  ]
  links?: string[]
  replyTo?: Types.ObjectId
  status: 'Sent' | 'Delivered' | 'Read'
  sentAt?: Date
  deleted?: boolean
  createdAt?: Date
  updatedAt?: Date
}
