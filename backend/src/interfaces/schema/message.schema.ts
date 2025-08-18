import { Types } from 'mongoose'

export interface Message {
  _id?: Types.ObjectId
  conversationId: Types.ObjectId
  sender: Types.ObjectId
  type: ['Text' | 'Media' | 'Audio']
  text: string
  isEdited: boolean
  media?: [
    {
      mediaId: Types.ObjectId
      url: string
      name: string
      type: 'Image' | 'Video'
      size: number
    }
  ]
  links?: string[]
  replyTo?: Types.ObjectId
  status: 'Sent' | 'Delivered' | 'Read'
  deleted?: boolean
  createdAt?: Date
  updatedAt?: Date
}
