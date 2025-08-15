import mongoose from 'mongoose'
import { Message } from '~/interfaces/schema/message.schema'
import { REGEX_LINK_MESSAGE } from '~/utils/app.constant'

const messageSchema = new mongoose.Schema<Message>(
  {
    conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation', required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['Text', 'Image', 'Video'], required: true },
    text: { type: String, required: true },
    isEdited: { type: Boolean, required: true, default: false },
    media: [
      {
        mediaId: { type: mongoose.Types.ObjectId, required: false, ref: 'Media' },
        url: { type: String, required: false },
        type: { type: String, enum: ['Image', 'Video'], required: false },
        size: { type: Number, required: false }
      }
    ],
    links: [{ type: String, match: REGEX_LINK_MESSAGE }],
    replyTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: false },
    status: { type: String, enum: ['Sent', 'Delivered', 'Read'], required: true, default: 'Sent' },
    sentAt: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
  },
  { timestamps: true }
)

export default mongoose.model<Message>('Message', messageSchema)
