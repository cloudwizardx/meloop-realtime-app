import { Search } from "lucide-react";

export const ConversationSearch = () => {
  return (
    <>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search on LoopTalk"
        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full border-none outline-none focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all"
      />
    </>
  );
};
