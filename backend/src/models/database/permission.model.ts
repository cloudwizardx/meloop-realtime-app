import mongoose from 'mongoose'
import { UserPermission } from '~/interfaces/schema/permission.schema'

const userPermissionsSchema = new mongoose.Schema<UserPermission>({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  role: { type: String, required: true },
  permissions: [{ type: String, required: true }]
})

export default mongoose.model<UserPermission>('UserPermission', userPermissionsSchema)
