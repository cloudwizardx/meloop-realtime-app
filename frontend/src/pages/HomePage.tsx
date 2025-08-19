import meloopLogo from "../assets/meloop_horizontal_logo.png";

import {
  BellRing,
  Cake,
  FolderHeart,
  Heart,
  ImageUp,
  Library,
  Link,
  MessageCircleMore,
  MessageSquareText,
  Plus,
  Send,
  Play,
  UserX,
  UserRound,
  UsersRound,
  Video,
  Search,
  MoreHorizontal,
} from "lucide-react";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            <div className="flex items-center space-x-3 shrink-0">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition">
                <Plus className="w-5 h-5 text-gray-600" />
              </button>

              <button className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition">
                <BellRing className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center shadow">
                  3
                </span>
              </button>

              <button className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition">
                <MessageCircleMore className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center justify-center shadow">
                  5
                </span>
              </button>

              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer">
                <img
                  src="https://avatar.iran.liara.run/public/21"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <aside className="w-80 fixed left-4 top-20 h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              {/* User Profile */}
              <div className="flex items-center space-x-3 mb-6 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <img
                  src="https://avatar.iran.liara.run/public/21"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-gray-900">Nguyen Khai</span>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-1">
                {[
                  { icon: UserRound, label: "Friends", color: "text-blue-600" },
                  {
                    icon: UsersRound,
                    label: "Groups",
                    color: "text-green-600",
                  },
                  { icon: Library, label: "Pages", color: "text-purple-600" },
                  { icon: Play, label: "Short Videos", color: "text-red-600" },
                  {
                    icon: FolderHeart,
                    label: "Favorites",
                    color: "text-pink-600",
                  },
                  { icon: UserX, label: "Black List", color: "text-gray-600" },
                  { icon: Cake, label: "Birth days", color: "text-yellow-600" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-gray-700 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Shortcuts */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Your shortcuts</h4>
                <Link className="w-4 h-4 text-orange-600 cursor-pointer" />
              </div>
              <div className="space-y-2">
                {[
                  {
                    name: "Hóng hớt đường phố",
                    avatar: "https://avatar.iran.liara.run/public/30",
                  },
                  {
                    name: "AWS Study Group VN",
                    avatar: "https://avatar.iran.liara.run/public/31",
                  },
                  {
                    name: "FUOverflow - FPT",
                    avatar: "https://avatar.iran.liara.run/public/32",
                  },
                ].map((group, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <img
                      src={group.avatar || "/placeholder.svg"}
                      alt=""
                      className="w-8 h-8 rounded-lg"
                    />
                    <span className="text-gray-700 text-sm">{group.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Feed */}
          <main className="flex-1 ml-80 mr-80 mt-4">
            {/* Post Creation */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://avatar.iran.liara.run/public/21"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Khai, what are you thinking?"
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <ImageUp className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">Photo</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <Video className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Video</span>
                  </button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Post
                </button>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {/* Sample Post */}
              <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Post Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://avatar.iran.liara.run/public/21"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Nguyen Khai
                      </h4>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-gray-800 mb-3">
                    Just had an amazing day exploring the city! The weather was
                    perfect and the views were incredible. 🌟
                  </p>
                </div>

                {/* Post Image */}
                <div className="relative">
                  <img
                    src="https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-2.jpg"
                    alt="Post content"
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Post Actions */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="font-medium">1,235</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                        <MessageSquareText className="w-5 h-5" />
                        <span className="font-medium">325</span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                      <Send className="w-5 h-5" />
                      <span className="font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Additional sample posts */}
              <article className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://avatar.iran.liara.run/public/25"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Sarah Johnson
                      </h4>
                      <p className="text-sm text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <p className="text-gray-800 mb-4">
                  Working on some exciting new projects! Can't wait to share
                  more details soon. 🚀
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">892</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageSquareText className="w-5 h-5" />
                      <span className="font-medium">156</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                    <Send className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </article>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-80 fixed right-4 top-20 h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
            {/* Online Friends */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Online friends</h4>
                <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Thanh Như",
                    avatar:
                      "https://anhnail.com/wp-content/uploads/2024/10/Hinh-anh-gai-xinh-cute.jpg",
                    online: true,
                  },
                  {
                    name: "Minh Duc",
                    avatar: "https://avatar.iran.liara.run/public/40",
                    online: true,
                  },
                  {
                    name: "Lan Anh",
                    avatar: "https://avatar.iran.liara.run/public/41",
                    online: true,
                  },
                ].map((friend, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={friend.avatar || "/placeholder.svg"}
                        alt={friend.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {friend.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {friend.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Groups */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-4">
                Community groups
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <img
                    src="https://avatar.iran.liara.run/public/50"
                    alt="Group"
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Giai tich 1 - CNPC
                    </h5>
                    <p className="text-xs text-gray-500">
                      Cộng đồng sinh viên bách khoa
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <img
                    src="https://avatar.iran.liara.run/public/51"
                    alt="Group"
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Tech Enthusiasts
                    </h5>
                    <p className="text-xs text-gray-500">
                      Latest tech discussions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Chats */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold text-gray-900 mb-4">Group chats</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://avatar.iran.liara.run/public/52"
                      alt="Chat"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Study Group
                    </h5>
                    <p className="text-xs text-gray-500">Active now</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <img
                    src="https://avatar.iran.liara.run/public/53"
                    alt="Chat"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Weekend Plans
                    </h5>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
