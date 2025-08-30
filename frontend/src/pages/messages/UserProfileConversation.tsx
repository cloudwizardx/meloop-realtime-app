import { CircleUserRound,  } from "lucide-react";
import { CustomizeChat } from "../../components/messages/CustomizeChat";

export const UserProfileConversation = () => {
  return (
    <>
      <div className="p-6">
        <div className="text-center mb-6">
          <img
            src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
            alt="Thanh Như"
            className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
          />
          <h3 className="font-semibold text-gray-900 text-lg">Thanh Như</h3>
          <button className="flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 mt-2 mx-auto">
            <CircleUserRound className="w-4 h-4" />
            <span className="text-sm">View Profile</span>
          </button>
        </div>

        <div className="mb-6">
          <CustomizeChat/>
        </div>
      </div>
    </>
  );
};
