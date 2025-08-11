import { Types } from 'mongoose'

export interface Post {
  _id?: Types.ObjectId
  title: string
  content: string
  contextType: 'Group' | 'Page' | 'Personal' // group, page, personal
  contextId?: Types.ObjectId // groupId, pageId
  createdBy: Types.ObjectId
  likesCount: number
  sharesCount: number
  commentsCount: number
  isEdit: boolean
  createdAt?: Date
  updatedAt?: Date
}
