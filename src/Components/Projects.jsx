import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center ml-44 lg:ml-52 md:ml-48 sm:ml-40 text-4xl "
      > 
       <motion.span initial={{ rotate: 0 }}
      whileHover={{ rotate: [360,0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ display: "inline-block", cursor: "pointer" }} > Projects </motion.span>
      </motion.h1>
      <div className="flex flex-col justify-center"> 
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-8 flex flex-wrap justify-center text-center lg:text-start lg:justify-center"
            > 
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex justify-center lg:block lg:-ml-11 lg:-mt-6"
              >
                <a href={project.link}>
                <img 
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="m-6 rounded"
                /> </a>
              </motion.div> 
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6  className="mb-2 font-semibold hover:text-purple-600 hover:transition-all"> <a href={project.link}>{project.title} </a></h6>
                <p className="mb-4 text-neutral-400">{project.description}</p> 
                {project.technologies.map((tech, index) => {
                  return (
                    <motion.span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 text-indigo-600 px-2 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </motion.span>
                  );
                
                })}
                
              </motion.div>
            </div>
            
          );
        })}
      </div>
      
    </div>
  );
};

export default Projects;
