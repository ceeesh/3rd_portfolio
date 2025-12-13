import React, { useState } from "react";

const FooterWindow = ({ minimizedWindows, onRestore, windows }) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const windowTitles = {
    profile: "Profile",
    project: "Projects",
    network: "Networks"
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 bg-gray-300 h-[38px] md:h-[42px] flex justify-between items-center border-t-2 border-t-gray-100
    border-l-2 border-l-gray-100 border-r-2 border-r-gray-600 px-1 py-1"
    >
      <div className="flex items-center gap-1 md:gap-2 flex-1 overflow-hidden">
        <button
          onClick={() => setShowStartMenu(!showStartMenu)}
          className="border-2 px-2 md:px-3 py-1 cursor-pointer font-bold flex items-center gap-1 md:gap-2 text-xs md:text-base
          border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600
          active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100
          hover:bg-gray-200 shrink-0"
        >
          <span className="text-base md:text-xl">⊞</span>
          <span className="hidden sm:inline">Start</span>
        </button>

        {/* Minimized windows taskbar buttons */}
        <div className="flex gap-1 overflow-x-auto">
          {minimizedWindows.map((key) => (
            <button
              key={key}
              onClick={() => onRestore(key)}
              className="border-2 px-2 md:px-3 py-1 cursor-pointer text-xs md:text-sm max-w-[100px] md:max-w-[150px] truncate
              border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100
              hover:bg-gray-200 shrink-0"
            >
              {windowTitles[key]}
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2 shrink-0">
        <div
          className="border-l-2 border-t-2 border-gray-500 border-b-gray-100 border-r-gray-100 px-2 md:px-3 py-1 text-xs md:text-sm"
        >
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div
          className="absolute bottom-[38px] md:bottom-[42px] left-1 w-56 md:w-64 bg-gray-300 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 shadow-lg"
        >
          <div className="bg-gradient-to-b from-blue-800 to-blue-900 text-white p-2 font-bold text-base md:text-lg">
            Windows 95
          </div>
          <div className="p-2">
            <div className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 mb-1 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base">
              Programs
            </div>
            <div className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 mb-1 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base">
              Documents
            </div>
            <div className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 mb-1 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base">
              Settings
            </div>
            <hr className="border-gray-500 my-2" />
            <div className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base">
              Shut Down...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterWindow;
