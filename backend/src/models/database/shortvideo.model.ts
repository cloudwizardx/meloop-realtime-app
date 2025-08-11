import mongoose from 'mongoose'
import { ShortVideo } from '~/interfaces/schema/shortvideo.schema'

const shortVideoSchema = new mongoose.Schema<ShortVideo>(
  {
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the short video
    title: { type: String, required: true },
    content: { type: String, required: false },
    videoUrl: { type: String, required: true }, // URL to the short video file
    thumbnailUrl: { type: String, required: false }, // URL to the thumbnail image
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    sharesCount: { type: Number, default: 0 },
    isEdit: { type: Boolean, default: false }
  },
  { timestamps: true }
)

export default mongoose.model<ShortVideo>('ShortVideo', shortVideoSchema)
