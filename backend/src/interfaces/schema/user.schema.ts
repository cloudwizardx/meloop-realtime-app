import { Types } from 'mongoose'
import { Profile } from './profile.schema'

export interface User {
  _id?: Types.ObjectId
  email: string
  password: string
  isEmailVerified: boolean
  isPhoneVerified: boolean
  profile: Types.ObjectId
  isOnline: boolean
  isActive: boolean
  role: 'User' | 'Admin' | 'Moderator' // User roles
  levelMember: 'Normal' | 'Gold' | 'Diamond'
  lastLogin: Date | null
  permissions?: string[]
  createdAt?: Date
  updatedAt?: Date
}
