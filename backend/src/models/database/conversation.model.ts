import mongoose from 'mongoose'
import { Conversation } from '~/interfaces/schema/conversation.schema'

const conversationSchema = new mongoose.Schema<Conversation>(
  {
    isGroupChat: { type: Boolean, required: true, default: false },
    name: { type: String, required: false },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    ownerNameLastMessage: { type: String, required: false },
    lastMessage: { type: String, required: false },
    lastSeen: { type: Date, required: false },
    theme: { type: String, required: false },
    emotionSymbol: { type: String, required: false },
    status: {
      type: String,
      enum: ['Active', 'Blocked'],
      required: true,
      default: 'Active'
    }
  },
  { timestamps: true }
)

export default mongoose.model('Conversation', conversationSchema)
