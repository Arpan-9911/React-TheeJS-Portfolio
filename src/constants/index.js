import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  pgdav,
  acmegrade,
  pgdavAttendance,
  personalPortfolio,
  rssAssociates,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "C++ | Python | JS Programmer",
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
    title: "Website Developer",
    company_name: "PGDAV College, UOD",
    icon: pgdav,
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Developed and deployed the official website for PGDAV College, ensuring seamless functionality and modern aesthetics.",
      "Integrated dynamic content management features using PHP and MySQL for efficient updates.",
      "Designed and implemented responsive layouts using Bootstrap to ensure compatibility across devices and screen sizes.",
      "Collaborated with stakeholders to gather requirements and deliver a user-friendly interface that met institutional needs.",
    ],
  },
  {
    title: "Web Development Internship",
    company_name: "Acmegrade",
    icon: acmegrade,
    iconBg: "#E6DEDD",
    date: "July 2024 - Sep 2024",
    points: [
      "Developed dynamic and interactive web applications using PHP and MySQL.",
      "Designed and optimized database schemas to ensure efficient data retrieval and storage.",
      "Implemented responsive web pages with Bootstrap for seamless user experience across devices.",
      "Collaborated with team members to integrate backend functionalities and troubleshoot issues during development.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PGDAV College Attendance System",
    description:
      "A web-based system designed to manage student and teacher attendance efficiently leveraging an intuitive interface and robust backend for streamlined operations.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pgdavAttendance,
    source_code_link: "https://github.com/Arpan-9911/College-attendance-system",
  },
  {
    name: "Personal Portfolio",
    description:
      "A responsive and visually appealing web application showcasing my projects, skills, and experiences, built with modern web development technologies.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: personalPortfolio,
    source_code_link: "https://github.com/Arpan-9911/Personal-Portfolio",
  },
  {
    name: "RSS Associates Website",
    description:
      "A professional business website for RSS Associates, showcasing services, client portfolio, and contact details with a user-friendly interface and modern design.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: rssAssociates,
    source_code_link: "https://rssassociates.co.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
