import { axiosInstance } from "../libs/Axios"

export const getNotificationOfUser = async () => {
    const res =  await axiosInstance.get('/notifications/')
    return res.data
}