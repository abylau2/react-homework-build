import { useState } from "react";

// ============================================================================
// PROFILE & PROJECT DATA
// ============================================================================
const PROFILE = {
  name: "Abylau",
  title: "Frontend Developer & React Engineer",
  tagline: "Building responsive, high-performance interfaces with React.",
  bio: "I develop user interfaces with an emphasis on clarity, accessibility, and architectural discipline. Rather than writing monolithic code, I break layouts down into reusable, decoupled React components with predictable state and fluid responsiveness.",
  location: "Planet Earth (Almaty, KZ)",
  github: "https://github.com/abylau2",
  githubHandle: "abylau2",
  status: "Available for projects & collaboration",
};

const PROJECTS = [
  {
    id: 1,
    title: "Marketplace Price & Stock Engine",
    description:
      "Automated analytics tool for real-time marketplace price tracking, stock verification, and competitor price intelligence.",
    tags: ["React", "REST API", "Data Processing", "Vite"],
    link: "https://github.com/abylau2",
  },
  {
    id: 2,
    title: "Modular UI Component System",
    description:
      "A reusable frontend library implementing decoupled card layouts, accessible navigation patterns, and fluid CSS math.",
    tags: ["React", "JavaScript ESNext", "CSS Variables", "A11y"],
    link: "https://github.com/abylau2/react-homework-build",
  },
  {
    id: 3,
    title: "Developer Portfolio & Diagnostics SPA",
    description:
      "Single-page application featuring responsive layout architecture, theme transitions, and automated GitHub Pages deployment.",
    tags: ["React", "Vite", "gh-pages", "Responsive"],
    link: "https://github.com/abylau2/react-homework-build",
  },
];

const SKILL_GROUPS = [
  {
    category: "Frontend Core",
    skills: ["React 19", "JavaScript (ES6+)", "TypeScript", "HTML5 & Semantics", "CSS3 / Grid & Flexbox"],
  },
  {
    category: "Tools & Ecosystem",
    skills: ["Vite", "Git & GitHub", "REST APIs & JSON", "npm", "GitHub Pages"],
  },
  {
    category: "Engineering Focus",
    skills: ["Component Architecture", "Responsive Systems", "State Management", "Performance Optimization"],
  },
];

const HIGHLIGHTS = [
  {
    title: "Component-First Thinking",
    text: "Decomposing complex requirements into small, reusable, and predictable React primitives.",
  },
  {
    title: "Responsive Craft",
    text: "Building interfaces that adapt with character and rhythm across phones, tablets, and wide screens.",
  },
  {
    title: "Clean & Maintainable Code",
    text: "Writing semantic markup, clear props, and well-structured code that is easy to extend and maintain.",
  },
];

// ============================================================================
// 1. NAVBAR
// ============================================================================
function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-brand">
          <span className="brand-badge">A</span>
          <span className="brand-name">{PROFILE.name}</span>
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// 2. HERO SECTION
// ============================================================================
function Hero({ onScrollTo }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid">
        <div className="hero-intro">
          <div className="status-pill">
            <span className="status-indicator" />
            <span>{PROFILE.status}</span>
          </div>

          <h1 className="hero-headline">{PROFILE.tagline}</h1>

          <p className="hero-bio">{PROFILE.bio}</p>

          <div className="hero-ctas">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onScrollTo("projects")}
            >
              View Projects ↓
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onScrollTo("contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="avatar-frame">
            <img
              src={`${import.meta.env.BASE_URL}abylau-profile.svg`}
              alt={`Portrait of ${PROFILE.name}`}
              className="avatar-img"
            />
          </div>
          <div className="hero-card-meta">
            <strong>{PROFILE.name}</strong>
            <span>{PROFILE.title}</span>
            <span className="location-tag">📍 {PROFILE.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 3. ABOUT SECTION
// ============================================================================
function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <span className="section-subtitle">01 / Profile</span>
        <h2>About Me</h2>
        <p>A closer look at my engineering principles and development focus.</p>
      </div>

      <div className="about-grid">
        <div className="about-text-card">
          <h3>Engineering from First Principles</h3>
          <p>
            I am driven by the process of turning ideas into dependable, user-friendly digital tools.
            When building web applications, I focus on structural clarity: decoupling data logic from UI
            rendering, organizing components with clear props, and ensuring high visual quality.
          </p>
          <p>
            Whether implementing responsive layouts with CSS Grid, managing state with declarative React
            hooks, or validating API responses, I build with attention to precision, accessibility, and speed.
          </p>
        </div>

        <div className="highlights-list">
          {HIGHLIGHTS.map((item, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-num">0{index + 1}</span>
              <div className="highlight-content">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 4. PROJECTS SECTION
// ============================================================================
function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <span className="section-subtitle">02 / Work</span>
        <h2>Selected Projects</h2>
        <p>Practical software and interface experiments built with modern tools.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((proj) => (
          <article key={proj.id} className="project-card">
            <div className="project-header">
              <span className="project-num">Project / 0{proj.id}</span>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="project-ext-link"
              >
                Code ↗
              </a>
            </div>

            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>

            <div className="project-tags">
              {proj.tags.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// 5. SKILLS SECTION
// ============================================================================
function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <span className="section-subtitle">03 / Capabilities</span>
        <h2>Tech Stack &amp; Skills</h2>
        <p>Technologies, libraries, and workflows I work with.</p>
      </div>

      <div className="skills-container">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="skill-category-card">
            <h3 className="category-title">{group.category}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// 6. CONTACT SECTION (Safe & Privacy-Compliant)
// ============================================================================
function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section" id="contact">
      <div className="section-head">
        <span className="section-subtitle">04 / Connect</span>
        <h2>Contact Information</h2>
        <p>Safe coordinates and public channels for code review and inquiries.</p>
      </div>

      <div className="contact-card">
        <div className="contact-body">
          <h3>Let's Collaborate</h3>
          <p>
            All source code, repositories, and learning milestones are maintained openly on GitHub.
            In strict compliance with assignment guidelines, personal phone numbers and home addresses
            are deliberately omitted.
          </p>

          <div className="contact-meta-row">
            <div className="meta-box">
              <span className="meta-label">Location:</span>
              <strong className="meta-value">{PROFILE.location}</strong>
            </div>
            <div className="meta-box">
              <span className="meta-label">GitHub:</span>
              <strong className="meta-value">github.com/{PROFILE.githubHandle}</strong>
            </div>
          </div>
        </div>

        <div className="contact-buttons">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-block"
          >
            Open GitHub Profile ↗
          </a>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={handleCopy}
          >
            {copied ? "✓ Copied to Clipboard" : "Copy GitHub Link"}
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 7. FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span>© {new Date().getFullYear()} {PROFILE.name} · Built with React &amp; Vite</span>
        <a href="#hero" className="back-top-link">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

// ============================================================================
// ROOT COMPONENT
// ============================================================================
export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`app-shell theme-${theme}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero onScrollTo={scrollTo} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
