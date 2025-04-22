import React, { useRef } from "react";
import About from "../sections/About";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Draggable from "react-draggable";

const Internet = ({show, setShow}) => {
  const nodeRef = useRef(null);
  
  return (
    <Draggable 
    nodeRef={nodeRef} handle=".drag-handle" 
    // handle=".handle"
    defaultPosition={{x: 100, y: 400}}
    // position={null}
    // grid={[25, 25]}
    // scale={1}
    // onStart={this.handleStart}
    // onDrag={this.handleDrag}
    // onStop={this.handleStop}
    >
      <div ref={nodeRef} className="max-w-3xl shadow-[10px_10px_5px_#0A3B76]">
        {/* Adding 'drag-handle' class to header */}
        <div className="drag-handle">
          <Header show={show} setShow={setShow}/>
        </div>
        <About />
        <Footer />
      </div>
    </Draggable>
  );
};

export default Internet;
