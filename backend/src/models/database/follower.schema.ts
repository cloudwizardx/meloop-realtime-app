import mongoose from 'mongoose'
import { Follower } from '~/interfaces/schema/follower.schema'

const followerSchema = new mongoose.Schema<Follower>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who is following
    followedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // User being followed
  },
  { timestamps: true }
)

export default mongoose.model<Follower>('Follower', followerSchema)
