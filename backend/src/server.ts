import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import envConfig from './configs/env.config'
import connectToDatabase from './libs/db.connection'
import http from 'http'
import { Server } from 'socket.io'
import { initSocket } from '~/libs/socket'

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_PATH ?? 'http://localhost:5173',
    methods: ["GET", "POST"],
    credentials: true
  }
})
initSocket(io)

server.listen(envConfig.port, () => {
  // console.log(`Server is running on port ${envConfig.port} in ${envConfig.nodeEnv} mode`)
  connectToDatabase(envConfig.mongoUri)
})
