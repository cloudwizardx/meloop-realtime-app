import { Types } from 'mongoose'

export interface Comment {
  _id?: Types.ObjectId
  contextType: 'Post' | 'ShortVideo' // Post, ShortVideo
  contextId: Types.ObjectId
  creator: Types.ObjectId
  replies?: [{ repliedBy: Types.ObjectId; content: string; isEdit: boolean; createdAt?: Date; updatedAt?: Date }]
  createdAt?: Date
  updatedAt?: Date
}
