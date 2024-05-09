import React, { useEffect, useState } from "react";

export default function Eyes() {
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
    <div className="eyes w-full md:h-[50vw] h-[70vw] overflow-hidden">
      <div data-scroll data-scroll-speed="-.4" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute top-[50%] flex gap-10  left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[20vw] h-[20vw]  md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-[13vw] h-[13vw] md:h-[9vw] md:w-[9vw] relative rounded-full bg-zinc-900">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="h-5 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
              <div className="w-5 h-5 rounded-full bg-zinc-100"> </div>
              </div>
            </div>
          </div>
          <div className="w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-[13vw] h-[13vw] md:h-[9vw] md:w-[9vw] flex items-center justify-center rounded-full bg-zinc-900">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" h-5 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="w-5 h-5 rounded-full bg-zinc-100"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
