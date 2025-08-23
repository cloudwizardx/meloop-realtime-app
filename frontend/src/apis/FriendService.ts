import type { FriendRequest } from "../interfaces/FriendRequest"
import { axiosInstance } from "../libs/Axios"


export const getFriendRequestsList = async (): Promise<FriendRequest[]> => {
    const res = await axiosInstance.get('/friends/request')
    return res.data as FriendRequest[]
}