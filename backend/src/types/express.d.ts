import type { User } from '~/interfaces/schema/user.schema'

declare global {
  namespace Express {
    interface Request {
      user?: User | null
    }
  }
}
