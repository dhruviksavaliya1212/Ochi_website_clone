import React from "react";

export const Cards = () => {
  return (
    <div className="w-full rounded-t-2xl overflow-hidden h-full md:h-[40rem] bg-zinc-950 flex flex-wrap md:flex-nowrap items-center py-10 lg:px-16 px-5 gap-4">
      <div className="cardcontainer h-[20rem] md:w-1/2 w-full">
        <div className="relative card w-full rounded-xl h-full text-[#CDEA68]  bg-[#004D43] flex items-center justify-center">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            srcset=""
          />
          <button className="absolute px-3 py-1 rounded-full text-[15px] lg:left-10 left-5 lg:bottom-9 bottom-5 border border-[#CDEA68]">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex items-center justify-center flex-col sm:flex-row  md:flex-nowrap gap-3 h-full md:w-1/2 w-full">
        <div className="card relative flex justify-center items-center w-full sm:w-1/2 rounded-xl h-[20rem] bg-[#313030]">
          <img
            className="w-36"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            srcset=""
          />
          <button className="absolute px-3 py-1 rounded-full text-[15px] lg:left-4 md:left-2 left-[3vw] lg:bottom-8 bottom-5 border ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-full sm:w-1/2 rounded-xl h-[20rem] bg-[#212121]">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            srcset=""
          />
          <button className="absolute px-3 py-1 rounded-full text-[15px] lg:left-4 md:left-0 left-[3vw] lg:bottom-8 bottom-5 border ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};
