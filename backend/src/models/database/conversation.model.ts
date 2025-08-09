import mongoose from 'mongoose'
import { Conversation } from '~/interfaces/conversation.schema'
import { REGEX_LINK_MESSAGE } from '~/utils/app.constant'

const conversationSchema = new mongoose.Schema<Conversation>(
  {
    isGroupChat: { type: Boolean, required: true, default: false },
    name: { type: String, required: false },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
    ownerNameLastMessage: { type: String, required: false },
    lastMessage: { type: String, required: false },
    lastSeen: { type: Date, required: false },
    status: {
      type: String,
      enum: ['Active', 'Blocked'],
      required: true,
      default: 'Active'
    },
    links: [{ type: String, match: REGEX_LINK_MESSAGE }]
  },
  { timestamps: true }
)

export default mongoose.model('Conversation', conversationSchema)
