import { Types } from 'mongoose'

export interface UserPermission {
  _id?: Types.ObjectId
  role: string
  levelMember: string
  permissions: string[]
}
