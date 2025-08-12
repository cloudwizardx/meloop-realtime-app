import { NextFunction, Request, Response } from 'express'
import { loginWithCredentials, registerNewUser, verifyEmail } from '~/services/auth.service'

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

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken, refreshToken } = await loginWithCredentials(req.body)
    res.status(200).json({
      accessToken: accessToken,
      refreshToken: refreshToken,
      isAuthenticated: true
    })
  } catch (error) {
    next(error)
  }
}

export const verifyEmailUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await verifyEmail(req.body)
    res.status(200).json({
      message: 'Your account verified email successfully!'
    })
  } catch (error) {
    next(error)
  }
}
