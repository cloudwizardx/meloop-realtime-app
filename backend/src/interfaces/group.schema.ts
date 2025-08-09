import { Types } from 'mongoose'

export interface Group {
  _id?: Types.ObjectId
  creator: Types.ObjectId // User who created the group
  members: Types.ObjectId[]
  name: string
  description?: string
  slogan?: string
  photo: string // URL to the group's photo
  coverPhoto?: string // URL to the group's cover photo
  status: string
  waitingApproval: Types.ObjectId[]
  createdAt?: Date
  updatedAt?: Date
}
