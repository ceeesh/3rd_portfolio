import React from "react";
import About from "../sections/About";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Draggable from "react-draggable";

const Internet = ({ show, setShow, nodeRef, position, onPositionChange, style }) => {
  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      position={position}
      onStop={(e, data) => onPositionChange(data.x, data.y)}
    >
      <div ref={nodeRef} className="max-w-3xl shadow-[10px_10px_5px_#0A3B76]"  style={{
          ...style,
          position: "absolute",
        }}>
        <div className="drag-handle">
          <Header show={show} setShow={setShow} />
        </div>
        <About />
        <Footer />
      </div>
    </Draggable>
  );
};



export default Internet;
