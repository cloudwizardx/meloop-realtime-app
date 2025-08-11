import EmailAlreadyExistsException from '~/exceptions/email.exist.exception'
import { RegisterRequest } from '~/interfaces/auth/register.request'
import ProfileModel from '~/models/database/profile.model'
import UserModel from '~/models/database/user.model'
import { AVATAR_DEFAULT, COVER_PHOTO_DEFAULT } from '~/utils/app.constant'
import bcrypt from 'bcrypt'

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
