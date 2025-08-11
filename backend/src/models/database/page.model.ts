import mongoose from 'mongoose'
import { Page } from '~/interfaces/schema/page.schema'

const pageSchema = new mongoose.Schema<Page>(
  {
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contact: [
      {
        type: {
          name: { type: String, required: false },
          link: { type: String, required: false }
        },
        required: false
      }
    ],
    name: { type: String, required: true },
    description: { type: String, required: false },
    slogan: { type: String, required: false },
    photo: { type: String, required: false },
    coverPhoto: { type: String, required: false },
    noteWorthy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: false }],
    isConfirmed: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
)

export default mongoose.model<Page>('Page', pageSchema)
