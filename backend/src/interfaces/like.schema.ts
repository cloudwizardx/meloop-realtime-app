import { Types } from 'mongoose'

export interface Like {
  _id?: Types.ObjectId
  contextType: string
  contextId: Types.ObjectId
  creator: Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}
