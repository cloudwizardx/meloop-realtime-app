export const ConversationCard = () => {
  return (
    <>
      <div className="relative mr-3">
        <img
          src="https://anhnail.com/wp-content/uploads/2024/10/Anh-gai-xinh-sieu-cute-de-thuong.jpg"
          alt="Thanh Như"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">Thanh Như</h3>
          <span className="text-xs text-gray-500">2h</span>
        </div>
        <p className="text-sm text-gray-600 truncate">
          Hey! How are you doing today?
        </p>
      </div>
    </>
  );
};
