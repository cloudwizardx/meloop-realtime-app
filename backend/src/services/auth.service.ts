import EmailAlreadyExistsException from '~/exceptions/email.exist.exception'
import { RegisterRequest } from '~/interfaces/auth/register.request'
import ProfileModel from '~/models/database/profile.model'
import UserModel from '~/models/database/user.model'
import { AVATAR_DEFAULT, COVER_PHOTO_DEFAULT, USER_PERMISSIONS } from '~/utils/app.constant'
import bcrypt from 'bcrypt'
import { LoginRequest } from '~/exceptions/login.request'
import { InvalidCredentialException } from '~/exceptions/invalid.credential'
import { UnverifiedEmail } from '~/exceptions/account.not.verify.email.exception'
import { AccountBlockedException } from '~/exceptions/account.blocked.exception'
import { signAccessToken, signRefreshToken } from '~/utils/jwt.utils'
import { ClaimsPayload } from '~/interfaces/auth/claims.payload.interface'

export const register = async (body: RegisterRequest) => {
  const existingUser = await UserModel.find({ email: body.email })
  if (existingUser) {
    throw new EmailAlreadyExistsException(`Email ${body.email} already exists`)
  }

  if (body.password !== body.confirmPassword) {
    throw new Error('Password and confirm password do not match')
  }

  const profile = await ProfileModel.create({
    firstName: body.firstName,
    lastName: body.lastName,
    avatar: AVATAR_DEFAULT + Math.floor(Math.random() * 100) + 1,
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
    permissions: [],
    lastLogin: null
  })
}

export const verifyEmail = async (email: string) => {
  const loadedUser = await UserModel.find({ email: email })
  if (loadedUser) {
    throw new Error(`User with email ${email} not exists`)
  }

  await UserModel.updateOne(
    { email: email },
    {
      isEmailVerified: true,
      permissions: USER_PERMISSIONS,
      isActive: true
    }
  )
}

export const login = async (request: LoginRequest) => {
  const loadedUser = await UserModel.findOne({ email: request.email })
  if (!loadedUser) {
    throw new Error(`User with email ${request.email} not exists or is not active`)
  }

  if (!loadedUser.isEmailVerified) {
    throw new UnverifiedEmail(`Email ${request.email} is not verified`)
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
    role: savedUser?.role,
    permissions: savedUser?.permissions || []
  } as ClaimsPayload)

  const refreshToken = signRefreshToken()
  return {
    accessToken,
    refreshToken
  }
}
