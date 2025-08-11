export interface ClaimsPayload {
  userId: string
  levelMember: string
  role: string
  permissions: string[]
}

export interface PayloadVerified {
  userId: string
  levelMember: string
  role: string
  permissions: string[]
  exp: number
  iss: string
  aud: string
}
