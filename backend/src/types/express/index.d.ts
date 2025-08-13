import { User } from '~/interfaces/schema/user.schema'

declare module 'express-serve-static-core' {
  interface Request {
    user?: User | null
  }
}
