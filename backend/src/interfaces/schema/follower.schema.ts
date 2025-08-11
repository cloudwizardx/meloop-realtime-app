import { Types } from 'mongoose'

export interface Follower {
  _id?: Types.ObjectId
  user: Types.ObjectId // User who is following
  followedUser: Types.ObjectId // User being followed
  createdAt?: Date
  updatedAt?: Date
}
