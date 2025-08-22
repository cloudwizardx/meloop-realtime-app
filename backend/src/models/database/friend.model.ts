import mongoose from 'mongoose'
import { Friend } from '~/interfaces/schema/friend.schema'

const friendSchema = new mongoose.Schema<Friend>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Deleted'],
      required: true,
      default: 'Pending'
    },
    mutualCount: { type: Number, required: false },
    mutualPreview: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }]
  },
  { timestamps: true }
)

export default mongoose.model<Friend>('Friend', friendSchema)
