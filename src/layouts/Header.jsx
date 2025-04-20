import React from "react";

const Header = () => {
  return (
    <div className="container w-full border-4 border-gray-300">
      <div className="flex justify-end p-[1px] bg-gradient-to-r from-blue-800 to-blue-400">
        <div className="">
          <button className="border-b-2 border-r-2 border-black w-8 bg-gray-300">
            _
          </button>
          <button className="border-b-2 border-r-2 border-black w-8 mr-2 bg-gray-300">
            &#9633;
          </button>
          <button className="border-b-2 border-r-2 border-black w-8 bg-gray-300">
            X
          </button>
        </div>
      </div>

      <div className="border p-[1px] border-gray-500 flex bg-gray-300 ">
        <div className="border border-red-500 flex p-[1px]">
          <div className="border-l-2 border-r-2 border-gray-200 px-1 flex gap-3">
            <button>&#8592;</button>
            <button>&#8594;</button>
            <button>HOME</button>
          </div>
          <div>
            <button>Reload</button>
          </div>
        </div>

        <div className="border border-red-500 p-[1px] flex">
          <div className="bg-white "></div>
          <div>FOLDER</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
