import { Types } from 'mongoose'

export interface Media {
  _id?: Types.ObjectId
  contextType: 'Post' | 'Page' | 'Group' | 'Comment' | 'Message' | 'ShortVideo' | 'Conversation' // Post, Page, Group, Comment, Message, ShortVideo
  contextId?: Types.ObjectId
  secureUrl: string
  folder: string
  fileName: string
  fileType: string // video, image, etc.
  size: number
  createdAt: Date
  updatedAt: Date
}
