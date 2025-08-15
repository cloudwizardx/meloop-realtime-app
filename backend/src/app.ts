import express from 'express'
import { globalErrorHandle } from '~/middlewares/error.middleware'
import authRoutes from '~/routes/auth.routes'
import userRoutes from '~/routes/user.routes'
import friendRoute from '~/routes/friend.routes'
import http from 'http'
import { Server } from 'socket.io'
import { initSocket } from '~/libs/socket'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: [process.env.FRONTEND_PATH ?? '*'] }
})

app.use(express.json())
initSocket(io)

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users/me', userRoutes)
app.use('/api/v1/friends', friendRoute)

app.use(globalErrorHandle)

// eslint-disable-next-line prettier/prettier
export default app