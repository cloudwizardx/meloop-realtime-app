import {
  MessageCircle,
  ThumbsUp,
  MoreHorizontal,
  ImageIcon,
  Video,
  Users,
  Heart,
  Share,
  UserRoundIcon as UserRoundPen,
  MapPinIcon as MapPinHouse,
  Eye,
  CirclePlus,
  SquarePen,
} from "lucide-react"
import { Header } from "../components/Header"
import type { UserPopulated } from "../interfaces/UserPopulated"

interface ProfilePageProps {
  user: UserPopulated
}

export const ProfilePage = ({user}: ProfilePageProps) => {
  return (
    <div className="min-w-full max-h-full bg-gray-50">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="flex ">
          {/* <LeftSideBar /> */}

          {/* Main Content */}
          <main className="min-w-full mx-auto">
            <div className="flex gap-8 p-4">
              {/* Profile Content */}
              <div className="flex-1 max-w-full space-y-6">
                {/* Cover Photo & Profile Section */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {/* Cover Photo */}
                  <div className="relative h-140 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                    <img
                      src="https://thuvienanime.net/wp-content/uploads/2025/07/van-tham-bat-tri-mong-veiled-dreams-thuvienanime-17.jpg"
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
                  <div className="relative px-10 pb-8">
                    <div className="flex items-end justify-between -mt-16">
                      <div className="flex items-start gap-6 flex-col">
                        <div className="relative">
                          <div className="w-32 h-32 bg-white rounded-full p-1 shadow-lg">
                            <img
                              src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
                              alt="Monroe Parker"
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                        </div>
                        <div className="pb-2">
                          <h1 className="text-2xl font-bold text-gray-900 mb-1">Monroe Parker</h1>
                          <p className="text-gray-600 mb-2">Digital Marketing Specialist</p>
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
                          <CirclePlus className="w-4 h-4" />
                          Add the moment
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                          <SquarePen className="w-4 h-4" />
                          Edit profile
                        </button>
                        <button className="p-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
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
                    <button className="flex-1 py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium text-sm transition-colors">
                      Groups
                    </button>
                  </div>
                </div>

                <div className="flex justify-evenly">
                  {/* Post Creation */}
                  <div className="flex-12">
                    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src="/professional-woman-smiling.png"
                          alt="Monroe Parker"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <input
                          type="text"
                          placeholder="What's on your mind, Monroe?"
                          className="flex-1 bg-gray-50 rounded-2xl px-6 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="flex gap-4">
                          <button className="flex items-center gap-2 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-xl transition-colors">
                            <ImageIcon className="w-5 h-5" />
                            <span className="font-medium">Photo</span>
                          </button>
                          <button className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors">
                            <Video className="w-5 h-5" />
                            <span className="font-medium">Video</span>
                          </button>
                        </div>
                        <button className="px-6 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium">
                          Post
                        </button>
                      </div>
                    </div>

                    {/* Posts */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <img
                                src="/professional-woman-smiling.png"
                                alt="Monroe Parker"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900">Monroe Parker</h3>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                              </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <MoreHorizontal className="w-5 h-5" />
                            </button>
                          </div>

                          <p className="text-gray-800 mb-4 leading-relaxed">
                            Just finished an amazing project! Excited to share the results with everyone. The team
                            worked incredibly hard to make this happen. 🚀
                          </p>
                        </div>

                        <div className="px-6">
                          <img
                            src="https://xemay50.com/upimages/products/1687098100_shart-sym.jpg"
                            alt="Post content"
                            className="w-full rounded-xl object-cover"
                          />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Heart className="w-4 h-4 text-red-500" />
                                24 likes
                              </span>
                              <span>5 comments</span>
                            </div>
                            <span>3 shares</span>
                          </div>
                          <div className="flex gap-2 border-t border-gray-100 pt-4">
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium">
                              <ThumbsUp className="w-4 h-4" />
                              Like
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium">
                              <MessageCircle className="w-4 h-4" />
                              Comment
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium">
                              <Share className="w-4 h-4" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Another Post */}
                      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <img
                                src="https://xemay50.com/upimages/products/1687098100_shart-sym.jpg"
                                alt="Monroe Parker"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900">Monroe Parker</h3>
                                <p className="text-sm text-gray-500">1 day ago</p>
                              </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <MoreHorizontal className="w-5 h-5" />
                            </button>
                          </div>

                          <p className="text-gray-800 mb-4 leading-relaxed">
                            Beautiful sunset from my office window today. Sometimes you need to pause and appreciate the
                            little moments. ✨
                          </p>

                          <img
                            src="/office-sunset-view.png"
                            alt="Sunset view"
                            className="w-full rounded-xl object-cover mb-4"
                          />

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Heart className="w-4 h-4 text-red-500" />
                                42 likes
                              </span>
                              <span>8 comments</span>
                            </div>
                            <span>2 shares</span>
                          </div>
                          <div className="flex gap-2 border-t border-gray-100 pt-4">
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium">
                              <ThumbsUp className="w-4 h-4" />
                              Like
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium">
                              <MessageCircle className="w-4 h-4" />
                              Comment
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium">
                              <Share className="w-4 h-4" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-7 ml-6 max-w-full space-y-6">
                    {/* Introduction Section */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Introduction</h2>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <UserRoundPen className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 mb-1">Bio</p>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ad est aut autem,
                                impedit sed consequatur quasi, eius nisi corporis doloribus. Enim dolor odio aspernatur
                                omnis cum nulla eos.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                              <MapPinHouse className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">Location</p>
                              <p className="text-gray-600 text-sm">Lives in Ho Chi Minh City</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-50 rounded-lg">
                              <Heart className="w-5 h-5 text-pink-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">Relationship</p>
                              <p className="text-gray-600 text-sm">In a relationship</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-lg font-bold text-gray-900">Resources</h2>
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            View all
                          </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, index) => (
                            <div key={index} className="relative group cursor-pointer">
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
                          <h2 className="text-lg font-bold text-gray-900">Friends</h2>
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
                              <p className="text-xs font-medium text-gray-900 mt-2 text-center truncate">Thanh Như</p>
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
  )
}
