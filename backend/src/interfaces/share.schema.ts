import { Types } from "mongoose"

export interface Share {
  _id?: Types.ObjectId
  contextType: string
  contextId: Types.ObjectId
  creator: Types.ObjectId
  sharedWith: Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}
