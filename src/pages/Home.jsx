import React, { useState, useRef } from "react";
import Internet from "../components/Internet";
import FooterWindow from "../layouts/FooterWindow";
import internetLogo from "../assets/images/logo-internet.png";
import folderLogo from "../assets/images/logo-folder.png";
import computerLogo from "../assets/images/logo-computer.png";

const Home = () => {
  const [profileShow, setProfileShow] = useState(false);
  const [projectShow, setProjectShow] = useState(false);
  const [networksShow, setNetworksShow] = useState(false);
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const networksRef = useRef(null);
  const [profilePosition, setProfilePosition] = useState({ x: 550, y: -380 });
  const [projectPosition, setProjectPosition] = useState({ x: 400, y: -280 });
  const [networksPosition, setNetworksPosition] = useState({ x: 350, y: -240 });

  const updateProfilePosition = (x, y) => setProfilePosition({ x, y });
  const updateProjectPosition = (x, y) => setProjectPosition({ x, y });
  const updateNetworkPosition = (x, y) => setNetworksPosition({ x, y });


  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col px-5">
        <div
          className="cursor-pointer text-white w-fit"
          onClick={() => setProfileShow(true)}
        >
          <div className="flex flex-col items-center">
            <img src={internetLogo} alt="Internet Logo" className="w-30" />
            <span>Profile</span>
          </div>
        </div>
        <div
          className="cursor-pointer text-white w-fit"
          onClick={() => setProjectShow(true)}
        >
          <div className="flex flex-col items-center">
            <img src={folderLogo} alt="Folder Logo" className="w-30" />
            <span>Projects</span>
          </div>
        </div>
        <div
          className="cursor-pointer text-white w-fit"
          onClick={() => setNetworksShow(true)}
        >
          <div className="flex flex-col items-center">
            <img src={computerLogo} alt="Computer Logo" className="w-30" />
            <span>Networks</span>
          </div>
        </div>
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
       {networksShow && (
        <Internet
          key="network"
          show={networksShow}
          setShow={setNetworksShow}
          nodeRef={networksRef}
          position={networksPosition}
          onPositionChange={updateNetworkPosition}
          style={{ zIndex: 3 }}
        />
      )}

      <FooterWindow />
    </div>
  );
};

export default Home;
