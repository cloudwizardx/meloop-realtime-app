import { Profile } from './profile.schema'

export interface User {
  email: string
  password: string
  isEmailVerified: boolean
  isPhoneVerified: boolean
  profile: Profile
  isOnline: boolean
  isActive: boolean
  lastLogin: Date
}
