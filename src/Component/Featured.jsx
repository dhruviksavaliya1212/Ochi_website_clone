import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export const Featured = () => {
  const [isHover, setHover] = useState(false);
  const [isHover1, setHover1] = useState(false);
  const [isHover2, setHover2] = useState(false);
  const [isHover3, setHover3] = useState(false);

  return (
    <div className="w-full h-fit md:py-10 overflow-hidden py-14 rounded-t-2xl bg-zinc-800">
      <div className="w-full md:px-14 px-5 border-b-[1px] pb-10 border-zinc-600">
        <h1 className="md:text-4xl lg:text-5xl text-3xl tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="cards flex flex-col md:flex-row md:gap-10 gap-3 lg:px-14 px-5 mt-10">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="card md:w-1/2 w-full h-full md:h-fit "
        >
          <h1 className="pl-2">-- FYDE</h1>
          <div className="innercardconta iner relative w-full h-[80vw]  md:h-[38vw] mt-5">
            <h1 className="absolute flex overflow-hidden text-[#a8c052] md:left-full left-[50%] -translate-x-[50%] top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHover ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl hover:scale-95 duration-300  overflow-hidden">
              <img
                className="h-full w-full hover:scale-[1.2] duration-300 rounded-xl bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="buttons md:py-5 py-3">
            {["AUDIT", "COPYWRITING", "SLAES DECK", "SLIDES DESIGN"].map(
              (items, index) => (
                <button
                  type="button"
                  className="px-3 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-900 duration-300 text-[15px] font-semibold mx-2 rounded-full my-1 py-1 border "
                  key={index}
                >
                  {items}
                </button>
              )
            )}
          </div>
        </div>
        <div className="card md:w-1/2 w-full h-full md:h-fit ">
          <h1 className="pl-2">-- VISE</h1>
          <div
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            className="innercardcontainer relative  w-full h-[80vw]  md:h-[38vw] mt-5"
          >
            <h1 className="absolute flex overflow-hidden text-[#a8c052] md:right-full right-[50%] translate-x-[50%] top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHover1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden hover:scale-95 duration-300 rounded-xl">
              <img
                className="w-full h-full hover:scale-[1.2] duration-300 rounded-xl bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="buttons py-5">
            {["AGENCY", "COMPANY PRESENTATION"].map((items, index) => (
              <button
                type="button"
                className="px-3 hover:bg-zinc-300 hover:text-zinc-900 duration-300 text-[15px] text-zinc-300 font-semibold mx-2 rounded-full py-1 border "
                key={index}
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="cards flex flex-col md:flex-row md:gap-10 gap-3 lg:px-14 px-5 md:mt-5">
        <div
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          className="card md:w-1/2 w-full h-full md:h-fit"
        >
          <h1 className="pl-2">-- TRAWA</h1>
          <div className="innercardconta iner relative w-full h-[80vw]  md:h-[38vw] mt-5">
            <h1 className="absolute flex overflow-hidden text-[#a8c052] md:left-full left-[50%] -translate-x-[50%] top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold leading-none tracking-tighter">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHover2 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full  rounded-xl hover:scale-95 duration-300  overflow-hidden">
              <img
                className="h-full w-full hover:scale-[1.2] duration-300 rounded-xl bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="buttons md:py-5 py-3">
            {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DESK"].map(
              (items, index) => (
                <button
                  type="button"
                  className="px-3 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-900 duration-300 text-[15px] font-semibold mx-2 rounded-full my-1 py-1 border "
                  key={index}
                >
                  {items}
                </button>
              )
            )}
          </div>
        </div>
        <div className="card md:w-1/2 w-full h-full md:h-fit ">
          <h1 className="pl-2">-- PREMIUM BLEND</h1>
          <div
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            className="innercardcontainer relative  w-full h-[80vw]  md:h-[38vw] mt-5"
          >
            <h1 className="absolute flex overflow-hidden text-[#a8c052] md:right-full right-[50%] translate-x-[50%] top-1/2 -translate-y-1/2 z-[9] md:text-8xl text-[12vw]  font-bold leading-none tracking-tighter">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHover3 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden hover:scale-95 duration-300  rounded-xl">
              <img
                className="w-full h-full hover:scale-[1.2] duration-300 rounded-xl bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="buttons py-5">
            {["BRANDED TEMPLATE"].map((items, index) => (
              <button
                type="button"
                className="px-3 text-[15px] hover:bg-zinc-300 hover:text-zinc-900 duration-300  text-zinc-300 font-semibold mx-2 rounded-full py-1 border "
                key={index}
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" h-10 w-full flex justify-center text-center mt-5">
        <button
          type="button "
          className="border px-6 flex gap-3 items-center  py-6 text-[15px] font-bold bg-zinc-300 text-zinc-900 rounded-full"
        >
          VIEW ALL CASE STUDIES
          <span className="rotate-[45deg] w-7 h-7 flex  items-center justify-center rounded-full border-zinc-900 border">
            <FaArrowUpLong />
          </span>
        </button>
      </div>
    </div>
  );
};
