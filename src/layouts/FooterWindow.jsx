import React, { useState } from "react";

const FooterWindow = ({ minimizedWindows, onRestore, windows, onCloseAll }) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isShuttingDown, setIsShuttingDown] = useState(false);

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

  const handleMenuClick = (item) => {
    const messages = {
      Programs: "What you trynna do? 🤔\nPrograms ain't installed yet!",
      Documents: "What documents you trynna see? 👀\nHmmm I got my eyes on you...",
      Settings: "Settings? 🎛️\nEverything's already perfect, no touching!"
    };

    onCloseAll();
    setAlertMessage(messages[item]);
    setShowAlert(true);
    setShowStartMenu(false);
  };

  const handleShutdown = () => {
    setShowStartMenu(false);
    setIsShuttingDown(true);

    setTimeout(() => {
      setIsShuttingDown(false);
    }, 3000);
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
            <div
              onClick={() => handleMenuClick("Programs")}
              className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 mb-1 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base"
            >
              Programs
            </div>
            <div
              onClick={() => handleMenuClick("Documents")}
              className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 mb-1 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base"
            >
              Documents
            </div>
            <div
              onClick={() => handleMenuClick("Settings")}
              className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 mb-1 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base"
            >
              Settings
            </div>
            <hr className="border-gray-500 my-2" />
            <div
              onClick={handleShutdown}
              className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 p-2 cursor-pointer hover:bg-blue-800 hover:text-white text-sm md:text-base"
            >
              Shut Down...
            </div>
          </div>
        </div>
      )}

      {/* Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 w-80 md:w-96">
            {/* Title Bar */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-2 py-1 flex justify-between items-center">
              <span className="font-bold text-sm md:text-base">Windows 95</span>
              <button
                onClick={() => setShowAlert(false)}
                className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 text-black px-2 font-bold hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
            {/* Content */}
            <div className="p-4 md:p-6">
              <div className="flex gap-3 md:gap-4 items-start">
                <div className="text-3xl md:text-4xl">⚠️</div>
                <p className="text-sm md:text-base whitespace-pre-line flex-1">{alertMessage}</p>
              </div>
              <div className="flex justify-center mt-4 md:mt-6">
                <button
                  onClick={() => setShowAlert(false)}
                  className="border-2 border-l-gray-100 border-t-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-6 md:px-8 py-2 font-bold text-sm md:text-base
                  active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shutdown Screen */}
      {isShuttingDown && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black">
          <div className="text-center">
            <div className="text-orange-500 text-6xl md:text-8xl mb-6 animate-pulse">⚠️</div>
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
              It's now safe to turn off your computer.
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Just kidding! Restarting in a moment...
            </p>
            <div className="mt-8 flex gap-2 justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterWindow;
