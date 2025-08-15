import mongoose from 'mongoose'
import { Notification } from '~/interfaces/schema/notification.schema'

const notificationSchema = new mongoose.Schema<Notification>(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    contextType: {
      type: String,
      enum: ['Post', 'Comment', 'Message', 'Follower', 'Page', 'Group', 'Friend'],
      required: true
    },
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false },
    content: {
      text: { type: String, required: true },
      extraInfo: { type: String, required: false }
    },
    isRead: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
)

export default mongoose.model<Notification>('Notification', notificationSchema)
