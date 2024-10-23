import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className='border-b justify-center lg:-ml-24 2xl:mx-16 md:-ml-22 border-neutral-900'>
      <h1 className='py-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:0.5}} className="flex items-center text-center justify-center">
            <img className='rounded-2xl h-80' src={aboutImg} alt="About" />
          </motion.div>
          
        </div>
        <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex justify-center flex-col lg:justify-start md:justify-center items-center">
            <p className='my-2 max-w-xl py-6 lg:-mt-4 lg:-ml-36 '>{ABOUT_TEXT}</p>
            <motion.div  whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:70}}
      transition={{duration:0.5}} className='bg-slate-50 w-36 flex items-center gap-1 justify-center lg:-ml-96 rounded'><h2 className='inline text-2xl text-neutral-600 font-semibold '>Resume</h2><a className='text-3xl font-semibold ' href="https://drive.google.com/file/d/1BOpu1Qt0BwTmmY_-F1ePHwbF48iLA9WT/view?usp=drive_link"> <IoMdDownload className='inline text-3xl text-indigo-500' /></a></motion.div>
          </div>
        </motion.div>
        </div>
     
    </div>
  );
};

export default About;
