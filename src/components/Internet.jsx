import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Draggable from "react-draggable";
import Contents from "./Contents";

const Internet = ({ title, show, setShow, onMinimize, nodeRef, onFocus, isActive, style, contents, offsetX = 0, offsetY = 0 }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const actualOffsetX = isMobile ? 0 : offsetX;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      cancel="button"
    >
      <div
        ref={nodeRef}
        className="w-[calc(100vw-40px)] md:w-auto md:max-w-3xl shadow-[10px_10px_5px_#006666]"
        style={{
          ...style,
          position: "absolute",
          top: `${50 + offsetY}px`,
          left: isMobile ? '20px' : `calc(30% + ${actualOffsetX}px)`,
          transform: isMobile ? 'none' : `translateX(-50%)`,
        }}
        onClick={onFocus}
      >
        <div className="drag-handle cursor-move md:cursor-move">
          <Header
            title={title}
            show={show}
            setShow={setShow}
            onMinimize={onMinimize}
            isActive={isActive}
          />
        </div>
        <Contents contents={contents}/>
        <Footer />
      </div>
    </Draggable>
  );
};



export default Internet;
