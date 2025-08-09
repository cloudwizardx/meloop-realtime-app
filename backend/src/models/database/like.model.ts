import mongoose from 'mongoose'
import { Like } from '~/interfaces/like.schema'

const likeSchema = new mongoose.Schema<Like>(
  {
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contextType: { type: String, enum: ['Post', 'Page', 'ShortVideo'], required: true },
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false }
  },
  { timestamps: true }
)

export default mongoose.model('Like', likeSchema)
