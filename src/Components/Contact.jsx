import React from "react";
import Info from "./info";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 py-10">
      {/* Animate the h1 heading from the top */}
      <motion.h1
        className="text-4xl text-center pb-10"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:mx-28">
        {/* Left Content - Contact Info (animate from left) */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center gap-8 lg:gap-12 px-6 mb-10 lg:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Let's discuss something <br />
              <motion.span
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                whileHover={{ rotate: [0, 360] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ display: "inline-block", cursor: "pointer" }}
                className="text-indigo-500 text-6xl"
              >
                Cool
              </motion.span>{" "}
              Together
            </h2>
          </div>
          <div className="space-y-4 text-center hidden lg:block">
            <div className="text-lg">
              <IoIosMail className="inline mr-2" />
              <a href="mailto:aditya895754@gmail.com">aditya895754@gmail.com</a>
            </div>
            <div className="text-lg">
              <IoIosCall className="inline mr-2" />
              <a href="tel:8957545504">8957545504</a>
            </div>
            <div className="text-lg">
              <FaLocationDot className="inline mr-2" />
              <span>UP 52 Deoria (Uttar Pradesh)</span>
            </div>
          </div>
          <div className="gap-4 hidden lg:flex text-2xl">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <SiLeetcode />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Contact Form (animate from right) */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center py-8 px-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <form className="w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600 text-center">
              Get in Touch
            </h2>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-indigo-600 font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-indigo-600 font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 font-semibold text-indigo-600"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <Info />
    </div>
  );
};

export default Contact;
