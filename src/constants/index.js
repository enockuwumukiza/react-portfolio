import {
  mobile,
  backend,
  creator,
  news,
  music,
  chat,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  bank,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web
  },
  {
    title:"ElectronJS Developer ",
    icon:mobile
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
  
    icon: starbucks,
    iconBg: "#383E56",
    date: "From 2023 February",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "From Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Web Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "From Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN stack Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Electron JS Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining desktop applications using Javascript and other related technologies.",
      "Implementing native features and ensuring cross-platform compatibility",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Enock proved me wrong.",
    name: "Emmanuel",
    designation: "Developer",
    company: "INES",
    image: "https://res.cloudinary.com/dta7gezao/image/upload/v1739806171/user_files/ulkestfptbyk1wqbtlsz.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Enock does.",
    name: "James Karl",
    designation: "CEO",
    company: "E-Live",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Enock optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Joshua Ishimwe",
    designation: "COO",
    company: "Tech-7 Enterprises",
    image: "https://res.cloudinary.com/dta7gezao/image/upload/v1726045453/samples/man-portrait.jpg",
  },
];

const projects = [
  {
    name: "Music Player",
    description:
      "Web-based platform that allows users to listen to music, player local and online videos and audios.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/",
  },
  {
    name: "News App",
    description:
      "Web application that enables users to search for news, read news, comment and share",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat App",
    description:
      "A beautiful Chat app built to enable users send and receive messages in real time",
    tags: [
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    link:"https://echat-fieq.onrender.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "Banking System",
    description:
      "Simple simulation of banking system",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      }
    ],
    image: bank,
    link:"https://mybank-tbl5.onrender.com",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };