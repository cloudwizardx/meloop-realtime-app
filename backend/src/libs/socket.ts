/* eslint-disable @typescript-eslint/no-unused-vars */
import { Types } from 'mongoose'
import { Server, Socket } from 'socket.io'
import z from 'zod'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import { PayloadSchema } from '~/interfaces/auth/claims.payload.interface'
import { Friend } from '~/interfaces/schema/friend.schema'
import { getMyFriends } from '~/services/friend.service'
import { verifyToken } from '~/utils/jwt.utils'
import redisClient from '~/configs/redis.config'
import { createAdapter } from '@socket.io/redis-adapter'

let ioInstance: Server

type PayloadVerified = z.infer<typeof PayloadSchema>

export const initSocket = async (io: Server) => {
  const subClient = redisClient.duplicate()
  await subClient.connect()
  io.adapter(createAdapter(redisClient, subClient))
  ioInstance = io

  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token
    if (!token) return next(new UnauthorizeException('Unauthorized access!'))

    try {
      const payload: PayloadVerified = (await verifyToken(token)) as PayloadVerified
      socket.data.userId = payload.userId
      next()
    } catch (error) {
      return next(new UnauthorizeException('Invalid token'))
    }
  })

  io.on('connection', async (socket: Socket) => {
    const userId = socket.data.userId
    console.log('User connected:', userId, socket.id)
    socket.join(userId)

    const friends: Friend[] = await getMyFriends(new Types.ObjectId(userId))
    const onlineFriends: string[] = [] // Record<string, string[]>

    for (const friend of friends) {
      const friendId = friend.userId.toString() === userId ? friend.friendId.toString() : friend.userId.toString()
      const sockets = await io.in(friendId).fetchSockets()
      if (sockets.length > 0) {
        onlineFriends.push(friendId)
      }
    }

    io.emit('getOnlineUsers', onlineFriends)

    socket.on('disconnect', async () => {
      console.log('User disconnected:', socket.id)

      const sockets = await io.in(userId).fetchSockets()
      if (sockets.length === 0) {
        const friendsAfterDisconnect: Friend[] = await getMyFriends(new Types.ObjectId(userId))
        const updatedOnlineFriends: string[] = [] // Record<string, string[]>
        for (const friend of friendsAfterDisconnect) {
          const friendId = friend.userId.toString() === userId ? friend.friendId.toString() : friend.userId.toString()
          const socketsInRoom = await io.in(friendId).fetchSockets()
          if (socketsInRoom.length > 0) {
            updatedOnlineFriends.push(friendId)
          }
        }

        io.emit('getOnlineUsers', updatedOnlineFriends)
      }
    })
  })
}

export const getIo = () => {
  if (!ioInstance) throw new Error('Socket.IO not initialized')
  return ioInstance
}
