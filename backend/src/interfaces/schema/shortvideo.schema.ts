import { Types } from 'mongoose'

export interface ShortVideo {
  _id?: Types.ObjectId
  creator: Types.ObjectId // User who created the short video
  title: string
  content?: string
  videoUrl: string // URL to the short video file
  thumbnailUrl?: string // URL to the thumbnail image
  likesCount: number
  commentsCount: number
  sharesCount: number
  isEdit: boolean
  createdAt?: Date
  updatedAt?: Date
}
