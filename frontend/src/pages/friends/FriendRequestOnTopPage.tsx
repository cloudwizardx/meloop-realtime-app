import type { FriendRequest } from "../../interfaces/FriendRequest";
import { convertFullName } from "../../libs/CommonFunctions";

interface FriendRequestOnTopPageProps {
  friendRequests: FriendRequest[]
  confirmedIds: string[]
  handleAcceptFriend: (inviteId: string) => void
  handleDeleteFriend: (inviteId: string) => void
}

export const FriendRequestOnTopPage = ({
  friendRequests,
  confirmedIds,
  handleAcceptFriend,
  handleDeleteFriend
}: FriendRequestOnTopPageProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Friend Requests</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {friendRequests.map((item) => {
          const isConfirmed = confirmedIds.includes(item._id);

          return (
            <div
              key={item.sender._id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={item.sender.profile.avatar}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {convertFullName(item.sender.profile)}
                  </h3>

                  <div className="mb-4">
                    {item.mutualPreview && item.mutualCount > 0 && (
                      <div className="text-sm flex items-center text-gray-600">
                        {item.mutualPreview.map((item) => (
                          <div key={item.profile}>
                            <img
                              src={item.avatar}
                              alt=""
                              className="rounded-full w-3 h-3"
                            />
                          </div>
                        ))}
                        <span className="text-xs text-gray-600">
                          {item.mutualCount} mutual friends
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    {!isConfirmed ? (
                      <>
                        <button
                          onClick={() => handleAcceptFriend(item._id)}
                          className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                        >
                          Confirm
                        </button>
                        <button onClick={() => handleDeleteFriend(item._id)} className="cursor-pointer w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200">
                          Delete
                        </button>
                      </>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded-md cursor-not-allowed"
                      >
                        Confirmed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
