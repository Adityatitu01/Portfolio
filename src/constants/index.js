import { a } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate MERN stack developer with a talent for building dynamic and scalable web applications. Skilled in crafting seamless front-end interfaces using React and delivering powerful back-end solutions with Node.js and Express, I specialize in developing RESTful APIs and integrating robust databases like MongoDB. Having developed numerous innovative projects, I am driven by the goal of creating cutting-edge solutions that enhance user experiences and propel business growth. My expertise lies in translating complex requirements into efficient, high-quality applications that leave a lasting impact.`;

export const ABOUT_TEXT = `I am a passionate web developer with a growing interest in creating dynamic and user-friendly web applications. Over the past few years, I have immersed myself in learning modern technologies like React, Node.js, and MongoDB, and have successfully developed several projects that showcase my skills. I love the process of turning creative ideas into functional solutions. Working with a team on various projects has helped me improve my collaboration and problem-solving abilities, and I always strive to contribute my best work. Driven by curiosity and a strong desire to learn, I am excited to continue exploring the world of web development and taking on new challenges.`;

export const EXPERIENCES = [
  {
    year: "2023 (Sept) -  2023 (Nov)",
    role: "Frontend Developer Intern",
    company: "Tech Kratz.",
    description: `Worked as a front-end developer at Tech Kratz, where I was responsible for developing and maintaining responsive, user-friendly web interfaces. I collaborated closely with the design team to translate wireframes and mockups into clean, efficient code using modern front-end technologies. My role also involved ensuring cross-browser compatibility, optimizing web performance, and troubleshooting UI/UX issues to enhance user experience. I worked on diverse projects, contributing to innovative web solutions.`,
    technologies: ["Javascript", "Tailwind", "React.js"],
  },
  {
    year: "2022 - 2024",
    role: "Web-Developer",
    company: "Freelancer",
    description: `As a freelance web developer, I specialize in building custom, responsive web applications using React, Node.js, and MongoDB. With expertise in Tailwind CSS, I create sleek, modern interfaces that are both visually appealing and highly functional. I focus on delivering full-stack solutions that meet client needs, from front-end development to back-end APIs and database integration. My process involves collaborating closely with clients, ensuring each project is optimized for performance, scalability, and a seamless user experience.`,
    technologies: [
      "Html",
      "Tailwind",
      "Javascript",
      "React",
      "Nodejs",
      "Expressjs",
      "mongoDb",
    ],
  },
];

export const PROJECTS = [
  {
    title: "FESTIFY | Event Management Website",
    image: project1,
    description:
      "My event management website allows organizers to create and manage events, track stats, and handle registrations. Users can browse events, register as attendees or volunteers, and purchase tickets for paid events. Built with a secure login system, the platform provides a seamless experience for both users and organizers, featuring real-time updates and intuitive navigation.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    link: "https://festify-sigma.onrender.com/",
  },
  {
    title: "BLOGIFY | Blogging Platform",
    image: project2,
    description:
      "This blog app enables users to create, edit, and publish posts with rich-text formatting and media integration. It offers category-based browsing, a commenting system for user engagement, and a responsive design for smooth use on all devices. With secure authentication, it ensures a safe environment for both authors and readers.",
    technologies: ["React","Tailwind", "Clerk", "Nodejs", "Expressjs", "MongoDb"],
    link: "https://blogify-blue-chi.vercel.app/",
  },
  {
    title: "Currency Converter",
    image: project4,
    description:
      "This currency converter app enables users to quickly convert between multiple currencies using real-time exchange rates. It features an intuitive interface for easy access and customization of favorite currencies.",
    technologies: ["Javascript", "Tailwind", "Reactjs"],
    link: "https://currency-converter-kohl-ten.vercel.app/",
  },
  {
    title: "Password Generator",
    image: project4,
    description:
      "This password generator app creates strong, secure passwords based on customizable criteria such as length, inclusion of symbols, numbers, and uppercase or lowercase letters. It features a simple, user-friendly interface with copy-to-clipboard functionality for convenience, ensuring optimal security for online accounts.",
    technologies: ["Javascript", "Tailwind", "Reactjs"],
    link: "https://password-generator-vert-two.vercel.app/",
  },
];
