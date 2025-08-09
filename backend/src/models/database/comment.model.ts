import mongoose from 'mongoose'
import { Comment } from '~/interfaces/comment.schema'

const commentSchema = new mongoose.Schema<Comment>(
  {
    contextType: { type: String, enum: ['Post', 'ShortVideo'], required: true }, // Post or ShortVideo
    contextId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the post or short video
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the comment
    replies: [
      {
        repliedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        isEdit: { type: Boolean, required: true, default: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
)

export default mongoose.model<Comment>('Comment', commentSchema)
