import { Types } from 'mongoose'
import { Profile } from './profile.schema'

export interface User {
  _id?: Types.ObjectId
  email: string
  password: string
  isEmailVerified: boolean
  isPhoneVerified: boolean
  profile: Profile
  isOnline: boolean
  isActive: boolean
  lastLogin: Date
  createdAt?: Date
  updatedAt?: Date
}
