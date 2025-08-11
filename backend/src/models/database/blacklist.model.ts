import mongoose from 'mongoose'
import { BlackList } from '~/interfaces/schema/blacklist.schema'

const blackListSchema = new mongoose.Schema<BlackList>(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who is blacklisted
    contextType: { type: String, enum: ['User', 'Group', 'Page'], required: true }, // Type of context being blacklisted
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false } // ID of the user, group, or page being blacklisted
  },
  { timestamps: true }
)

export default mongoose.model<BlackList>('BlackList', blackListSchema)
