import { Types } from 'mongoose'

export interface Favorite {
  _id?: Types.ObjectId
  owner: Types.ObjectId // User who owns the favorite
  name: string // Name of the favorite collection
  items?: [{ contextType: 'Post' | 'ShortVideo' | 'Group'; contextId: Types.ObjectId }]
  description?: string
  limit?: number
  createdAt?: Date
  updatedAt?: Date
}
