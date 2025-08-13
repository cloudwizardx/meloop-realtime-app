import { NextFunction, Request, Response } from 'express'
import UserModel from '~/models/database/user.model'
import { verifyToken } from '~/utils/jwt.utils'

export const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization
  if (header && header.startsWith('Bearer ')) {
    const token = header.split(' ')[1]

    const payload = verifyToken(token)
    if (payload && payload.exp * 1000 > Date.now()) {
      const loadedUser = await UserModel.findById(payload.userId)

      req.user = loadedUser
    } else {
      res.status(401).json({
        message: 'Token is expired!',
        data: null
      })
    }
  } else {
    res.status(400).json({
      message: 'No token found!',
      data: null
    })
  }
  next()
}
