import { Ellipsis, MessageCircleMore } from "lucide-react";
import { ConversationSearch } from "../../components/messages/ConversationSearch";
import { ConversationCard } from "../../components/messages/ConversationCard";

export const LeftSideBarMessage = () => {
  return (
    <>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className=" flex text-2xl font-bold text-gray-900">
            LoopTalk{" "}
            <MessageCircleMore className="text-orange-600 ml-1 h-5 w-5" />
          </h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Ellipsis className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="relative mb-4">
          <ConversationSearch/>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
            All
          </button>
          <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Unread
          </button>
          <button className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Groups
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center p-3 bg-orange-50 border-l-4 border-orange-500 hover:bg-orange-100 cursor-pointer transition-colors">
          <ConversationCard/>
        </div>
      </div>
    </>
  );
};
