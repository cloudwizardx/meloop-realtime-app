import { Cake, FolderHeart, Library, Link, Play, UserRound, UsersRound, UserX } from "lucide-react";

export const SideBar = () => {
  
  return (
    <div>
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
                <span className="text-gray-700 font-medium">{item.label}</span>
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
    </div>
  );
};
