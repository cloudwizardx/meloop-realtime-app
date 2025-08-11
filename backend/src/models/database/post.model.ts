import mongoose from 'mongoose'
import { Post } from '~/interfaces/schema/post.schema'

const postSchema = new mongoose.Schema<Post>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    contextType: { type: String, enum: ['Group', 'Page', 'Personal'], required: true },
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    likesCount: { type: Number, required: true, default: 0 },
    sharesCount: { type: Number, required: true, default: 0 },
    commentsCount: { type: Number, required: true, default: 0 },
    isEdit: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
)

export default mongoose.model<Post>('Post', postSchema)
