import { Types } from 'mongoose'

export interface Media {
  _id?: Types.ObjectId
  contextType: string
  contextId?: Types.ObjectId
  secureUrl: string
  folder: string
  fileName: string
  fileType: string // video, image, etc.
  size: number
  createdAt: Date
  updatedAt: Date
}
