import mongoose from 'mongoose'
import { Friend } from '~/interfaces/friend.schema'

const friendSchema = new mongoose.Schema<Friend>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Deleted'],
      required: true,
      default: 'Pending'
    }
  },
  { timestamps: true }
)

export default mongoose.model<Friend>('Friend', friendSchema)
