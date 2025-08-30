import type { UserPopulated } from "../../interfaces/UserPopulated";
import { convertFullName } from "../../libs/CommonFunctions";

interface FriendSuggestOnBottomPageProps {
  friendSuggests: UserPopulated[];
  requestedIds: string[]
  handleAddFriend: (receiverId: string) => void;
}

export const FriendSuggestOnBottomPage = ({
  friendSuggests,
  requestedIds,
  handleAddFriend
}: FriendSuggestOnBottomPageProps) => {
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
        {friendSuggests.map((item) => {
          const isRequested = requestedIds.includes(item._id??'');

          return (
            <div key={item._id} className="...">
              <div className="p-4 flex flex-col items-center text-center">
                <img
                  src={item.profile.avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full mb-3"
                />
                <h3 className="font-semibold">
                  {convertFullName(item.profile)}
                </h3>

                <div className="flex flex-col gap-2 w-full">
                  {isRequested ? (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded-md cursor-not-allowed"
                    >
                      Request Sent
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAddFriend(item._id ?? "")}
                        className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
                      >
                        Add Friend
                      </button>
                      <button className="cursor-pointer w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md">
                        Remove
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
