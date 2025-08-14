import mongoose from 'mongoose'
import { UserPermission } from '~/interfaces/schema/permission.schema'

const userPermissionsSchema = new mongoose.Schema<UserPermission>({
  role: { type: String, required: true },
  levelMember: { type: String, required: true },
  permissions: [{ type: String, required: true }]
})

export default mongoose.model<UserPermission>('UserPermission', userPermissionsSchema)
