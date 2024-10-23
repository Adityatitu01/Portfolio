import { a } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 (July) -  2022 (October)",
    role: "Frontend Developer Intern",
    company: "Tech Kratz.",
    description: `Worked as a front-end developer at Tech Kratz, where I was responsible for developing and maintaining responsive, user-friendly web interfaces. I collaborated closely with the design team to translate wireframes and mockups into clean, efficient code using modern front-end technologies. My role also involved ensuring cross-browser compatibility, optimizing web performance, and troubleshooting UI/UX issues to enhance user experience. I worked on diverse projects, contributing to innovative web solutions.`,
    technologies: ["Javascript", "Tailwind", "React.js"],
  },
  {
    year: "2022 - 2023",
    role: "Web-Developer",
    company: "Freelancer",
    description: `As a freelance web developer, I specialize in building custom, responsive web applications using React, Node.js, and MongoDB. With expertise in Tailwind CSS, I create sleek, modern interfaces that are both visually appealing and highly functional. I focus on delivering full-stack solutions that meet client needs, from front-end development to back-end APIs and database integration. My process involves collaborating closely with clients, ensuring each project is optimized for performance, scalability, and a seamless user experience.`,
    technologies: [
      "Html",
      "Tailwind",
      "Javascript",
      "React",
      "Nodejs",
      "mongoDb",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Event Management Website",
    image: project1,
    description:
      "My event management website allows organizers to create and manage events, track stats, and handle registrations. Users can browse events, register as attendees or volunteers, and purchase tickets for paid events. Built with a secure login system, the platform provides a seamless experience for both users and organizers, featuring real-time updates and intuitive navigation.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    title: "Word-Craft Blog App",
    image: project2,
    description:
      "This blog app enables users to create, edit, and publish posts with rich-text formatting and media integration. It offers category-based browsing, a commenting system for user engagement, and a responsive design for smooth use on all devices. With secure authentication, it ensures a safe environment for both authors and readers.",
    technologies: ["React", "Material Ui", "Nodejs", "Expressjs", "MongoDb"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "This portfolio website showcases a variety of web development projects, highlighting skills in React, Tailwind CSS, and full-stack development. It features a clean, responsive design with sections for project details, skills, and contact information, providing an engaging and professional overview of the developer's expertise.",
    technologies: ["Javascript", "Tailwind", "React", "Saas"],
  },
  {
    title: "Currency Converter",
    image: project4,
    description:
      "This currency converter app enables users to quickly convert between multiple currencies using real-time exchange rates. It features an intuitive interface for easy access and customization of favorite currencies.",
    technologies: ["Javascript", "Tailwind", "Reactjs"],
  },
  {
    title: "Password Generator",
    image: project4,
    description:
      "This password generator app creates strong, secure passwords based on customizable criteria such as length, inclusion of symbols, numbers, and uppercase or lowercase letters. It features a simple, user-friendly interface with copy-to-clipboard functionality for convenience, ensuring optimal security for online accounts.",
    technologies: ["Javascript", "Tailwind", "Reactjs"],
  },
];
