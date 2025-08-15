import { Server, Socket } from "socket.io"


const userSockets: Map<string, string[]> = new Map()

export const getSocketIds = (userId: string): string[] => {
    return userSockets.get(userId) || []
}

export const initSocket = async (io: Server) => {
    
}