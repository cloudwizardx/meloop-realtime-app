import EmailAlreadyExistsException from '~/exceptions/email.exist.exception'
import { RegisterRequest } from '~/interfaces/auth/register.request'
import ProfileModel from '~/models/database/profile.model'
import UserModel from '~/models/database/user.model'
import RefreshTokenModel from '~/models/database/refresh.token.model'
import { AVATAR_DEFAULT, COVER_PHOTO_DEFAULT, USER_PERMISSIONS } from '~/utils/app.constant'
import bcrypt from 'bcrypt'
import { LoginRequest } from '~/exceptions/login.request'
import { InvalidCredentialException } from '~/exceptions/invalid.credential'
import { UnverifiedEmail } from '~/exceptions/account.not.verify.email.exception'
import { AccountBlockedException } from '~/exceptions/account.blocked.exception'
import { signAccessToken, signRefreshToken, verifyToken } from '~/utils/jwt.utils'
import { ClaimsPayload, PayloadSchema } from '~/interfaces/auth/claims.payload.interface'
import z from 'zod'
import { parseExpiration } from '~/utils/common.function'
import { Types } from 'mongoose'
import { ExpiredTokenException } from '~/exceptions/expired.token.exception'
import UserPermissionModel from '~/models/database/permission.model'
import jwt from 'jsonwebtoken'

export const registerNewUser = async (body: RegisterRequest) => {
  const existingUser = await UserModel.findOne({ email: body.email })
  if (existingUser) {
    throw new EmailAlreadyExistsException(`${body.email} already exists`)
  }

  if (body.password !== body.confirmPassword) {
    throw new Error('Password and confirm password do not match')
  }
  const aId: number = Math.floor(Math.random() * 100) + 1

  const profile = await ProfileModel.create({
    firstName: body.firstName,
    lastName: body.lastName,
    avatar: `${AVATAR_DEFAULT}${aId}`,
    coverPhoto: COVER_PHOTO_DEFAULT
  })

  const hashedPassword = await bcrypt.hash(body.password, 12)

  return await UserModel.create({
    email: body.email,
    password: hashedPassword,
    isEmailVerified: false,
    isPhoneVerified: false,
    profile: profile._id,
    isActive: false,
    role: 'User',
    levelMember: 'Normal',
    lastLogin: null
  })
}

export const verifyEmail = async (token: string) => {
  const decoded = jwt.verify(token, process.env.EMAIL_VERIFY_SECRET!) as { email: string }
  const loadedUser = await UserModel.findOne({ email: decoded.email })
  if (!loadedUser) {
    throw new Error(`User with email ${decoded.email} not exists`)
  }

  if (!loadedUser.isEmailVerified) {
    await UserPermissionModel.create({
      userId: loadedUser._id,
      role: loadedUser.role,
      permissions: Object.values(USER_PERMISSIONS)
    })

    await UserModel.updateOne(
      { email: decoded.email },
      {
        isEmailVerified: true,
        isActive: true
      }
    )
  }
}

export const loginWithCredentials = async (request: LoginRequest) => {
  const loadedUser = await UserModel.findOne({ email: request.email })
  if (!loadedUser) {
    throw new Error(`User with email ${request.email} not exists or is not active`)
  }

  if (!loadedUser.isEmailVerified) {
    throw new UnverifiedEmail(`${request.email} is not verified`)
  }

  if (!loadedUser.isActive) {
    throw new AccountBlockedException(`User with email ${request.email} is blocked`)
  }

  const isMatchedPassword = await bcrypt.compareSync(request.password, loadedUser.password)
  if (!isMatchedPassword) {
    throw new InvalidCredentialException()
  }

  const savedUser = await UserModel.findByIdAndUpdate(
    loadedUser._id,
    {
      lastLogin: new Date(),
      isOnline: true
    },
    { new: true }
  )

  const accessToken = signAccessToken({
    userId: savedUser?._id?.toString(),
    levelMember: savedUser?.levelMember,
    role: savedUser?.role
  } as ClaimsPayload)

  const refreshToken = signRefreshToken()
  clearAndCreateRefreshToken({
    token: refreshToken,
    expiresIn: new Date(Date.now() + parseExpiration(process.env.JWT_REFRESH_EXPIRATION ?? '')),
    userId: savedUser?._id ?? null
  })

  return {
    accessToken,
    refreshToken
  }
}

type PayloadVerified = z.infer<typeof PayloadSchema>

interface RefreshTokenParams {
  asToken: string
  rfToken: string
}

export const refreshToken = async ({ asToken, rfToken }: RefreshTokenParams) => {
  const payload: PayloadVerified = verifyToken(asToken) as PayloadVerified
  if (!payload) {
    throw new Error('Token invalid!')
  }

  const loadedCurrentRfToken = await RefreshTokenModel.findOne({ token: rfToken })
  if (loadedCurrentRfToken && loadedCurrentRfToken.expiresIn.getTime() > Date.now()) {
    const refreshToken: string = signRefreshToken()
    const accessToken: string = signAccessToken({
      userId: payload.userId,
      levelMember: payload.levelMember,
      role: payload.role
    } as ClaimsPayload)

    clearAndCreateRefreshToken({
      token: refreshToken,
      expiresIn: new Date(Date.now() + parseExpiration(process.env.JWT_REFRESH_EXPIRATION ?? '')),
      userId: new Types.ObjectId(payload.userId)
    })

    return {
      asToken: accessToken,
      rfToken: refreshToken
    }
  } else {
    throw new ExpiredTokenException('Refresh token expired time! Please, login again')
  }
}

interface ClearAndCreateRefreshTokenParams {
  token: string
  expiresIn: Date
  userId: Types.ObjectId | null
}

async function clearAndCreateRefreshToken({ token, expiresIn, userId }: ClearAndCreateRefreshTokenParams) {
  if (!userId) {
    throw new Error('User id not null!')
  }

  await RefreshTokenModel.deleteMany({ userId: userId })
  await RefreshTokenModel.create({
    token: token,
    expiresIn: expiresIn,
    userId: userId
  })
}
