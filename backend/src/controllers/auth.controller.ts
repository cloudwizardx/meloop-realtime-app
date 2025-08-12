import { NextFunction, Request, Response } from 'express'
import { login, registerNewUser } from '~/services/auth.service'

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const savedUser = await registerNewUser(req.body)
    if (!savedUser) {
      res.status(400).json({ message: 'Register account failed!', data: null })
    }
    res.status(201).json({ message: 'User registered successfully!', data: savedUser })
  } catch (error) {
    next(error)
  }
}


