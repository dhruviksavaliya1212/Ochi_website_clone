import React from "react";
import "./LandingPage.css";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-[600px] md:h-[650px] lg:h-fit bg-zinc-900 pt-1">
      <div  className="textstructure mt-24 md:mt-40 px-4 sm:px-10 md:px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div  className="w-fit flex items-center gap-2">
                {index === 1 && (<motion.div initial={{width:0}} animate={{width: "80px"}} transition={{ ease:[0.76,0,0.24,1], duration:1}} className="md:hidden w-[65px] h-[45px] md:w-[75px] md:h-[50px] lg:w-[85px] lg:h-[60px] xl:w-[97px] xl:h-[70px] flex items-center justify-center bg-red-600 rounded-lg"><img
            className="w-[60px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            srcset=""
          /></motion.div>)}
          {index === 1 && (<motion.div initial={{width:0}} animate={{width: "100px"}} transition={{ ease:[0.76,0,0.24,1], duration:1}} className="md:flex hidden w-[65px] h-[60px] md:w-[75px] md:h-[55px] lg:w-[85px] lg:h-[60px] xl:w-[97px] xl:h-[70px] items-center justify-center bg-red-600 rounded-lg"><img
            className="w-[70px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            srcset=""
          /></motion.div>)}
                <h1
                  key={index}
                  className="uppercase text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] leading-none  font-medium "
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-500 md:mt-20 mt-32 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0 lg:py-5 py-6 sm:px-10 md:px-20 px-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="text-[16px] font-light leading-none">{item}</p>
          );
        })}
        <div className="start flex gap-3 items-center">
          <div className="px-4 py-[4px] hover:text-zinc-800 hover:bg-zinc-200 duration-300 cursor-pointer border-2 rounded-full uppercase border-zinc-600 text-[15px]">
            Start the project
          </div>
          <div className="w-9 h-9 md:flex hover:text-zinc-800 hover:bg-zinc-200 duration-300 cursor-pointer hidden  items-center justify-center rounded-full border-zinc-600 border-[2px]">
            <span className="rotate-[45deg] ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
