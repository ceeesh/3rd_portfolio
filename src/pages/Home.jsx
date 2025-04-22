import React, { useState } from "react";
import Internet from "../components/Internet";
import FooterWindow from "../layouts/FooterWindow";

const Home = () => {
  const [profileShow, setProfileShow] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="" onClick={() => setProfileShow(true)}>
        BUTOTN
      </div>
      {profileShow && <Internet show={profileShow} setShow={setProfileShow} />}

      <FooterWindow />
    </div>
  );
};

export default Home;
