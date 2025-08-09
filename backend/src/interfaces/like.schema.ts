import { Types } from 'mongoose'

export interface Like {
  _id?: Types.ObjectId
  contextType: 'Post' | 'Page' | 'ShortVideo' | 'Comment' // Post, Page, ShortVideo, Comment
  contextId: Types.ObjectId
  creator: Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}
