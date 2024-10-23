import { RiReactjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-300 text-neutral-800 font-semibold py-6">
      <div className="flex flex-col lg:flex-row lg:h-5 justify-center items-center lg:justify-between mx-4 lg:mx-9 ">
        {/* Made With Icons */}
        <div className="hidden lg:block">
          <p className="text-sm">
            Made with &nbsp;<RiTailwindCssFill className='inline text-blue-500 font-semibold' /> <RiReactjsLine className='inline text-cyan-600 font-semibold' /> <TbBrandFramerMotion className='inline text-purple-500 font-semibold' />
          </p>
        </div>

        {/* Copyright */}
        <div className='text-center lg:text-left'>
          <p className='text-sm'>
            Copyright © 2023 <span className="font-bold text-indigo-500">Aditya Tiwari</span>, Inc. All Rights Reserved.
          </p>
        </div>

        {/* Privacy Policy and Terms */}
        <div className="text-center lg:text-right">
          <p className='text-sm'>
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
