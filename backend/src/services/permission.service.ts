import redisClient from '~/configs/redis.config'
import UserPermissionModel from '~/models/database/permission.model'

interface PermissionForRoleParams {
  role: string
  level: string
}

export const getPermissionForRole = async ({ role, level }: PermissionForRoleParams) => {
  const cacheKey = `role_permission:${role.toLowerCase()}:${level.toLowerCase()}`

  const cachedPermission = await redisClient.get(cacheKey)
  if (cachedPermission) {
    return JSON.parse(cachedPermission)
  }

  const permissionDoc = await UserPermissionModel.findOne({ level: level, role: role })
  const permissions = permissionDoc?.permissions || []

  const ttl = parseInt(process.env.REDIS_TTL!)
  await redisClient.set(cacheKey, JSON.stringify(permissions), {
    EX: ttl
  })

  return permissions
}
