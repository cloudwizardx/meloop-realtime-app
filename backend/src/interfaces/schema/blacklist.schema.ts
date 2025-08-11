import { Types } from 'mongoose'

export interface BlackList {
  _id?: Types.ObjectId
  owner: Types.ObjectId // User who is blacklisted
  contextType: 'User' | 'Group' | 'Page'
  contextId?: Types.ObjectId // UserId, GroupId, PageId
  createdAt?: Date
  updatedAt?: Date
}
