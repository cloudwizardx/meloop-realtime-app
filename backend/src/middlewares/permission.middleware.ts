import { NextFunction, Request, Response } from 'express'
import { getPermissionForRoleAndLevel } from '~/services/permission.service'

export const requirePermission = async (permission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const { role, levelMember } = req.user
      const permissions = await getPermissionForRoleAndLevel({ role, levelMember })
      if (!permissions.includes(permission)) {
        res.status(403).json({ message: 'Forbidden: Missing permission' })
      }

      next()
    } catch (error) {
      console.log('Permission check error:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
