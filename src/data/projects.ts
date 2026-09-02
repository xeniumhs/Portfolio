import { Project } from "@/types";
import {
  FiCpu,
  FiShoppingBag,
  FiBriefcase,
  FiCode,
  FiTarget,
  FiGlobe,
} from "react-icons/fi";

export const projects: Project[] = [
  {
    title: "ThriftTech – Electronic Thrift Store",
    description:
      "Built a multi-vendor marketplace with JWT authentication, vendor dashboards, product management, cart/order workflows and eSewa payment integration using React, Node.js, Express and MongoDB.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    images: [
      "/projects/thriftStore/image11.png",
      "/projects/thriftStore/image12.png",
      "/projects/thriftStore/image13.png",
      "/projects/thriftStore/image14.png",
      "/projects/thriftStore/image15.png",
      "/projects/thriftStore/image16.png",
      "/projects/thriftStore/image17.png",
      "/projects/thriftStore/image18.png",
      "/projects/thriftStore/image19.png",
      "/projects/thriftStore/image20.png",
      "/projects/thriftStore/image21.png",
      "/projects/thriftStore/image22.png",
      "/projects/thriftStore/image23.png",
      "/projects/thriftStore/image24.png",
      "/projects/thriftStore/image25.png",
      "/projects/thriftStore/image26.png",
      "/projects/thriftStore/image27.png",
      "/projects/thriftStore/image28.png",
      "/projects/thriftStore/image29.png",
      "/projects/thriftStore/image30.png",
    ],
    placeholderIcon: FiShoppingBag,
    github:
      "https://github.com/xeniumhs/ThriftTech-Electronic-ThriftStore_Project-II",
    demo: "",
    youtube: "",
    layout: "wide",
    status: "completed",
    featured: true,
  },

  {
    title: "Django E-Commerce",
    description:
      "A full-stack e-commerce application built with Django, featuring product management, user authentication, shopping functionality, and order management.",
    technologies: ["Django", "Python", "PostgreSQL"],
    images: [],
    placeholderIcon: FiBriefcase,
    github: "https://github.com/xeniumhs/django-ecommerce-project",
    demo: "",
    youtube: "",
    layout: "normal",
    status: "completed",
  },

  {
    title: "Fashion Store",
    description:
      "A mini e-commerce fashion store project focused on building a clean shopping interface and made like web but from C++",
    technologies: ["C++"],
    images: [],
    placeholderIcon: FiShoppingBag,
    github: "https://github.com/xeniumhs/Mini-Project-cpp",
    demo: "",
    youtube: "",
    layout: "normal",
    status: "completed",
  },

  {
    title: "TOH – C++ Game",
    description:
      "A C++ mini game project developed to explore game logic, programming fundamentals, and interactive gameplay mechanics.",
    technologies: ["C++"],
    images: [],
    placeholderIcon: FiTarget,
    github: "https://github.com/xeniumhs/toh",
    demo: "",
    youtube: "",
    layout: "normal",
    status: "completed",
  },
  {
    title: "AI Interview Preparation System",
    description:
      "An AI-powered platform for interview preparation, mock interviews, performance analysis, and career guidance. Currently under active development.",
    technologies: ["React", "Django", "Python", "AI/ML", "RAG", "LLM"],
    images: [],
    placeholderIcon: FiCpu,
    github: "https://github.com/xeniumhs/AI-ML",
    demo: "",
    youtube: "",
    layout: "wide",
    status: "working",
  },
  // {
  //   title: "Developer Portfolio",
  //   description:
  //     "A modern developer portfolio built to showcase my projects, technical skills, certifications, and journey in software development.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   images: [],
  //   placeholderIcon: FiGlobe,
  //   github: "",
  //   demo: "",
  //   youtube: "",
  //   layout: "normal",
  //   status: "working",
  // },
];

