import { MoreHorizontal } from "lucide-react";

export const RightSideBar = () => {
  return (
    <>
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
                <span className="text-gray-700 font-medium">{friend.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Community Groups */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-4">Community groups</h4>
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
                <p className="text-xs text-gray-500">Latest tech discussions</p>
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
    </>
  );
};
