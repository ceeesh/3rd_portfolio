import React from "react";
import About from "../sections/About";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="max-w-3xl shadow-[10px_10px_5px_#0A3B76]">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
