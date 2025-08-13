import mongoose from 'mongoose'
import { User } from '~/interfaces/schema/user.schema'

const userSchema = new mongoose.Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isEmailVerified: { type: Boolean, required: true },
    isPhoneVerified: { type: Boolean, required: true },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
    isOnline: { type: Boolean, required: true, default: false },
    isActive: { type: Boolean, required: true, default: true },
    lastLogin: { type: Date, required: false, default: null },
    role: { type: String, enum: ['User', 'Admin', 'Moderator'], required: true, default: 'User' },
    levelMember: { type: String, enum: ['Normal', 'Gold', 'Diamond'], required: true, default: 'Normal' }
  },
  { timestamps: true }
)

export default mongoose.model<User>('User', userSchema)
