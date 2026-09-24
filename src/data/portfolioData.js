/**
 * Portfolio Data Configuration
 * Centralized, easily editable information for Abylau's editorial portfolio.
 */

export const DEVELOPER = {
  name: "ABYLAU",
  title: "FRONTEND DEVELOPER",
  location: "ALMATY, KAZAKHSTAN",
  coordinates: "43.2389° N, 76.8897° E",
  year: "2026",
  subline: "React Developer · Frontend / Interfaces · Student & Builder",
  status: "Open to interesting projects.",
  heroIntro:
    "I’m Abylau, a frontend developer from Almaty. I build React interfaces, experiment with web ideas, and try to make each project cleaner than the previous one.",
  aboutText:
    "I’m a frontend developer based in Almaty, focused on React and modern web interfaces. I like breaking larger interfaces into small, reusable components and learning how good structure improves both the code and the final experience.",
  aboutSubtext:
    "My focus is on direct, understandable code: clean JSX, structured CSS Grid compositions, and solid responsive behavior without bloated UI dependencies. I treat frontend development as both a technical craft and an editorial layout discipline.",
  facts: [
    { label: "BASE", value: "Almaty, Kazakhstan" },
    { label: "FOCUS", value: "React / JavaScript / Frontend" },
    { label: "CURRENTLY", value: "Learning, building and improving" },
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
    category: "Analytics Tool",
    description:
      "Automated verification and analytics tool for tracking marketplace inventory, stock levels, and competitor price intelligence.",
    tech: ["React", "REST API", "Vite"],
    year: "2026",
    link: "https://github.com/abylau2",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "LANGUAGES",
    index: "01",
    skills: ["JavaScript (ES6+)", "HTML5 Semantics", "CSS3 / Modern CSS", "TypeScript"],
  },
  {
    category: "FRAMEWORKS & LIBS",
    index: "02",
    skills: ["React 19", "React Hooks", "Vite", "Component Primitives"],
  },
  {
    category: "TOOLS & WORKFLOW",
    index: "03",
    skills: ["Git & GitHub", "npm / Packages", "GitHub Pages", "VS Code"],
  },
  {
    category: "INTERESTS & FOCUS",
    index: "04",
    skills: ["Responsive Systems", "CSS Grid & Flexbox", "UI Architecture", "Accessibility (A11y)"],
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
