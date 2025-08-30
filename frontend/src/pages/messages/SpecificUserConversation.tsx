import { ChattingHeader } from "../../components/messages/ChattingHeader";
import { MessageArea } from "../../components/messages/MessageArea";
import { MessageInput } from "../../components/messages/MessageInput";

export const SpecificUserConversation = () => {

    const handleOnSend = () => {
        return true
    }
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <ChattingHeader/>
      </div>

      <div className="flex-1 p-4 bg-gray-50 overflow-y-scroll">
        <MessageArea/>
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <MessageInput onSend={handleOnSend}/>
      </div>
    </>
  );
};
