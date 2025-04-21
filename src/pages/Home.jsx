import React from "react";
import Internet from "../components/Internet";
import FooterWindow from "../layouts/FooterWindow";

const Home = () => {
  return (
    <div className="border border-red-500 w-full h-full flex items-center justify-center">
      <div></div>
      <Internet />
      <FooterWindow />
    </div>
  );
};

export default Home;
