import mongoose from 'mongoose'
import { Favorite } from '~/interfaces/favorite.schema'

const favoriteSchema = new mongoose.Schema<Favorite>(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who owns the favorite
    name: { type: String, required: true }, // Name of the favorite collection
    items: [
      {
        contextType: { type: String, enum: ['Post', 'ShortVideo', 'Group'], required: true }, // Type of context
        contextId: { type: mongoose.Schema.Types.ObjectId, required: true } // ID of the post, short video, or group
      }
    ],
    description: { type: String, required: false },
    limit: { type: Number, required: false, default: 20 } // Optional limit for the number of items
  },
  { timestamps: true }
)

export default mongoose.model<Favorite>('Favorite', favoriteSchema)
