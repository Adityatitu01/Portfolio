import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
   <nav className="mb-15 flex items-center m-auto xl:mx-32 justify-between py-14">
    <div className="flex flex-shrink-0 items-center">
        <img className='mx-5 w-10' src={logo} alt="logo" />
    </div>
    <div className="flex mx-24 items-center justify-center gap-4 text-2xl">
        <a className='text-blue-500' href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"><FaLinkedin /></a>
        <a className='' href="https://github.com/Adityatitu01"><FaGithub /></a>
        <a className='text-cyan-500' href="https://x.com/AdityaTituu"><FaTwitter /></a>
        <a className='text-pink-600' href=""><FaInstagram /></a>
    </div>
   </nav>
  );
}

export default Navbar;
