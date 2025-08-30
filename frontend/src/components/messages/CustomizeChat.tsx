import { useEffect, useState } from "react";
import { CloudUpload, Eye, Link, Palette, ShieldBan, User } from "lucide-react";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export const CustomizeChat = () => {
  const [open, setOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    setOpen(false);
  };

  return (
    <div className="p-4">
      <div className="divider my-4 text-base-content/60">Customize Chat</div>

      <div className="space-y-3 relative">
        <button
          onClick={() => setOpen((s) => !s)}
          className="btn btn-ghost justify-start w-full h-auto p-3 normal-case"
        >
          <Palette className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="font-medium">Change Theme</span>
            <span className="text-xs opacity-70 capitalize">
              {selectedTheme}
            </span>
          </div>
        </button>

        {open && (
          <div className="absolute top-full left-0 w-80 max-h-96 overflow-y-auto bg-base-100 shadow-xl rounded-box border border-base-300 z-50 p-4">
            <div className="text-sm font-medium text-base-content mb-3">
              Select Theme
            </div>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => {
                const selected = selectedTheme === theme;
                return (
                  <div key={theme} data-theme={theme} className="contents">
                    <button
                      onClick={() => handleThemeChange(theme)}
                      className={`btn btn-sm justify-start gap-2 h-auto p-3 normal-case
                        ${
                          selected
                            ? "btn-primary"
                            : "btn-ghost hover:btn-ghost hover:bg-base-200"
                        }`}
                      title={theme}
                    >
                      <div className="w-4 h-4 rounded-full bg-primary border border-primary-content/20" />
                      <span className="capitalize text-xs">{theme}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <button className="btn btn-ghost justify-start w-full h-auto p-3 normal-case">
          <User className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="font-medium">Edit Nicknames</span>
            <span className="text-xs opacity-70">Customize display names</span>
          </div>
        </button>

        <div className="divider my-4 text-base-content/60">Files & Links</div>

        <button className="btn btn-ghost justify-start w-full h-auto p-3 normal-case">
          <CloudUpload className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="font-medium">Media Files</span>
            <span className="text-xs opacity-70">
              Photos, videos, documents
            </span>
          </div>
        </button>

        <button className="btn btn-ghost justify-start w-full h-auto p-3 normal-case">
          <Link className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="font-medium">Links</span>
            <span className="text-xs opacity-70">
              Shared URLs and references
            </span>
          </div>
        </button>

        <div className="divider my-4 text-base-content/60">
          Privacy & Support
        </div>

        <button className="btn btn-ghost justify-start w-full h-auto p-3 normal-case">
          <ShieldBan className="w-5 h-5 text-error" />
          <div className="flex flex-col items-start">
            <span className="font-medium">Block User</span>
            <span className="text-xs opacity-70">
              Prevent future interactions
            </span>
          </div>
        </button>

        <button className="btn btn-ghost justify-start w-full h-auto p-3 normal-case">
          <Eye className="w-5 h-5" />
          <div className="flex flex-col items-start">
            <span className="font-medium">Read Receipts</span>
            <span className="text-xs opacity-70">Message read indicators</span>
          </div>
        </button>
      </div>
    </div>
  );
};
