import React from "react";

const Header = ({ title, setShow, show, onMinimize, isActive }) => {
  const titleBarClass = isActive
    ? "bg-gradient-to-r from-blue-800 to-blue-400"
    : "bg-gradient-to-r from-gray-600 to-gray-400";

  return (
    <div className="container w-full border-4 border-gray-300">
      <div className={`flex justify-between items-center p-[2px] ${titleBarClass}`}>
        <div className="flex items-center px-2">
          <span className="text-white font-bold text-sm tracking-wide">{title}</span>
        </div>
        <div className="flex">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="border-2 w-8 bg-gray-300 cursor-pointer
    border-b-black border-r-black border-t-gray-200 border-l-gray-200
    active:border-t-black active:border-l-black active:border-b-gray-200 active:border-r-gray-200 font-bold"
          >
            _
          </button>
          <button
            className="border-2 w-8 mr-2 bg-gray-300 cursor-pointer
    border-b-black border-r-black border-t-gray-200 border-l-gray-200
    active:border-t-black active:border-l-black active:border-b-gray-200 active:border-r-gray-200"
            disabled
          >
            &#9633;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShow(!show);
            }}
            className="border-2 w-8 bg-gray-300 cursor-pointer
    border-b-black border-r-black border-t-gray-200 border-l-gray-200
    active:border-t-black active:border-l-black active:border-b-gray-200 active:border-r-gray-200 font-bold"
          >
            X
          </button>
        </div>
      </div>

      <div className="border-b-2 border-l-1 border-r-1 p-[1px] border-gray-500 flex bg-gray-300">
        <div className="flex p-[1px] gap-1 md:gap-2">
          <div className="border-l-2 border-r-2 border-gray-200 px-1 flex gap-1 md:gap-3">
            <button className="text-sm md:text-base">←</button>
            <button className="text-sm md:text-base">→</button>
            <button className="text-sm md:text-base">⌂</button>
          </div>
          <div className="flex">
            <button className="text-sm md:text-base">↻</button>
          </div>
        </div>

        <div className="p-[2px] flex w-full pl-1">
          <div className="bg-white flex-1 border-l-2 border-t-2 border-b-2 border-b-gray-200 border-r-2 border-r-gray-200"></div>
          <div className="w-8 md:w-10 flex items-center justify-center text-sm md:text-base">
            📁
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
