import { useEffect, useState } from "react";
import { FriendSideBar } from "../components/FriendSideBar";
import type { FriendRequest } from "../interfaces/FriendRequest";
import { toast } from "react-toastify";
import * as friendService from "../apis/FriendService";
import { convertFullName } from "../libs/CommonFunctions";
import type { UserPopulated } from "../interfaces/UserPopulated";

export const FriendPage = () => {
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [friendSuggests, setFriendSuggests] = useState<UserPopulated[]>([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const res = await friendService.getFriendRequestsList();
        res.sort((x) => x.createdAt.getTime()).reverse();
        setFriendRequests(res);
      } catch (error) {
        console.log(error);
        toast.error(
          "Our system occurred error, Please try again after some minutes!"
        );
      }
    };
    fetchFriendRequests();
  }, []);

  useEffect(() => {
    const fetchFriendSuggests = async () => {
      try {
        const res = await friendService.getFriendSuggestList();
        setFriendSuggests(res);
      } catch (error) {
        console.log(error);
        toast.error(
          "Our system occurred error, Please try again after some minutes!"
        );
      }
    };
    fetchFriendSuggests();
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      {/* Friend Requests Section */}
      <div>
        <FriendSideBar friendRequests={friendRequests}/>
      </div>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Friend Requests
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {friendRequests.map((item) => (
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
                    {item.mutualPreview && item.mutualCount && (
                      <div className="text-sm text-gray-600">
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
                    <span className="text-sm text-gray-600">
                      {Math.floor(Math.random() * 50) + 1} mutual friends
                    </span>
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
  );
};
