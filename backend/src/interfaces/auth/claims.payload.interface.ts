import z from 'zod'

export interface ClaimsPayload {
  userId: string
  levelMember: string
  role: string
  permissions: string[]
}

export const PayloadSchema = z.object({
  userId: z.string(),
  levelMember: z.string(),
  role: z.string(),
  permissions: z.array(z.string()),
  exp: z.number(),
  iss: z.string(),
  aud: z.string()
})
