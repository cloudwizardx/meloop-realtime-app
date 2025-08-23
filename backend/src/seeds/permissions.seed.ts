import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import UserPermissionModel from '../models/database/permission.model'
import { USER_PERMISSIONS } from '../utils/app.constant'

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI!)
}

async function seedRolePermissions() {
  const permissionRoleUserLevelNormal = {
    role: 'User',
    levelMember: 'Normal',
    permissions: Object.values(USER_PERMISSIONS)
  }

  await UserPermissionModel.updateOne(
    { role: permissionRoleUserLevelNormal.role, levelMember: permissionRoleUserLevelNormal.levelMember },
    { $set: { permissions: permissionRoleUserLevelNormal.permissions } },
    { upsert: true }
  )
}

;(async () => {
  await connectDB()
  await seedRolePermissions()
  process.exit(0)
})()
