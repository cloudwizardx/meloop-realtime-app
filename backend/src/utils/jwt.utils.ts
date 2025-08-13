import jwt, { SignOptions } from 'jsonwebtoken'
import z from 'zod'
import { ClaimsPayload, PayloadSchema } from '~/interfaces/auth/claims.payload.interface'
import crypto from 'crypto'
import { ExpiredTokenException } from '~/exceptions/expired.token.exception'
import fs from 'fs'
import path from 'path'
import { parseExpiration } from './common.function'

const PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '../../keys/private.pem'), 'utf8')

const PUBLIC_KEY = fs.readFileSync(path.join(__dirname, '../../keys/public.pem'), 'utf8')

const JWT_EXPIRATION = process.env.JWT_EXPIRATION

const JWT_ISSUER = process.env.JWT_ISSUER

const JWT_AUDIENCE = process.env.JWT_AUDIENCE

if (!JWT_EXPIRATION || !JWT_ISSUER || !JWT_AUDIENCE) {
  throw new Error('JWT configuration is missing in environment variables')
}

const options: SignOptions = {
  algorithm: 'RS256',
  expiresIn: parseExpiration(JWT_EXPIRATION),
  issuer: JWT_ISSUER,
  audience: JWT_AUDIENCE
}

export const signAccessToken = (claims: ClaimsPayload): string => {
  return jwt.sign(claims, PRIVATE_KEY, options)
}

export const signRefreshToken = (): string => {
  return crypto.randomBytes(64).toString('hex')
}

type PayloadVerified = z.infer<typeof PayloadSchema>

export const verifyToken = (token: string): PayloadVerified | null => {
  const payload: PayloadVerified = jwt.verify(token, PUBLIC_KEY) as PayloadVerified
  if (payload.exp < Date.now() / 1000) {
    throw new ExpiredTokenException()
  }

  if (payload.iss !== JWT_ISSUER || payload.aud !== JWT_AUDIENCE) {
    throw new Error('Invalid token issuer or audience')
  }
  return payload
}
