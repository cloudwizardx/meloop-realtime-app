import {
  ThumbsUp,
  MoreHorizontal,
  Users,
  Heart,
  UserRoundIcon as UserRoundPen,
  MapPinIcon as MapPinHouse,
  Eye,
  MessageCircleMore,
  UserRoundCheck,
  MessageSquareText,
  Send,
} from "lucide-react";
import type { UserPopulated } from "../interfaces/UserPopulated"
import { convertFullName } from "../libs/CommonFunctions";

interface VisitUserProfilePageProps {
  user: UserPopulated | null
}

export const VisitUserProfilePage = ({ user }: VisitUserProfilePageProps) => {
  return (
    <div className="min-h-full bg-gray-50">
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="">
          {/* Main Content */}
          <main className="ml-65 max-w-full mx-auto">
            <div className="flex gap-8 p-4">
              {/* Profile Content */}
              <div className="flex-1 max-w-full space-y-6">
                {/* Cover Photo & Profile Section */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {/* Cover Photo */}
                  <div className="relative h-95 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                    <img
                      src={user?.profile.coverPhoto}
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="px-4 py-2 bg-black/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-black/30 transition-colors">
                        Edit Cover
                      </button>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="relative px-8 pb-8">
                    <div className="flex items-end justify-between -mt-16">
                      <div className="flex items-start gap-6 flex-col">
                        <div className="relative">
                          <div className="w-32 h-32 bg-white rounded-full p-1 shadow-lg">
                            <img
                              src={user?.profile.avatar}
                              alt={user?.profile._id}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                        </div>
                        <div className="pb-2">
                          <h1 className="text-2xl font-bold text-gray-900 mb-1">
                            {convertFullName(user?.profile??null)}
                          </h1>
                          <p className="text-gray-600 mb-2">
                            {user?.profile.nickName}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4 text-red-500" />
                              1.2K likes
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4 text-blue-500" />
                              1.4K followers
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 pb-2">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium">
                          <MessageCircleMore className="w-4 h-4" />
                          Message
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                          <ThumbsUp className="w-4 h-4" />
                          Follow
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                          <UserRoundCheck className="w-4 h-4" />
                          Friends
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-2xl shadow-sm p-2">
                  <div className="flex gap-1">
                    <button className="flex-1 py-3 px-4 text-indigo-600 bg-indigo-50 rounded-xl font-medium text-sm transition-colors">
                      Posts
                    </button>
                    <button className="flex-1 py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium text-sm transition-colors">
                      About
                    </button>
                    <button className="flex-1 py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium text-sm transition-colors">
                      Friends
                    </button>
                    <button className="flex-1 py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium text-sm transition-colors">
                      Images & Videos
                    </button>
                  </div>
                </div>

                <div className="flex justify-evenly">
                  {/* Post Creation */}
                  <div className="flex-12">
                    {/* Posts */}
                    <div className="space-y-6">
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
                              <p className="text-sm text-gray-500">
                                2 hours ago
                              </p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>

                        {/* Post Content */}
                        <div className="px-4 pb-3">
                          <p className="text-gray-800 mb-3">
                            Just had an amazing day exploring the city! The
                            weather was perfect and the views were incredible.
                            🌟
                          </p>
                        </div>

                        {/* Post Image */}
                        <div className="relative">
                          <img
                            src="https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-2.jpg"
                            alt="Post content"
                            className="w-full h-100 object-cover px-2 rounded-2xl"
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
                              <p className="text-sm text-gray-500">
                                2 hours ago
                              </p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>

                        {/* Post Content */}
                        <div className="px-4 pb-3">
                          <p className="text-gray-800 mb-3">
                            Just had an amazing day exploring the city! The
                            weather was perfect and the views were incredible.
                            🌟
                          </p>
                        </div>

                        {/* Post Image */}
                        <div className="relative">
                          <img
                            src="https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-2.jpg"
                            alt="Post content"
                            className="w-full h-100 object-cover px-2 rounded-2xl"
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
                              <p className="text-sm text-gray-500">
                                2 hours ago
                              </p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                          </button>
                        </div>

                        {/* Post Content */}
                        <div className="px-4 pb-3">
                          <p className="text-gray-800 mb-3">
                            Just had an amazing day exploring the city! The
                            weather was perfect and the views were incredible.
                            🌟
                          </p>
                        </div>

                        {/* Post Image */}
                        <div className="relative">
                          <img
                            src="https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-2.jpg"
                            alt="Post content"
                            className="w-full h-100 object-cover px-2 rounded-2xl"
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
                    </div>
                  </div>

                  <div className="flex flex-col flex-7 ml-6 max-w-full space-y-6">
                    {/* Introduction Section */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">
                          Introduction
                        </h2>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <UserRoundPen className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 mb-1">
                                Bio
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur ad est aut autem,
                                impedit sed consequatur quasi, eius nisi
                                corporis doloribus. Enim dolor odio aspernatur
                                omnis cum nulla eos.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                              <MapPinHouse className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Location
                              </p>
                              <p className="text-gray-600 text-sm">
                                Lives in Ho Chi Minh City
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-50 rounded-lg">
                              <Heart className="w-5 h-5 text-pink-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Relationship
                              </p>
                              <p className="text-gray-600 text-sm">
                                In a relationship
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-lg font-bold text-gray-900">
                            Resources
                          </h2>
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            View All
                          </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, index) => (
                            <div
                              key={index}
                              className="relative group cursor-pointer"
                            >
                              <img
                                src="https://xemay50.com/upimages/products/1687098100_shart-sym.jpg"
                                alt={`Resource ${index + 1}`}
                                className="w-full h-20 object-cover rounded-lg transition-transform group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Friends Section */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-lg font-bold text-gray-900">
                            Friends
                          </h2>
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            View all
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-gray-600 text-sm">1,654</span>
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 text-sm">friends</span>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {[...Array(9)].map((_, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="relative">
                                <img
                                  src="https://topanh.com/wp-content/uploads/2025/05/hinh-gai-han-xinh-39.jpg"
                                  alt="Thanh Như"
                                  className="w-full h-20 object-cover rounded-lg transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors"></div>
                              </div>
                              <p className="text-xs font-medium text-gray-900 mt-2 text-center truncate">
                                Thanh Như
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
