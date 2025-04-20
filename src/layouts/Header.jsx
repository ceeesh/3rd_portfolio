import React from "react";

import {
  ArrowLeft,
  ArrowRight,
  House,
  RefreshCcw,
  FolderInput,
} from "lucide-react";

const Header = () => {
  return (
    <div className="container w-full border-4 border-gray-300">
      <div className="flex justify-end p-[2px] bg-gradient-to-r from-blue-800 to-blue-400">
        <div className="">
          <button className="border-b-2 border-r-2 border-black w-8 bg-gray-300 border-l-2 border-t-2 border-l-gray-200 border-t-gray-200">
            _
          </button>
          <button className="border-b-2 border-r-2 border-black w-8 mr-2 bg-gray-300 border-l-2 border-t-2 border-l-gray-200 border-t-gray-200">
            &#9633;
          </button>
          <button className="border-b-2 border-r-2 border-black w-8 bg-gray-300 border-l-2 border-t-2 border-l-gray-200 border-t-gray-200">
            X
          </button>
        </div>
      </div>

      <div className="border-b-2 border-l-1 border-r-1 p-[1px] border-gray-500 flex bg-gray-300">
        <div className="flex p-[1px] gap-2">
          <div className="border-l-2 border-r-2 border-gray-200 px-1 flex gap-3">
            <button>
              <ArrowLeft />
            </button>
            <button>
              <ArrowRight />
            </button>
            <button>
              <House />
            </button>
          </div>
          <div className="flex">
            <button>
              <RefreshCcw />
            </button>
          </div>
        </div>

        <div className="p-[2px] flex w-full pl-1">
          <div className="bg-white w-11/12 border-l-2 border-t-2 border-b-2 border-b-gray-200 border-r-2 border-r-gray-200"></div>
          <div className="w-1/12 flex items-center justify-center">
            <FolderInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
