import type { FriendRequest } from "../interfaces/FriendRequest"
import type { UserPopulated } from "../interfaces/UserPopulated"
import { axiosInstance } from "../libs/Axios"


export const getFriendRequestsList = async (): Promise<FriendRequest[]> => {
    const res = await axiosInstance.get('/friends/request')
    return res.data.data as FriendRequest[]
}

export const getFriendSuggestList = async (): Promise<UserPopulated[]> => {
    const res = await axiosInstance.get('/friends/suggest')
    return res.data.data as UserPopulated[]
}   

export const sendFriendRequest = async (receiverId: string) => {
    await axiosInstance.post(`/friends/${receiverId}/invite`) 
}

export const acceptFriendRequest = async (inviteId: string) => {
    await axiosInstance.post(`/friends/${inviteId}/accepted`)
}

export const deletedFriendRequest = async (inviteId: string) => {
    await axiosInstance.post(`/friends/${inviteId}/deleted`)
}