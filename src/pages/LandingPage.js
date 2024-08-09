import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="">
      <div className="h-screen w-screen">
        <div className="h-[7.5%]">
          <Header />
        </div>
        <div className="h-[92.5%]">
          {" "}
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
