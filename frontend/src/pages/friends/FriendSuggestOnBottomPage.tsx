import type { UserPopulated } from "../../interfaces/UserPopulated";
import { convertFullName } from "../../libs/CommonFunctions";

interface FriendSuggestOnBottomPageProps {
    friendSuggests: UserPopulated[]
}

export const FriendSuggestOnBottomPage = ({friendSuggests}: FriendSuggestOnBottomPageProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          People You May Know
        </h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {friendSuggests.map((item) => (
          <div
            key={item._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-4">
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.profile.avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {convertFullName(item.profile)}
                </h3>

                {/* <div className="flex items-center mb-4">
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
                  <span className="text-sm text-gray-600">
                    {Math.floor(Math.random() * 50) + 1} mutual friends
                  </span>
                </div> */}

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
    </>
  );
};
