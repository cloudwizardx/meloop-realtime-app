import express from 'express'
import { globalErrorHandle } from '~/middlewares/error.middleware'
import authRoutes from '~/routes/auth.routes'
import userRoutes from '~/routes/user.routes'
import friendRoute from '~/routes/friend.routes'
import messageRoute from '~/routes/message.routes'
import notificationRoute from '~/routes/notify.routes'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.FRONTEND_PATH ?? 'http://localhost:5173',
    credentials: true
  })
)

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users/me', userRoutes)
app.use('/api/v1/friends', friendRoute)
app.use('/api/v1/messages', messageRoute)
app.use('/api/v1/notifications', notificationRoute)

app.use(globalErrorHandle)

// eslint-disable-next-line prettier/prettier
export default app