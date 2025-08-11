import { Types } from "mongoose"

export interface Share {
  _id?: Types.ObjectId
  contextType: 'Post' | 'Page' | 'Group' | 'ShortVideo' // Post, Page, Group, ShortVideo
  contextId: Types.ObjectId
  creator: Types.ObjectId
  sharedWith: Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}
