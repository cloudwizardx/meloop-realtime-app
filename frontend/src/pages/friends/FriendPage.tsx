import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { FriendRequestOnTopPage } from "./FriendRequestOnTopPage"
import { FriendSuggestOnBottomPage } from "./FriendSuggestOnBottomPage"
import type { FriendRequest } from "../../interfaces/FriendRequest"
import type { UserPopulated } from "../../interfaces/UserPopulated"
import * as friendService from '../../apis/FriendService'
import { FriendSideBar } from "../../components/FriendSideBar"

export const FriendPage = () => {
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([])
  const [friendSuggests, setFriendSuggests] = useState<UserPopulated[]>([])

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const res = await friendService.getFriendRequestsList()
        res.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        setFriendRequests(res)
      } catch (error) {
        console.log(error)
        toast.error(
          "Our system occurred error, Please try again after some minutes!"
        )
      }
    }
    fetchFriendRequests()
  }, [])

  useEffect(() => {
    const fetchFriendSuggests = async () => {
      try {
        const res = await friendService.getFriendSuggestList()
        setFriendSuggests(res)
      } catch (error) {
        console.log(error)
        toast.error(
          "Our system occurred error, Please try again after some minutes!"
        )
      }
    }
    fetchFriendSuggests()
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div>
        <FriendSideBar friendRequests={friendRequests} />
      </div>
      <section className="mb-8">
        <FriendRequestOnTopPage friendRequests={friendRequests}/>
      </section>
      <div className="border-t border-gray-200 mb-8"></div>
      <section>
        <FriendSuggestOnBottomPage friendSuggests={friendSuggests}/>
      </section>
    </div>
  )
}
