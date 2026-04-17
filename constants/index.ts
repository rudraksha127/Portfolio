import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/rudraksha127",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/rudraksh-udiya",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/rudraksha127",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROFILE_SECTIONS = [
  {
    id: "skills",
    label: "Skills",
    title: "Skills",
    filters: ["All", "Industry Knowledge", "Tools & Technologies"],
    items: [
      {
        title: "Software Development Fundamentals",
        group: "Industry Knowledge",
      },
      {
        title: "Problem Solving",
        group: "Industry Knowledge",
        evidence: "Madhya Pradesh Board of Secondary Education (MPBSE)",
        evidenceImage: "/logo.png",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        group: "Industry Knowledge",
        evidence: "Acropolis Institute of Technology and Research",
        evidenceImage: "/logo.png",
      },
      {
        title: "Backend Architecture",
        group: "Industry Knowledge",
      },
      {
        title: "C++",
        group: "Tools & Technologies",
      },
      {
        title: "SQL",
        group: "Tools & Technologies",
      },
      {
        title: "Django REST Framework",
        group: "Tools & Technologies",
      },
      {
        title: "Python (Programming Language)",
        group: "Tools & Technologies",
        evidence: "Programming for Everybody (Getting Started with Python)",
        evidenceImage: "/logo.png",
      },
      {
        title: "Tailwind CSS",
        group: "Tools & Technologies",
      },
      {
        title: "JavaScript",
        group: "Tools & Technologies",
      },
    ],
  },
  {
    id: "achievements",
    label: "Achievements",
    title: "Achievements",
    filters: ["All", "Academic", "Leadership"],
    items: [
      {
        title: "Higher Secondary (12th) completed with Grade A",
        group: "Academic",
      },
      {
        title: "High School (10th) completed with distinction",
        group: "Academic",
      },
      {
        title: "NCC 'A' Certificate",
        group: "Leadership",
      },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    title: "Experience",
    filters: ["All", "Education", "Projects"],
    items: [
      {
        title: "B.Tech IT Student Developer",
        group: "Education",
        evidence: "Acropolis Institute of Technology and Research (2024 – 2028)",
        evidenceImage: "/logo.png",
      },
      {
        title: "Built full-stack portfolio projects with Next.js",
        group: "Projects",
      },
      {
        title: "Hands-on practice with DSA and problem solving",
        group: "Education",
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    title: "Certifications",
    filters: ["All", "Technical", "Leadership"],
    items: [
      {
        title: "Programming for Everybody (Getting Started with Python)",
        group: "Technical",
        evidenceImage: "/logo.png",
      },
      {
        title: "NCC 'A' Certificate",
        group: "Leadership",
      },
    ],
  },
  {
    id: "expertise",
    label: "Expertise",
    title: "Expertise",
    filters: ["All", "Frontend", "Backend", "Core CS"],
    items: [
      {
        title: "Frontend Development with React, Next.js, and Tailwind CSS",
        group: "Frontend",
      },
      {
        title: "Backend APIs with Node.js and Django REST Framework",
        group: "Backend",
      },
      {
        title: "Problem Solving, OOP, and SQL",
        group: "Core CS",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    title: "Projects",
    filters: ["All", "Portfolio", "Web"],
    items: [
      {
        title: "Modern Next.js 14 Portfolio",
        group: "Portfolio",
      },
      {
        title: "Interactive Cards Portfolio",
        group: "Portfolio",
      },
      {
        title: "Space Themed Website",
        group: "Web",
      },
    ],
  },
] as const;

export const EDUCATION = [
  {
    institute: "Acropolis Institute of Technology and Research",
    level: "Bachelor of Technology, Information Technology",
    duration: "Sep 2024 – Jul 2028",
    grade: "In Progress",
    activities: [
      "Full-Stack Development (MERN, Django)",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Real-world Projects & Mini Projects",
      "Git/GitHub & Version Control",
      "Coding Practice & Problem Solving",
    ],
    summary: "Pursuing B.Tech in Information Technology.",
    skills: [
      "Front-End Development",
      "Back-End Web Development",
      "Problem Solving",
    ],
  },
  {
    institute: "Madhya Pradesh Board of Secondary Education (MPBSE)",
    level: "Higher Secondary (12th), PCM",
    duration: "Jun 2023 – Apr 2024",
    grade: "A",
    activities: [
      "Physics, Chemistry, Mathematics (PCM)",
      "Practical Lab Work",
      "Analytical Thinking & Problem Solving",
    ],
    summary: "Completed higher secondary education with a focus on PCM.",
    skills: ["Problem Solving", "Analytical Skills"],
  },
  {
    institute: "Madhya Pradesh Board of Secondary Education (MPBSE)",
    level: "High School (10th), General Studies",
    duration: "Jun 2021 – Apr 2022",
    grade: "A",
    activities: [
      "Academic Excellence",
      "Science & Mathematics Foundation",
      "NCC 'A' Certificate",
    ],
    summary: "Completed high school with distinction.",
    skills: ["Presentation Skills"],
  },
] as const;

export const PROJECTS = [
  {
    title: "AWS Data Pipeline (DEA-C01)",
    description:
      "End-to-end cloud data engineering pipeline on AWS: S3 data lake → Glue ETL jobs → Redshift warehouse → QuickSight dashboards. Automated with Lambda triggers and monitored via CloudWatch.",
    image: "/projects/project-1.png",
    link: "https://github.com/rudraksha127",
  },
  {
    title: "AI-Powered Task Manager",
    description:
      "Full-stack MERN application with an integrated AI assistant that auto-prioritises tasks using NLP, suggests deadlines, and generates daily summaries. Built with React, Node.js, MongoDB, and OpenAI API.",
    image: "/projects/project-2.png",
    link: "https://github.com/rudraksha127",
  },
  {
    title: "DSA Visualizer Platform",
    description:
      "Interactive algorithm visualisation web app supporting 10+ sorting, graph traversal, and tree algorithms. Each algorithm animates step-by-step with complexity analysis. Built with Next.js and Canvas API.",
    image: "/projects/project-3.png",
    link: "https://github.com/rudraksha127",
  },
  {
    title: "Space Portfolio Website",
    description:
      "This very portfolio — a modern, interactive showcase featuring a Jarvis-style NEXUS AI assistant, AWS pipeline diagram, live DSA visualiser, 3D star background, and Framer Motion animations. Next.js 16 + React 19.",
    image: "/projects/project-1.png",
    link: "https://github.com/rudraksha127/Portfolio",
  },
  {
    title: "Full Stack E-Commerce Platform",
    description:
      "Complete MERN e-commerce solution with user authentication, product management, shopping cart, Stripe payments, admin dashboard, order tracking, and real-time inventory updates.",
    image: "/projects/project-2.png",
    link: "https://github.com/rudraksha127",
  },
  {
    title: "Real-Time Weather & Analytics App",
    description:
      "Weather forecast app with real-time data from multiple APIs, interactive maps, location-based alerts, and a social media analytics dashboard with beautiful charts and metrics visualisation.",
    image: "/projects/project-3.png",
    link: "https://github.com/rudraksha127",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/rudraksha127",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "My GitHub",
        icon: null,
        link: "https://github.com/rudraksha127",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://github.com/rudraksha127",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:189518047+rudraksha127@users.noreply.github.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Cloud AWS",
    link: "#cloud-aws",
  },
  {
    title: "Algorithms",
    link: "#dsa-visualizer",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/rudraksha127/Portfolio",
};

export const EXPERIENCE = [
  {
    company: "Open Source Contributor",
    role: "Full Stack Developer",
    location: "Remote",
    duration: "2024 - Present",
    description:
      "Contributing to open source projects and building personal projects to enhance skills in modern web development technologies.",
    achievements: [
      "Built multiple full-stack applications using Next.js and React",
      "Implemented responsive designs with Tailwind CSS",
      "Developed RESTful APIs with Node.js and Express",
      "Integrated databases including MongoDB and PostgreSQL",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    company: "Personal Projects",
    role: "Web Developer",
    location: "Indore, India",
    duration: "2023 - 2024",
    description:
      "Developed various web applications and learned modern development practices while building a strong foundation in programming.",
    achievements: [
      "Created 10+ web projects showcasing different technologies",
      "Learned and implemented modern JavaScript frameworks",
      "Built portfolio websites with 3D animations and effects",
      "Practiced data structures and algorithms regularly",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Data Engineer – Associate (DEA-C01)",
    issuer: "Amazon Web Services",
    date: "2025",
    description:
      "Validates expertise in designing, building, and maintaining AWS data pipelines. Covers S3, Glue, Redshift, Athena, Lambda, Kinesis, and QuickSight.",
    icon: "☁️",
    verified: true,
    skills: ["AWS S3", "AWS Glue", "Redshift", "Athena", "Lambda", "Kinesis"],
    credentialUrl: "",
  },
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Self-Taught / Project-Based",
    date: "2024",
    description:
      "Comprehensive MERN stack development — React 19, Next.js 16, Node.js, MongoDB, TypeScript, and Tailwind CSS.",
    icon: "🎓",
    verified: true,
    skills: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    credentialUrl: "",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Self-Taught / Competitive Programming",
    date: "2024",
    description:
      "Proficient in arrays, trees, graphs, dynamic programming, binary search, and advanced algorithms. Active on LeetCode and Codeforces.",
    icon: "💻",
    verified: true,
    skills: ["DSA", "Graphs", "Dynamic Programming", "Binary Search"],
    credentialUrl: "",
  },
  {
    title: "AI/ML Fundamentals & Applications",
    issuer: "Self-Taught / Project-Based",
    date: "2025",
    description:
      "Applied machine learning, NLP, and LLM prompt engineering. Built AI-powered features including intelligent chat assistants and recommendation systems.",
    icon: "🤖",
    verified: true,
    skills: ["Machine Learning", "NLP", "LLMs", "Prompt Engineering"],
    credentialUrl: "",
  },
  {
    title: "NCC 'A' Certificate",
    issuer: "National Cadet Corps",
    date: "2022",
    description:
      "Completed NCC training demonstrating leadership, discipline, and teamwork skills.",
    icon: "🏅",
    verified: true,
    skills: ["Leadership", "Teamwork", "Discipline"],
    credentialUrl: "",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Future Client",
    role: "Project Lead",
    company: "Tech Company",
    text: "Looking forward to working with talented developers who are passionate about creating exceptional web experiences.",
    rating: 5,
  },
  {
    name: "Peer Developer",
    role: "Full Stack Developer",
    company: "Development Team",
    text: "Collaboration with skilled developers always leads to amazing results and continuous learning.",
    rating: 5,
  },
] as const;
