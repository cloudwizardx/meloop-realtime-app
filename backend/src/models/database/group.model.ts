import mongoose from 'mongoose'
import { Group } from '~/interfaces/group.schema'

const groupSchema = new mongoose.Schema<Group>(
  {
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String, required: true },
    description: { type: String, required: false },
    slogan: { type: String, required: false },
    photo: { type: String, required: true }, // URL to the group's photo
    coverPhoto: { type: String, required: false }, // URL to the group's cover photo
    status: { type: String, required: true }, // e.g., 'active', 'inactive'
    waitingApproval: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Users waiting for approval to join
  },
  { timestamps: true }
)

export default mongoose.model<Group>('Group', groupSchema)
