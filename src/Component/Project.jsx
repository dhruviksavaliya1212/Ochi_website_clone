import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
// import './Project.css'

const Project = () => {
  const[rotate,setRotate]=useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  })
  return (
    <div className="w-full overflow-hidden h-fit bg-[#CDEA68]">
      <div className="flex items-center justify-center flex-col md:pt-24 pt-10">
        {["Ready", "To start", "the Project ?"].map((item, index) => {
          return (
            <div className="project flex items-center justify-center align-middle">
              <h1 data-aos="fade-up" data-aos-delay="100"
                key={index}
                className="lg:text-[10rem] text-[14vw] leading-none uppercase text-black font-bold tracking-[-0.035em]"
              >
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div>
      <div className="flex gap-10 items-center justify-center mt-7">
          <div data-aos="flip-right" data-aos-delay="100" className="w-[20vw] h-[20vw]  md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-[13vw] h-[13vw] md:h-[9vw] md:w-[9vw] relative rounded-full bg-zinc-900">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="h-5 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
              <div className="sm:w-5 w-4 sm:h-5 h-4 rounded-full bg-zinc-100"> </div>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="100" className="w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-[13vw] h-[13vw] md:h-[9vw] md:w-[9vw] flex items-center justify-center rounded-full bg-zinc-900">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" h-5 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="sm:w-5 w-4 sm:h-5 h-4 rounded-full bg-zinc-100"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-5 ">
        <div className=" h-[17rem] w-[35rem] flex flex-col items-center gap-5 justify-center">
          <div>
            <button data-aos="fade-up" data-aos-delay="100"
              type="button "
              className="border px-6 flex gap-3 items-center  py-4 text-[15px] font-semibold bg-zinc-300 text-zinc-900 rounded-full"
            >
              START THE PROJECT
              <span className="rotate-[45deg] w-7 h-7 flex  items-center justify-center rounded-full border-zinc-900 border">
                <FaArrowUpLong />
              </span>
            </button>
          </div>
          <h1 className="text-black">OR</h1>
          <div>
            <button data-aos="fade-down" data-aos-delay="100"
              type="button "
              className="border px-6 flex gap-3 items-center  py-4 text-[15px] font-semibold text-zinc-900 rounded-full border-zinc-900"
            >
              HELLO@OCHI.DESIGN
              <span className="rotate-[45deg] w-7 h-7 flex  items-center justify-center rounded-full border-zinc-900 border">
                <FaArrowUpLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
