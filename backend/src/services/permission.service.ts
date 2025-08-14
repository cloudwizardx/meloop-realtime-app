/* eslint-disable prettier/prettier */
import redisClient from '~/configs/redis.config'
import UserPermissionModel from '~/models/database/permission.model'

interface PermissionForRoleParams {
  role: string
  levelMember: string
}

export const getPermissionForRoleAndLevel = async ({ role, levelMember }: PermissionForRoleParams): Promise<string[]> => {
  const cacheKey = `role_permission:${role.toLowerCase()}:${levelMember.toLowerCase()}`

  const cachedPermission = await redisClient.get(cacheKey)
  if (cachedPermission) {
    return JSON.parse(cachedPermission)
  }

  const permissionDoc = await UserPermissionModel.findOne({ levelMember: levelMember, role: role })
  const permissions = permissionDoc?.permissions || []

  const ttl = parseInt(process.env.REDIS_TTL!)
  await redisClient.set(cacheKey, JSON.stringify(permissions), {
    EX: ttl
  })

  return permissions
}
