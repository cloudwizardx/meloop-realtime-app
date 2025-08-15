import { Types } from 'mongoose'
import { Server, Socket } from 'socket.io'
import z from 'zod'
import { UnauthorizeException } from '~/exceptions/unauthorized.exception'
import { PayloadSchema } from '~/interfaces/auth/claims.payload.interface'
import { Friend } from '~/interfaces/schema/friend.schema'
import { getMyFriends } from '~/services/friend.service'
import { verifyToken } from '~/utils/jwt.utils'

const userSockets: Map<string, string[]> = new Map()

export const getSocketIds = (userId: string): string[] => {
  return userSockets.get(userId) || []
}

type PayloadVerified = z.infer<typeof PayloadSchema>

export const initSocket = async (io: Server) => {
  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token
    if (!token) return next(new UnauthorizeException('Unauthorized access!'))

    try {
      const payload: PayloadVerified = (await verifyToken(token)) as PayloadVerified
      ;(socket as any).userId = payload.userId
      next()
    } catch (error) {
      return next(new UnauthorizeException('Invalid token'))
    }
  })

  io.on('connection', async (socket: Socket) => {
    const userId = (socket as any).userId
    console.log('User connected:', userId, socket.id)

    if (!userSockets.has(userId)) userSockets.set(userId, [])
    userSockets.get(userId)?.push(socket.id)

    const currentUserFriends: Friend[] = await getMyFriends(new Types.ObjectId(userId))
    const getMyOnlineFriendsAndSocketIds: Map<string, string[]> = new Map()
    currentUserFriends.forEach((x) => {
      const friendId = x.userId.toString() === userId ? x.friendId.toString() : x.userId.toString()
      getMyOnlineFriendsAndSocketIds.set(friendId, userSockets.get(friendId) || [])
    })

    io.emit('getOnlineUsers', Object.fromEntries(getMyOnlineFriendsAndSocketIds))

    socket.on('disconnect', async () => {
      console.log('User disconnected:', socket.id)
      const sockets = userSockets.get(userId) || []
      userSockets.set(
        userId,
        sockets.filter((id) => id !== socket.id)
      )
      if ((userSockets.get(userId) || []).length === 0) userSockets.delete(userId)

      const updatedOnlineFriends: Map<string, string[]> = new Map()
      const friendsAfterDisconnect: Friend[] = await getMyFriends(new Types.ObjectId(userId))
      friendsAfterDisconnect.forEach((x) => {
        const friendId = x.userId.toString() === userId ? x.friendId.toString() : x.userId.toString()
        updatedOnlineFriends.set(friendId, userSockets.get(friendId) || [])
      })

      io.emit('getOnlineUsers', Object.fromEntries(updatedOnlineFriends))
    })
  })
}
