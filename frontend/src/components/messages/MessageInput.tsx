import { useState, useRef } from "react";
import { Plus, Send, Smile, X } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

interface MessageInputProps {
  onSend: (message: { text?: string; files?: File[] }) => void;
}

export const MessageInput = ({ onSend }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
  };

  const handleSend = () => {
    if (!message && files.length === 0) return;

    onSend({ text: message, files });
    setMessage("");
    setFiles([]);
    setShowEmoji(false);
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      {/* File Preview */}
      {files.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2 bg-gray-50 p-2 rounded-lg border">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="relative flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border"
            >
              <span className="text-sm text-gray-700 truncate max-w-[120px]">
                {file.name}
              </span>
              <button
                onClick={() =>
                  setFiles((prev) => prev.filter((_, i) => i !== idx))
                }
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-center gap-3">
        {/* File Upload */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition"
        >
          <Plus className="w-5 h-5 text-orange-500" />
        </button>
        <input
          type="file"
          multiple
          hidden
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        {/* Text Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Aa"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded-full border-none outline-none focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowEmoji((prev) => !prev)}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <Smile className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>

          {/* Emoji Picker */}
          {showEmoji && (
            <div className="absolute bottom-12 right-0 z-50">
              <EmojiPicker
                onEmojiClick={(emojiData) =>
                  setMessage((prev) => prev + emojiData.emoji)
                }
              />
            </div>
          )}
        </div>

        {/* Send Button */}
        <button
          type="button"
          onClick={handleSend}
          className="cursor-pointer p-2 hover:bg-orange-100 rounded-full transition"
        >
          <Send className="w-5 h-5 text-orange-500" />
        </button>
      </div>
    </div>
  );
};
