import mongoose from 'mongoose'
import { Share } from '~/interfaces/schema/share.schema'

const shareSchema = new mongoose.Schema<Share>(
  {
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contextType: { type: String, enum: ['Post', 'Page', 'Group', 'ShortVideo'], required: true },
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false },
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }]
  },
  { timestamps: true }
)

export default mongoose.model('Share', shareSchema)
