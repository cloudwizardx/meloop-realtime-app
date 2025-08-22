import { FriendSideBar } from '../components/FriendSideBar'
export const FriendPage = () => {

  // user - profile/ list user common

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      {/* Friend Requests Section */}
      <div>
        <FriendSideBar/>
      </div>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Friend Requests</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={`/abstract-profile-avatar.png?height=80&width=80&query=profile avatar ${index}`}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">Thanh Như</h3>

                  <div className="flex items-center mb-4">
                    <div className="flex -space-x-2 mr-2">
                      <img
                        src={`/placeholder.svg?height=20&width=20&query=mutual friend 1`}
                        alt="Mutual friend"
                        className="w-5 h-5 rounded-full border-2 border-white"
                      />
                      <img
                        src={`/placeholder.svg?height=20&width=20&query=mutual friend 2`}
                        alt="Mutual friend"
                        className="w-5 h-5 rounded-full border-2 border-white"
                      />
                    </div>
                    <span className="text-sm text-gray-600">53 mutual friends</span>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                      Confirm
                    </button>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-8"></div>

      {/* People You May Know Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">People You May Know</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">See All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={`/suggested-friend.png?height=80&width=80&query=suggested friend ${index}`}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">User {index}</h3>

                  <div className="flex items-center mb-4">
                    <div className="flex -space-x-2 mr-2">
                      <img
                        src={`/placeholder.svg?height=20&width=20&query=mutual friend a`}
                        alt="Mutual friend"
                        className="w-5 h-5 rounded-full border-2 border-white"
                      />
                      <img
                        src={`/placeholder.svg?height=20&width=20&query=mutual friend b`}
                        alt="Mutual friend"
                        className="w-5 h-5 rounded-full border-2 border-white"
                      />
                    </div>
                    <span className="text-sm text-gray-600">{Math.floor(Math.random() * 50) + 1} mutual friends</span>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                      Add Friend
                    </button>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
