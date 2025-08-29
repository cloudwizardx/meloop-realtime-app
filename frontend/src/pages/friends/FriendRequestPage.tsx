/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import type { FriendRequest } from "../../interfaces/FriendRequest";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../stores/AuthStore";
import * as friendService from "../../apis/FriendService";
import { convertFullName } from "../../libs/CommonFunctions";
import { useState } from "react";
import type { UserPopulated } from "../../interfaces/UserPopulated";
import { VisitUserProfilePage } from '../VisitUserProfilePage';

export const FriendRequestPage = () => {
  const location = useLocation();
  const preload = (location.state || {}) as {
    friendRequests?: FriendRequest[];
  };
  const authUser = useAuthStore.getState().authUser;
  const [selectedRequest, setSelectedRequest] = useState<UserPopulated>()

  const { data: friendRequests, isLoading } = useQuery({
    queryKey: ["friendRequests", authUser?._id],
    queryFn: async () => await friendService.getFriendRequestsList(),
    initialData: preload.friendRequests,
    enabled: !!authUser?._id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                {friendRequests?.length} invitations
              </span>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors">
                View sent invitations
              </button>
            </div>
          </div>

          {/* Friend Requests List */}
          <div className="space-y-4">
            {/* Friend Request Card */}
            {friendRequests?.map((item) => (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex space-x-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <img onClick={() => setSelectedRequest(item.sender)} 
                        src={item.sender.profile.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {convertFullName(item.sender.profile)}
                        </h3>
                        <p className="text-sm text-gray-500">2 years ago</p>
                      </div>
                    </div>

                    {/* Mutual Friends */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex -space-x-2"></div>
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
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-full">
        {!selectedRequest ? (<div>
          <span className="text-gray-600 text-2xl text-center mx-auto max-w-full">Choose a request to view detail profile sender</span>
        </div>) : <VisitUserProfilePage user={selectedRequest??null}/>}
      </div>
    </div>
  );
};
