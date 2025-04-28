import React, { useState, useRef, useEffect } from "react";
import Internet from "../components/Internet";
import FooterWindow from "../layouts/FooterWindow";
import internetLogo from "../assets/images/logo-internet.png";
import folderLogo from "../assets/images/logo-folder.png";
import computerLogo from "../assets/images/logo-computer.png";
import Profile from "../sections/Profile";

const Home = () => {
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const networkRef = useRef(null);

  const defaultPositions = {
    profile: { x: 550, y: -380 },
    project: { x: 400, y: -280 },
    network: { x: 350, y: -240 },
  };

  const [windows, setWindows] = useState({
    profile: {
      show: false,
      position: defaultPositions.profile,
    },
    project: {
      show: false,
      position: defaultPositions.project,
    },
    network: {
      show: false,
      position: defaultPositions.network,
    },
  });

  const updateWindowPosition = (key, x, y) => {
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        position: { x, y },
      },
    }));
  };

  const setWindowShow = (key, value) => {
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        show: value,
      },
    }));
  };

  useEffect(() => {
    setWindows((prev) => {
      const updated = { ...prev };

      if (!prev.profile.show) {
        updated.profile.position = defaultPositions.profile;
      }
      if (!prev.project.show) {
        updated.project.position = defaultPositions.project;
      }
      if (!prev.network.show) {
        updated.network.position = defaultPositions.network;
      }

      return updated;
    });
  }, [windows.profile.show, windows.project.show, windows.network.show]);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //     setWindowHeight(window.innerHeight);
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []); // Empty dependency array means this runs only once on mount

  // useEffect(() => {
  //   console.log("windowWidth:", windowWidth);
  //   console.log("windowHeight:", windowHeight);
  // }, [windowWidth, windowHeight]);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col px-5">
        <div
          className="cursor-pointer text-white w-fit"
          onClick={() => setWindowShow("profile", true)}
        >
          <div className="flex flex-col items-center">
            <img src={internetLogo} alt="Internet Logo" className="w-30" />
            <span>Profile</span>
          </div>
        </div>
        <div
          className="cursor-pointer text-white w-fit"
          onClick={() => setWindowShow("project", true)}
        >
          <div className="flex flex-col items-center">
            <img src={folderLogo} alt="Folder Logo" className="w-30" />
            <span>Projects</span>
          </div>
        </div>
        <div
          className="cursor-pointer text-white w-fit"
          onClick={() => setWindowShow("network", true)}
        >
          <div className="flex flex-col items-center">
            <img src={computerLogo} alt="Computer Logo" className="w-30" />
            <span>Networks</span>
          </div>
        </div>
      </div>

      {windows.profile.show && (
        <Internet
          key="profile"
          show={windows.profile.show}
          setShow={(value) => setWindowShow("profile", value)}
          nodeRef={profileRef}
          position={windows.profile.position}
          onPositionChange={(x, y) => updateWindowPosition("profile", x, y)}
          style={{ zIndex: 1 }}
          contents={
            <>
              <Profile />
            </>
          }
        />
      )}
      {windows.project.show && (
        <Internet
          key="project"
          show={windows.project.show}
          setShow={(value) => setWindowShow("project", value)}
          nodeRef={projectRef}
          position={windows.project.position}
          onPositionChange={(x, y) => updateWindowPosition("project", x, y)}
          style={{ zIndex: 2 }}
          contents={
            <>
              am quod? Est quasi tempora repellat? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
            </>
          }
        />
      )}
      {windows.network.show && (
        <Internet
          key="network"
          show={windows.network.show}
          setShow={(value) => setWindowShow("network", value)}
          nodeRef={networkRef}
          position={windows.network.position}
          onPositionChange={(x, y) => updateWindowPosition("network", x, y)}
          style={{ zIndex: 3 }}
          contents={
            <>
              am quod? Est quasi tempora repellat? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro at eius molestiae vel excepturi inventore autem eum
              pariatur. Voluptate quidem id eligendi reiciendis, ab laboriosam
              quod? Est quasi tempora repellat? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro at eius molestiae vel excepturi inventore autem eum
              pariatur. Voluptate quidem id eligendi reiciendis, ab laboriosam
              quod? Est quasi tempora repellat? am quod? Est quasi tempora
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro at eius molestiae vel excepturi inventore autem eum
              pariatur. Voluptate quidem id eligendi reiciendis, ab laboriosam
              quod? Est quasi tempora repellat? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro at eius molestiae vel excepturi inventore autem eum
              pariatur. Voluptate quidem id eligendi reiciendis, ab laboriosam
              quod? Est quasi tempora repellat? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
              repellat? am quod? Est quasi tempora repellat? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro at eius molestiae vel excepturi inventore autem eum
              pariatur. Voluptate quidem id eligendi reiciendis, ab laboriosam
              quod? Est quasi tempora repellat? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Porro at eius molestiae vel
              excepturi inventore autem eum pariatur. Voluptate quidem id
              eligendi reiciendis, ab laboriosam quod? Est quasi tempora
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro at eius molestiae vel excepturi inventore autem eum
              pariatur. Voluptate quidem id eligendi reiciendis, ab laboriosam
              quod? Est quasi tempora repellat?
            </>
          }
        />
      )}

      <FooterWindow />
    </div>
  );
};

export default Home;
