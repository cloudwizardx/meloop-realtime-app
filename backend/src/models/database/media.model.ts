import mongoose from 'mongoose'
import { Media } from '~/interfaces/media.schema'

const mediaSchema = new mongoose.Schema<Media>(
  {
    contextType: { type: String, enum: ['Post', 'Page', 'Group', 'Comment', 'Message', 'ShortVideo'], required: true },
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false },
    secureUrl: { type: String, required: true },
    folder: { type: String, required: true },
    fileName: { type: String, required: true },
    fileType: { type: String, required: true }, // video, image, etc.
    size: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Media>('Media', mediaSchema)
