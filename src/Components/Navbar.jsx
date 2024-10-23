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
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
        <FaInstagram />
    </div>
   </nav>
  );
}

export default Navbar;
