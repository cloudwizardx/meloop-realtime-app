import { Types } from 'mongoose'

export interface UserPermission {
  _id?: Types.ObjectId
  role: string
  level: string
  permissions: string[]
}
