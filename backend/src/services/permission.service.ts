import { Types } from 'mongoose'
import redisClient from '~/configs/redis.config'
import UserPermissionModel from '~/models/database/permission.model'

interface PermissionForRoleParams {
  userId: Types.ObjectId
  role: string
}

export const getPermissionForRole = async ({ userId, role }: PermissionForRoleParams) => {
  const cacheKey = `role_permission:${role}`

  const cachedPermission = await redisClient.get(cacheKey)
  if (cachedPermission) {
    return JSON.parse(cachedPermission)
  }

  const permissionDoc = await UserPermissionModel.findOne({ userId: userId, role: role })
  const permissions = permissionDoc?.permissions || []

  await redisClient.set(cacheKey, JSON.stringify(permissions), {
    EX: 600
  })

  return permissions
}
