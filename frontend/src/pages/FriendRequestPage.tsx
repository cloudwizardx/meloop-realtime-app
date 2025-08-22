import { ArrowLeft } from "lucide-react";
import { ProfilePage } from "./ProfilePage";

export const FriendRequestPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Header */}
      <div className="max-w-full mt-20">
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div>
                  <div className="text-sm text-gray-500">Friends</div>
                  <div className="text-xl font-semibold text-gray-900">
                    Friend requests
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Invitations Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                8 invitations
              </span>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors">
                View sent invitations
              </button>
            </div>
          </div>

          {/* Friend Requests List */}
          <div className="space-y-4">
            {/* Friend Request Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex space-x-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-2xl">
                      TN
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        Thanh Nhu
                      </h3>
                      <p className="text-sm text-gray-500">2 years ago</p>
                    </div>
                  </div>

                  {/* Mutual Friends */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-base text-gray-600">
                      53 mutual friends
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button className="flex-1 max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                      Confirm
                    </button>
                    <button className="flex-1 max-w-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Friend Request Cards */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-2xl">
                      MH
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        Minh Hoang
                      </h3>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-base text-gray-600">
                      12 mutual friends
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex-1 max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                      Confirm
                    </button>
                    <button className="flex-1 max-w-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-2xl">
                      AL
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        An Le
                      </h3>
                      <p className="text-sm text-gray-500">3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-base text-gray-600">
                      3 mutual friends
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex-1 max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                      Confirm
                    </button>
                    <button className="flex-1 max-w-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full">
        <ProfilePage/>
      </div>
    </div>
  );
};
