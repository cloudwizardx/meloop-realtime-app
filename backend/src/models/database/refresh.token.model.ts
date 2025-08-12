import mongoose from 'mongoose'
import { RefreshToken } from '~/interfaces/schema/refresh.schema'

const refreshTokenSchema = new mongoose.Schema<RefreshToken>({
  token: { type: String, required: true },
  expiresIn: { type: Date, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

export default mongoose.model<RefreshToken>('RefreshToken', refreshTokenSchema)
