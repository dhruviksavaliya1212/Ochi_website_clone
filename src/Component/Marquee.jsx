import { motion } from 'framer-motion'
import React from 'react'
import './Marquee.css'

export const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="-.1" className='w-full py-10 lg:h-[28rem] rounded-t-2xl bg-[#004D43]'>
      <div className='text uppercase md:mt-5 md:mb-5 border-y-2 py-3  flex whitespace-nowrap overflow-hidden font-[Founders] border-zinc-400'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:20}} className=' text text-[8rem] md:text-[13rem] lg:text-[18rem] leading-none font-semibold -my-5 pr-10'>We are Ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:20}} className=' text text-[8rem] md:text-[13rem] lg:text-[18rem] leading-none font-semibold -my-5 pr-10'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}