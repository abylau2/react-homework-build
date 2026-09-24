/**
 * Portfolio Data Configuration
 * Centralized, easily editable information for Abylau's editorial portfolio.
 */

export const DEVELOPER = {
  name: "ABYLAU",
  title: "CYBERSECURITY & FRONTEND",
  location: "ALMATY, KAZAKHSTAN",
  coordinates: "43.2389° N, 76.8897° E",
  year: "2026",
  subline: "Security Operations · Automation · React / UI Systems · Student & Builder",
  status: "Exploring SOC Analysis & UI Engineering.",
  heroIntro:
    "I’m Abylau, a tech enthusiast from Almaty diving deep into cybersecurity, automation, and aspiring towards a SOC Analyst path. I use frontend and AI tools to turn complex data into clean, functional interfaces.",
  aboutText:
    "I’m based in Almaty with a strong passion for cybersecurity and workflow automation, currently working towards becoming a SOC Analyst. I love developing automated scripts, monitoring pipelines, and backend logic that solve real-world operational problems.",
  aboutSubtext:
    "I actively explore frontend development and React because I want to understand systems end-to-end rather than staying confined strictly to the backend. By leveraging modern AI workflows, I can craft sharp, responsive interfaces to present and interact with technical data beautifully.",
  facts: [
    { label: "BASE", value: "Almaty, Kazakhstan" },
    { label: "FOCUS", value: "Cybersecurity · Automation · SOC Analysis" },
    { label: "FRONTEND", value: "React · Modern UI · AI-assisted Workflows" },
    { label: "CURRENTLY", value: "Automating workflows & learning security operations" },
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Portfolio Website",
    category: "Personal Work",
    description:
      "Personal editorial portfolio built with reusable React components, fluid typography, and clean CSS grid composition.",
    tech: ["React", "CSS", "Vite"],
    year: "2026",
    link: "https://github.com/abylau2/react-homework-build",
  },
  {
    id: "02",
    title: "Healthcare Monitoring UI",
    category: "Interface Concept",
    description:
      "Interface concept for monitoring patient IoT health data, patient vitals, and device status with real-time indicators.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2026",
    link: "https://github.com/abylau2",
  },
  {
    id: "03",
    title: "Marketplace Price & Stock Engine",
    category: "Automation & Analytics",
    description:
      "Automated verification and analytics tool for tracking marketplace inventory, stock levels, and competitor price intelligence.",
    tech: ["React", "REST API", "Vite"],
    year: "2026",
    link: "https://github.com/abylau2",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "LANGUAGES & SCRIPTS",
    index: "01",
    skills: ["JavaScript (ES6+)", "Python", "HTML5 & CSS3", "Bash / Shell"],
  },
  {
    category: "FRONTEND & UI",
    index: "02",
    skills: ["React 19", "Vite", "AI-assisted UI", "Component Architecture"],
  },
  {
    category: "SECURITY & OPS",
    index: "03",
    skills: ["SOC Analysis Core", "Process Automation", "Log Analysis", "Network Basics"],
  },
  {
    category: "TOOLS & WORKFLOW",
    index: "04",
    skills: ["Git & GitHub", "VS Code", "npm / Packages", "GitHub Pages"],
  },
];

/**
 * Easily editable contact links.
 * In compliance with assignment rules, phone numbers and home addresses are never exposed.
 */
export const CONTACT_LINKS = {
  github: "https://github.com/abylau2",
  instagram: "https://instagram.com/abylau", // editable placeholder
  email: "abylau.dev@example.com", // editable placeholder
};
