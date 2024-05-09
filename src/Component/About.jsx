import React from "react";

export const About = () => {
  return (
    <div data-scroll data-scroll-speed=".1" className="w-full min-h-screen overflow-hidden lg:pt-20 pt-14 pb-16  bg-[#CDEA68] rounded-t-2xl text-zinc-900 -mt-20 md:-mb-12 -mb-20">
      <div className=" lg:pr-48 lg:pl-14 px-7  ">
        <h1 className="font-[Neue Montreal] lg:text-5xl text-3xl md:text-4xl tracking-tight leading-none font-normal ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell proucts, explain complex ideas, and hire
          great people.
        </h1>
      </div>
      <div className=" relative h-[30rem] md:h-[15rem] border-t-[1px]  border-zinc-700 mt-20 flex md:justify-between  items-center px-5 lg:px-14">
        <h4 className="absolute text-[15px] font-[500] -mt-[25rem] md:-mt-44">What you can expect:</h4>
        <div className="absolute h-auto tracking-tight w-[20rem] lg:w-[20rem] md:w-[15rem] lg:flex flex-col md:h-28 md:-mt-20 -mt-32  md:ml-[32vw] lg:ml-[44vw]"> 
          <p className="mb-8">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="absolutte md:mt-32 mt-80 mr-32 md:ml-[85vw] ">
          <h3 className="pb-5">S.</h3>
          <h3>Instagram</h3>
          <h3>Behence</h3>
          <h3>Facebook</h3>
          <h3>Linkdin</h3>
        </div>
      </div>
      <div className="w-full h-[100vw] md:h-[35vw] flex-col md:flex-row flex gap-5 border-t-[1px] mt-20 border-zinc-700">
        <div className="md:w-1/2 w-full md:px-14 px-5 py-6 ">
          <h1 className="md:text-5xl text-3xl font-medium">Our approach : </h1>
          <button className=" text-[14px] flex items-center gap-5 mt-6 px-6 py-3 uppercase bg-zinc-900 rounded-full text-white">Read More 
            <div className="h-2 w-2 rounded-full bg-zinc-200"></div>
          </button>
        </div>
        <div className="relative w-full md:w-[55rem] md:h-[40vw] h-[70vw] flex items-center justify-center md:mx-14 -mt-5 md:mt-0">
          <img className=" w-[90vw] rounded-xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
