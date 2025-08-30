/* eslint-disable @typescript-eslint/no-explicit-any */
import { BellRing, MessageCircleMore, Plus, Search } from "lucide-react"
import meloopLogo from "../assets/meloop_horizontal_logo.png"
import { useState, useRef, useEffect } from "react"
import * as notificationService from "../apis/NotificationService"
import { getAmountLength, getTimeAgo } from "../libs/CommonFunctions"
import { useAuthStore } from "../stores/AuthStore"
import { toast } from "react-toastify"
import type { NotificationBox } from "../interfaces/NotificationBox"

export const Header = () => {
  const [showNotificationBox, setShowNotificationBox] = useState(false)
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [notifications, setNotifications] = useState<NotificationBox[]>([])
  const authProfile = useAuthStore.getState().authProfile

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setShowNotificationBox(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res: NotificationBox[] =
          await notificationService.getNotificationOfUser()

        // convert sang Date object vì mặc định trả về từ created/updated là Date ISO nên getTime sẽ lỗi runtime trắng màn hình
        const mapped = res.map((n) => ({
          ...n,
          createdAt: new Date(n.createdAt),
          updatedAt: new Date(n.updatedAt),
        }))

        mapped.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        setNotifications(mapped)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNotifications()
  }, [])

  const socket = useAuthStore((state) => state.socket)
  useEffect(() => {
    if (!socket) return

    const handleInvitation = (data: any) => {
      const { sender, notification } = data
      setNotifications((prev) => [notification, ...prev])
      toast.info(`You have a new friend request from ${sender.name}`)
    }

    socket.on("receiveFriendInvitation", handleInvitation)

    return () => {
      socket.off("receiveFriendInvitation", handleInvitation)
    }
  }, [useAuthStore.getState().socket])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex items-center shrink-0">
            <img src={meloopLogo} alt="Meloop Logo" className="h-10 w-auto" />
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-lg mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search friends, groups..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border border-transparent 
                       focus:border-orange-500 focus:bg-white focus:ring-2 
                       focus:ring-orange-500/40 transition-all"
              />
            </div>
          </div>

          {/* Right - Actions */}
          <div
            className="flex items-center space-x-3 shrink-0 relative"
            ref={boxRef}
          >
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition">
              <Plus className="w-5 h-5 text-gray-600" />
            </button>

            {/* Notification button */}
            <button
              onClick={() => setShowNotificationBox((prev) => !prev)}
              className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition cursor-pointer"
            >
              <BellRing className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center shadow">
                {getAmountLength(notifications.length)}
              </span>
            </button>

            {/* Notification Box */}
            {showNotificationBox && (
              <div className="absolute right-12 top-12 w-80 max-h-96 bg-white border border-gray-200 rounded-xl shadow-lg overflow-y-auto z-50">
                <div className="p-3 border-b font-semibold text-gray-700">
                  Notifications
                </div>
                <ul className="divide-y divide-gray-100">
                  {notifications.map((item) => (
                    <li
                      key={item._id}
                      className="flex items-start gap-3 p-3 hover:bg-gray-50 cursor-pointer transition"
                    >
                      {/* Avatar */}
                      <img
                        className="rounded-full w-10 h-10 shrink-0"
                        src={item.sender?.profile.avatar}
                        alt="avatar"
                      />

                      {/* Nội dung */}
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-800 leading-snug">
                          {item.content.text}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                          {getTimeAgo(item.createdAt)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition">
              <MessageCircleMore className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center justify-center shadow">
                0
              </span>
            </button>

            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer">
              <img
                src={authProfile?.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
