import React from "react";
import { Navbar } from "./Component/Navbar";
import { LandingPage } from "./Component/LandingPage";
import { Marquee } from "./Component/Marquee";
import { About } from "./Component/About";
import Eyes from "./Component/Eyes";
import "./App.css";
import { Featured } from "./Component/Featured";
import { Cards } from "./Component/Cards";
import { Footer } from "./Component/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    mobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
