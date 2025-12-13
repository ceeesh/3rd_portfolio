import React, { useState, useRef, useEffect } from "react";
import Internet from "../components/Internet";
import FooterWindow from "../layouts/FooterWindow";
import internetLogo from "../assets/images/logo-internet.png";
import folderLogo from "../assets/images/logo-folder.png";
import computerLogo from "../assets/images/logo-computer.png";
import fileLogo from "../assets/images/logo-file.png";
import Profile from "../sections/Profile";
import Projects from "../sections/Projects";
import Networks from "../sections/Networks";
import resumePDF from "../assets/images/CeeJay Malacas Resume 2025.pdf";

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const networkRef = useRef(null);

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [activeWindow, setActiveWindow] = useState(null);
  const [minimizedWindows, setMinimizedWindows] = useState([]);

  // Handle window resize - just update size state, don't reposition windows
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [windows, setWindows] = useState({
    profile: {
      show: false,
      minimized: false,
    },
    project: {
      show: false,
      minimized: false,
    },
    network: {
      show: false,
      minimized: false,
    },
  });

  const setWindowShow = (key, value) => {
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        show: value,
        minimized: false,
      },
    }));
    if (value) {
      setActiveWindow(key);
      setMinimizedWindows(prev => prev.filter(w => w !== key));
    }
  };

  const minimizeWindow = (key) => {
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        minimized: true,
      },
    }));
    setMinimizedWindows(prev => [...prev, key]);
    setActiveWindow(null);
  };

  const closeAllWindows = () => {
    setWindows({
      profile: { show: false, minimized: false },
      project: { show: false, minimized: false },
      network: { show: false, minimized: false },
    });
    setMinimizedWindows([]);
    setActiveWindow(null);
  };

  const restoreWindow = (key) => {
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        minimized: false,
      },
    }));
    setMinimizedWindows(prev => prev.filter(w => w !== key));
    setActiveWindow(key);
  };

  const handleIconClick = (key) => {
    setSelectedIcon(key);
    setWindowShow(key, true);
  };

  const handleDesktopClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedIcon(null);
    }
  };
  

  return (
    <div className="w-full h-screen overflow-hidden crt-screen" onClick={handleDesktopClick}>
      <div className="flex flex-col px-5 gap-6 py-4">
        <div
          className={`desktop-icon cursor-pointer text-white w-fit ${selectedIcon === 'profile' ? 'selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleIconClick("profile");
          }}
        >
          <div className="flex flex-col items-center">
            <img src={internetLogo} alt="Internet Logo" className="w-20" />
            <span className="text-sm mt-1">Profile</span>
          </div>
        </div>
        <div
          className={`desktop-icon cursor-pointer text-white w-fit ${selectedIcon === 'project' ? 'selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleIconClick("project");
          }}
        >
          <div className="flex flex-col items-center">
            <img src={folderLogo} alt="Folder Logo" className="w-20" />
            <span className="text-sm mt-1">Projects</span>
          </div>
        </div>
        <div
          className={`desktop-icon cursor-pointer text-white w-fit ${selectedIcon === 'network' ? 'selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            handleIconClick("network");
          }}
        >
          <div className="flex flex-col items-center">
            <img src={computerLogo} alt="Computer Logo" className="w-20" />
            <span className="text-sm mt-1">Networks</span>
          </div>
        </div>
        <div
          className={`desktop-icon cursor-pointer text-white w-fit ${selectedIcon === 'resume' ? 'selected' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedIcon('resume');
            window.open(resumePDF, '_blank');
          }}
        >
          <div className="flex flex-col items-center">
            <img src={fileLogo} alt="Resume Logo" className="w-20" />
            <span className="text-sm mt-1">Resume</span>
          </div>
        </div>
      </div>

      {windows.profile.show && !windows.profile.minimized && (
        <Internet
          key="profile"
          title="Profile"
          show={windows.profile.show}
          setShow={(value) => setWindowShow("profile", value)}
          onMinimize={() => minimizeWindow("profile")}
          nodeRef={profileRef}
          onFocus={() => setActiveWindow("profile")}
          isActive={activeWindow === "profile"}
          style={{ zIndex: activeWindow === "profile" ? 100 : 1 }}
          contents={<Profile />}
          offsetX={0}
          offsetY={0}
        />
      )}
      {windows.project.show && !windows.project.minimized && (
        <Internet
          key="project"
          title="Projects"
          show={windows.project.show}
          setShow={(value) => setWindowShow("project", value)}
          onMinimize={() => minimizeWindow("project")}
          nodeRef={projectRef}
          onFocus={() => setActiveWindow("project")}
          isActive={activeWindow === "project"}
          style={{ zIndex: activeWindow === "project" ? 100 : 2 }}
          contents={<Projects />}
          offsetX={-100}
          offsetY={30}
        />
      )}
      {windows.network.show && !windows.network.minimized && (
        <Internet
          key="network"
          title="Networks"
          show={windows.network.show}
          setShow={(value) => setWindowShow("network", value)}
          onMinimize={() => minimizeWindow("network")}
          nodeRef={networkRef}
          onFocus={() => setActiveWindow("network")}
          isActive={activeWindow === "network"}
          style={{ zIndex: activeWindow === "network" ? 100 : 3 }}
          contents={<Networks />}
          offsetX={-200}
          offsetY={60}
        />
      )}

      <FooterWindow
        minimizedWindows={minimizedWindows}
        onRestore={restoreWindow}
        windows={windows}
        onCloseAll={closeAllWindows}
      />
    </div>
  );
};

export default Home;
