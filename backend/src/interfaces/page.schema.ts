import { Types } from 'mongoose'

export interface Page {
  _id?: Types.ObjectId
  creator: Types.ObjectId
  contact?: {
    name: string
    link: string
  }
  name: string
  description?: string
  slogan?: string
  photo?: string
  coverPhoto?: string
  noteWorthy: Types.ObjectId[]
  isConfirmed: boolean
  createdAt?: Date
  updatedAt?: Date
}
