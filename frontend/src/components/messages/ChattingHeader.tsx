import { MoreHorizontal, Phone, Video } from "lucide-react";

export const ChattingHeader = () => {
  return (
    <>
      <div className="flex items-center">
        <img
          src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
          alt="Thanh Như"
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h2 className="font-semibold text-gray-900">Thanh Như</h2>
          <p className="text-sm text-green-500">Active now</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Phone className="w-5 h-5 text-orange-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Video className="w-5 h-5 text-orange-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </>
  );
};
