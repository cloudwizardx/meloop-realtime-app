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

type PayloadVerified = z.infer<typeof PayloadSchema>

export const initSocket = async (io: Server) => {
  const subClient = redisClient.duplicate()
  await subClient.connect()
  io.adapter(createAdapter(redisClient, subClient))

  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token
    if (!token) return next(new UnauthorizeException('Unauthorized access!'))

    try {
      const payload: PayloadVerified = (await verifyToken(token)) as PayloadVerified
      socket.data.userId = payload.userId
      next()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return next(new UnauthorizeException('Invalid token'))
    }
  })

  io.on('connection', async (socket: Socket) => {
    const userId = socket.data.userId
    console.log('User connected:', userId, socket.id)
    socket.join(userId)

    const friends: Friend[] = await getMyFriends(new Types.ObjectId(userId))
    const onlineFriends: Record<string, string[]> = {}

    for (const friend of friends) {
      const friendId = friend.userId.toString() === userId ? friend.friendId.toString() : friend.userId.toString()
      const sockets = await io.in(friendId).fetchSockets()
      onlineFriends[friendId] = sockets.map((f) => f.id)
    }

    io.emit('getOnlineUsers', onlineFriends)

    socket.on('disconnect', async () => {
      console.log('User disconnected:', socket.id)

      const sockets = await io.in(userId).fetchSockets()
      if (sockets.length === 0) {
        const friendsAfterDisconnect: Friend[] = await getMyFriends(new Types.ObjectId(userId))
        const updatedOnlineFriends: Record<string, string[]> = {}
        for (const friend of friendsAfterDisconnect) {
          const friendId = friend.userId.toString() === userId ? friend.friendId.toString() : friend.userId.toString()
          const socketsInRoom = await io.in(friendId).fetchSockets()
          updatedOnlineFriends[friendId] = socketsInRoom.map((s) => s.id)
        }

        io.emit('getOnlineUsers', updatedOnlineFriends)
      }
    })
  })
}
