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
import Project from "./Component/Project";
import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  });
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
