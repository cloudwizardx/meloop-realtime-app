import mongoose from 'mongoose'
import { Notification } from '~/interfaces/notification.schema'

const notificationSchema = new mongoose.Schema<Notification>(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    contextType: {
      type: String,
      enum: ['Post', 'Comment', 'Message', 'Follower', 'Page', 'Group'],
      required: true
    },
    contextId: { type: mongoose.Schema.Types.ObjectId, required: false },
    content: { type: String, required: true },
    isRead: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
)

export default mongoose.model<Notification>('Notification', notificationSchema)
