import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.png"

const container = (time)=>({
  hidden: {x: -100, opacity:0},
  visible: {
    x: 0,
    opacity: 1,
    transition:{duration:0.6, delay : time},
  },
})

const Hero = () => {
  return (
    <div className="border-b pb-12 flex justify-center border-neutral-800 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Aditya Tiwari</motion.h1>
            {/* Fixed gradient classes */}
            <motion.span 
             variants={container(0.5)}
             initial="hidden"
             animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p variants={container(1)}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Add responsive image sizing */}
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}} 
            transition={{duration:1, delay:1.2}}
             className="rounded w-80 lg:w-96 lg:mt-8" src={profilePic} alt="Aditya Profile Pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
