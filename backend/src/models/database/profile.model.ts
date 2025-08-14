import mongoose from 'mongoose'
import { Profile } from '~/interfaces/schema/profile.schema'
import { COVER_PHOTO_DEFAULT } from '~/utils/app.constant'

const profileSchema = new mongoose.Schema<Profile>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickName: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
    relationshipStatus: { type: String, enum: ['Single', 'Dating', 'Married', 'Divorced'], required: false },
    avatar: { type: String, required: true },
    coverPhoto: { type: String, required: false, default: COVER_PHOTO_DEFAULT },
    bio: { type: String, required: false, default: '' },
    major: { type: String, required: false, default: '' },
    school: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: false, default: 'Other' },
    friendsCount: { type: Number, required: false, default: 0 },
    address: [
      {
        name: { type: String, required: false, default: '' },
        specificAddress: { type: String, required: false, default: '' }
      }
    ],
    socialUrl: [
      {
        name: { type: String, required: false },
        url: { type: String, required: false }
      }
    ],
    introSelf: { type: String, required: false }
  },
  { timestamps: true }
)

export default mongoose.model<Profile>('Profile', profileSchema)
