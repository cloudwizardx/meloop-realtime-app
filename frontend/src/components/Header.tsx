import { BellRing, MessageCircleMore, Plus, Search } from "lucide-react"
import meloopLogo from '../assets/meloop_horizontal_logo.png'

export const Header = () => {
    return <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-50">
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
}