import { NextFunction, Request, Response } from 'express'
import { checkAndReturnNewAccessToken, loginWithCredentials, refreshToken, registerNewUser, verifyEmail } from '~/services/auth.service'
import { parseExpiration } from '~/utils/common.function'
import { sendVerificationEmail } from '~/utils/email.utils'

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const savedUser = await registerNewUser(req.body)
    if (!savedUser) {
      res.status(400).json({ message: 'Register account failed!', data: null })
    }

    sendVerificationEmail(savedUser.email)
    res.status(201).json({ message: 'User registered successfully!', data: savedUser })
  } catch (error) {
    next(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body.data
    const { accessToken, refreshToken, user, profile } = await loginWithCredentials(email, password)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: parseExpiration(process.env.JWT_REFRESH_EXPIRATION ?? '')
    })
    res.status(200).json({
      accessToken: accessToken,
      isAuthenticated: true,
      user: user,
      profile: profile
    })
  } catch (error) {
    next(error)
  }
}

export const verifyEmailUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.query
    if (!token || typeof token !== 'string') {
      return res.status(400).json({ message: 'Token is required' })
    }

    await verifyEmail(token)
    res.status(200).json({
      message: 'Your account verified email successfully!',
      data: true
    })
  } catch (error) {
    next(error)
  }
}

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { asToken, rfToken } = await refreshToken(req.body)

    res.cookie('refreshToken', rfToken, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: parseExpiration(process.env.JWT_REFRESH_EXPIRATION ?? '')
    })
    res.status(200).json({ accessToken: asToken, isAuthenticated: true })
  } catch (error) {
    next(error)
  }
}

export const authCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies.refreshToken as string
    const { accessToken, user, profile } = await checkAndReturnNewAccessToken(refreshToken)

    res.status(200).json({
      accessToken: accessToken,
      isAuthenticated: true,
      user: user,
      profile: profile
    })
  } catch(error){
    console.log(error)
    next(error)
  }
}
