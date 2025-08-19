import {
  CircleUserRound,
  CloudUpload,
  Ellipsis,
  Eye,
  Link,
  Palette,
  Phone,
  Send,
  ShieldBan,
  Smile,
  Video,
  Search,
  Plus,
  MoreHorizontal,
} from "lucide-react"
import { Header } from "../components/Header"

export const MessagePage = () => {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex h-[calc(100vh-64px)] mt-16">
        {/* Left Sidebar - Conversations */}
        <section className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">LoopTalk</h1>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Ellipsis className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search on LoopTalk"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border-none outline-none focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                All
              </button>
              <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Unread
              </button>
              <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Groups
              </button>
            </div>
          </div>

          <div className="flex-1">
            {/* Active Conversation */}
            <div className="flex items-center p-3 bg-orange-50 border-l-4 border-orange-500 hover:bg-orange-100 cursor-pointer transition-colors">
              <div className="relative mr-3">
                <img
                  src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
                  alt="Thanh Như"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">Thanh Như</h3>
                  <span className="text-xs text-gray-500">2h</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Hey! How are you doing today?</p>
              </div>
            </div>

            {/* Other Conversations */}
            <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="relative mr-3">
                <img
                  src="/diverse-profile-avatars.png"
                  alt="Thanh Như 1"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">Thanh Như 1</h3>
                  <span className="text-xs text-gray-500">5h</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Thanks for the help yesterday!</p>
              </div>
            </div>

            <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="relative mr-3">
                <img
                  src="/diverse-profile-avatars-2.png"
                  alt="Thanh Như 2"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">Thanh Như 2</h3>
                  <span className="text-xs text-gray-500">1d</span>
                </div>
                <p className="text-sm text-gray-600 truncate">See you tomorrow at the meeting</p>
              </div>
            </div>

            <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="relative mr-3">
                <img
                  src="/diverse-profile-avatars.png"
                  alt="John Doe"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">John Doe</h3>
                  <span className="text-xs text-gray-500">2d</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Let's catch up soon!</p>
              </div>
            </div>

            <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="relative mr-3">
                <img
                  src="/diverse-profile-avatars-2.png"
                  alt="Sarah Wilson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">Sarah Wilson</h3>
                  <span className="text-xs text-gray-500">3d</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Great presentation today!</p>
              </div>
            </div>

            <div className="flex items-center p-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="relative mr-3">
                <img
                  src="/diverse-profile-avatars.png"
                  alt="Mike Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 truncate">Mike Chen</h3>
                  <span className="text-xs text-gray-500">4d</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Thanks for the code review</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Chat Area */}
        <section className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              <img
                src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
                alt="Thanh Như"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="font-semibold text-gray-900">Thanh Như</h2>
                <p className="text-sm text-green-500">Active now</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Phone className="w-5 h-5 text-orange-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Video className="w-5 h-5 text-orange-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 bg-gray-50">
            <div className="space-y-4">
              {/* Received Message */}
              <div className="flex items-start">
                <img
                  src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
                  alt="Thanh Như"
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <div className="bg-white rounded-2xl px-4 py-2 max-w-xs shadow-sm">
                  <p className="text-gray-900">Hey! How are you doing today?</p>
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex items-start justify-end">
                <div className="bg-orange-500 text-white rounded-2xl px-4 py-2 max-w-xs">
                  <p>I'm doing great! Thanks for asking. How about you?</p>
                </div>
              </div>

              {/* Received Message */}
              <div className="flex items-start">
                <img
                  src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
                  alt="Thanh Như"
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <div className="bg-white rounded-2xl px-4 py-2 max-w-xs shadow-sm">
                  <p className="text-gray-900">I'm doing well too! Want to grab coffee later?</p>
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex items-start justify-end">
                <div className="bg-orange-500 text-white rounded-2xl px-4 py-2 max-w-xs">
                  <p>That sounds perfect! What time works for you?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Plus className="w-5 h-5 text-orange-500" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Aa"
                  className="w-full px-4 py-2 bg-gray-100 rounded-full border-none outline-none focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Smile className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
              <button className="p-2 hover:bg-orange-100 rounded-full transition-colors">
                <Send className="w-5 h-5 text-orange-500" />
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar - User Info */}
        <section className="w-80 bg-white border-l border-gray-200">
          <div className="p-6">
            {/* User Profile */}
            <div className="text-center mb-6">
              <img
                src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
                alt="Thanh Như"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-lg">Thanh Như</h3>
              <button className="flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 mt-2 mx-auto">
                <CircleUserRound className="w-4 h-4" />
                <span className="text-sm">View Profile</span>
              </button>
            </div>

            {/* Customize Chat */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Customize Chat</h4>
              <div className="space-y-3">
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Palette className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Change Theme</span>
                </button>
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Smile className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Change Emoji</span>
                </button>
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="w-5 h-5 text-gray-600 font-bold text-center">Aa</span>
                  <span className="text-gray-700">Edit Nicknames</span>
                </button>
              </div>
            </div>

            {/* Media & Files */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Media & Files</h4>
              <div className="space-y-3">
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <CloudUpload className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Media Files</span>
                </button>
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Link className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Links</span>
                </button>
              </div>
            </div>

            {/* Privacy & Support */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Privacy & Support</h4>
              <div className="space-y-3">
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <ShieldBan className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Block User</span>
                </button>
                <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <Eye className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Read Receipts</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
