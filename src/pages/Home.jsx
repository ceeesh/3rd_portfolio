import React, { useState, useRef } from "react";
import Internet from "../components/Internet";
import FooterWindow from "../layouts/FooterWindow";
import internetLogo from "../assets/images/logo-internet.png"

const Home = () => {
  const [profileShow, setProfileShow] = useState(false);
  const [projectShow, setProjectShow] = useState(false);
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const [profilePosition, setProfilePosition] = useState({ x: 550, y: 80 });
  const [projectPosition, setProjectPosition] = useState({ x: 400, y: 100 });

  const updateProfilePosition = (x, y) => setProfilePosition({ x, y });
  const updateProjectPosition = (x, y) => setProjectPosition({ x, y });

  return (
    <div className="w-full min-h-screen">
      <div className="cursor-pointer" onClick={() => setProfileShow(true)}>
        <img src={internetLogo} alt="Internet Logo" className="w-16 h-16" />
        PROFILE BUTTON
      </div>
      <div className="cursor-pointer" onClick={() => setProjectShow(true)}>
        PROJECT BUTTON
      </div>
      {profileShow && (
        <Internet
          key="profile"
          show={profileShow}
          setShow={setProfileShow}
          nodeRef={profileRef}
          position={profilePosition}
          onPositionChange={updateProfilePosition}
          style={{ zIndex: 1 }}
        />
      )}
      {projectShow && (
        <Internet
          key="project"
          show={projectShow}
          setShow={setProjectShow}
          nodeRef={projectRef}
          position={projectPosition}
          onPositionChange={updateProjectPosition}
          style={{ zIndex: 2 }}
        />
      )}

      <FooterWindow />
    </div>
  );
};

export default Home;
