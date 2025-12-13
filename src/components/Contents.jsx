const Contents = ({ contents }) => {
  return (
    <div className="container bg-white w-full border-l-4 border-r-4 border-b-4 border-gray-300">
      <div className="p-2 border-l-2 border-t-2 border-l-gray-500 border-t-gray-500 border-b-2 border-b-gray-200 border-r-2 border-r-gray-200 h-[calc(100vh-220px)] md:h-[500px] max-h-[70vh] overflow-y-scroll win95-scroll">
        {contents}
      </div>
    </div>
  );
};

export default Contents;
