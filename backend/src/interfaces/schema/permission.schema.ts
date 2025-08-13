import { Types } from 'mongoose'

export interface UserPermission {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  role: string
  permissions: string[]
}
