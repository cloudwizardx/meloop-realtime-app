import { io, Socket } from 'socket.io-client'
import { useAuthStore } from '../stores/AuthStore'

const url = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001'

export let socket: Socket | null = null

export const connectSocket = (token: string) => {
    if (socket?.connected) return

    socket = io(url, {
        auth: { token },
        withCredentials: true,
        transports: ['websocket']
    })

    socket.on('getOnlineUsers', (onlineFriends) => {
        useAuthStore.getState().setOnlineUsers(onlineFriends)
    })

    return socket
}
