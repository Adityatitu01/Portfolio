import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div id='about' className='border-b pb-11 justify-center lg:-ml-24 2xl:mx-7 md:-ml-22 border-neutral-800'>
      <h1 className='py-20 text-center text-4xl'> 
      <motion.span initial={{ rotate: 0 }}
      whileHover={{ rotate: [360,0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ display: "inline-block", cursor: "pointer" }} > About </motion.span> <span className='text-neutral-500'>Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:0.5}} className="flex items-center text-center justify-center">
            <img className='rounded-2xl h-80 lg:ml-4' src={aboutImg} alt="About" />
          </motion.div>
          
        </div>
        <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex justify-center flex-col lg:justify-start md:justify-center items-center">
            <p className='my-2 max-w-xl py-6 lg:-mt-4 lg:-ml-36 flex items-center flex-col lg:items-start '>{ABOUT_TEXT} <motion.div  whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:70}}
      transition={{duration:0.5}} className='bg-slate-50 w-36 flex items-center gap-1 rounded-md justify-center mt-3'><h2 className='inline text-2xl text-neutral-600 font-semibold '>
        Resume</h2><a className='text-3xl font-semibold ' href="https://drive.google.com/file/d/1ckk32ACzVLXf2mv84K1fpMPSvzp3XoBy/view?usp=sharing"> <IoMdDownload className='inline text-3xl text-indigo-500' /></a></motion.div> </p>

          </div>
        </motion.div>
        </div>
     
    </div>
  );
};

export default About;
