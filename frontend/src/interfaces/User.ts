import type { Profile } from "./Profile"

export interface User {
  _id?: string
  email: string
  isEmailVerified: boolean
  isPhoneVerified: boolean
  profile: Profile
  isOnline: boolean
  isActive: boolean
  role: 'User' | 'Admin' | 'Moderator' // User roles
  levelMember: 'Normal' | 'Gold' | 'Diamond'
  lastLogin: Date | null
  createdAt?: Date
  updatedAt?: Date
}
