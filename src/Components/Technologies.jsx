import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from 'react-icons/ri'
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse", // Fixed "repeateType" to "repeatType"
    },
  },
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <motion.h1 whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'> <motion.span initial={{ rotate: 0 }}
         whileHover={{ rotate: [360,0] }}
         transition={{ duration: 1, ease: "easeInOut" }}
         style={{ display: "inline-block", cursor: "pointer" }} > Technologies </motion.span> </motion.h1>
        <motion.div whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-red-500'/></motion.div>
            <motion.div             variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-7xl text-cyan-400' /></motion.div>
            <motion.div             variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
            <IoLogoJavascript className='text-7xl text-yellow-300'/></motion.div>
            <motion.div             variants={iconVariants(5)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
             <RiReactjsLine className='text-7xl text-cyan-400'/></motion.div>
             <motion.div             variants={iconVariants(2)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
             <SiExpress className='text-7xl text-stone-300'/></motion.div>
             <motion.div             variants={iconVariants(6)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
             <SiMongodb className='text-7xl text-green-500'/></motion.div>
             <motion.div             variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
             <FaNodeJs className='text-7xl text-green-500'/></motion.div>
             <motion.div            variants={iconVariants(4)}
            initial="initial"
            animate="animate" className="rounded-2xl flex border-4 border-neutral-800 p-4">
             <TbBrandFramerMotion className='text-7xl text-stone-300'/></motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies
