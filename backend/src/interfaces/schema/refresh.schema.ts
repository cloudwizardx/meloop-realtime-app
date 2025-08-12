import { Types } from 'mongoose'

export interface RefreshToken {
  token: string
  expiresIn: Date
  userId: Types.ObjectId
}
