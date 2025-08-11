import jwt, { SignOptions } from 'jsonwebtoken'
import fs from 'fs'
import { ClaimsPayload, PayloadVerified } from '~/interfaces/auth/claims.payload.interface'
import crypto from 'crypto'
import { ExpiredTokenException } from '~/exceptions/expired.token.exception'

const PUBLIC_KEY_PATH = fs.readFileSync(process.env.JWT_PUBLIC_KEY!, 'utf-8')

const PRIVATE_KEY_PATH = fs.readFileSync(process.env.JWT_PRIVATE_KEY!, 'utf-8')

const JWT_EXPIRATION = process.env.JWT_EXPIRATION

const JWT_ISSUER = process.env.JWT_ISSUER

const JWT_AUDIENCE = process.env.JWT_AUDIENCE

if (!JWT_EXPIRATION || !JWT_ISSUER || !JWT_AUDIENCE) {
  throw new Error('JWT configuration is missing in environment variables')
}

const options: SignOptions = {
  algorithm: 'RS256',
  expiresIn: Number(JWT_EXPIRATION),
  issuer: JWT_ISSUER,
  audience: JWT_AUDIENCE
}

export const signAccessToken = (claims: ClaimsPayload): string => {
  return jwt.sign(claims, PRIVATE_KEY_PATH, options)
}

export const signRefreshToken = (): string => {
  return crypto.randomBytes(64).toString('hex')
}

export const verifyToken = (token: string): PayloadVerified | null => {
  const payload: PayloadVerified = jwt.verify(token, PUBLIC_KEY_PATH) as PayloadVerified
  if (payload.exp < Date.now() / 1000) {
    throw new ExpiredTokenException()
  }

  if (payload.iss !== JWT_ISSUER || payload.aud !== JWT_AUDIENCE) {
    throw new Error('Invalid token issuer or audience')
  }
  return payload
}
