import { useState, useEffect, useRef } from "react";

const PROFILE = {
  name: "Abylau",
  tagline: "Frontend Engineer & React Crafter",
  location: "Planet Earth (Almaty, KZ)",
  github: "https://github.com/abylau2",
  githubHandle: "abylau2",
  status: "Building reactive systems",
};

const SKILLS = [
  { name: "React 19", level: "Advanced", category: "frontend", icon: "⚛️" },
  { name: "JavaScript ESNext", level: "Strong", category: "frontend", icon: "⚡" },
  { name: "TypeScript", level: "Intermediate", category: "frontend", icon: "📘" },
  { name: "HTML5 & Semantic UI", level: "Mastery", category: "frontend", icon: "🌐" },
  { name: "Modern CSS / Bento UI", level: "Advanced", category: "frontend", icon: "🎨" },
  { name: "Vite & Tooling", level: "Proficient", category: "tools", icon: "⚡" },
  { name: "Git & GitHub CI", level: "Daily Driver", category: "tools", icon: "🐙" },
  { name: "REST APIs & JSON", level: "Advanced", category: "core", icon: "🔌" },
  { name: "Performance & A11y", level: "High Focus", category: "core", icon: "🚀" },
];

const PROJECTS = [
  {
    id: "01",
    title: "Marketplace Data & Price Engine",
    desc: "Automated analysis tool for real-time price monitoring, competitor tracking, and supply validation.",
    tags: ["React", "Python", "REST API", "Data Viz"],
    highlight: "Real-world utility",
    link: "https://github.com/abylau2",
  },
  {
    id: "02",
    title: "Interactive Bento Dev Studio",
    desc: "A modular, responsive developer showcase with built-in interactive terminal and live diagnostics.",
    tags: ["React", "Vite", "CSS Grid", "State Hooks"],
    highlight: "Component architecture",
    link: "https://github.com/abylau2/react-homework-build",
  },
  {
    id: "03",
    title: "Cyber CLI Command Center",
    desc: "Terminal emulation component inside web apps with command parsing, history, and theme switches.",
    tags: ["React Hooks", "CLI Simulation", "A11y"],
    highlight: "Micro-interactions",
    link: "https://github.com/abylau2",
  },
];

const CODE_TABS = {
  profile: {
    filename: "engineer.ts",
    code: `interface Developer {
  name: string;
  role: string;
  location: string;
  mindset: string[];
}

export const abylau: Developer = {
  name: "Abylau",
  role: "Frontend Engineer",
  location: "Planet Earth 🌍 (Almaty, KZ)",
  mindset: [
    "Components should do one job flawlessly",
    "Clean code over clever obfuscation",
    "Micro-interactions turn products into joy"
  ]
};`,
  },
  philosophy: {
    filename: "principles.md",
    code: `# Engineering Philosophy

1. **Pixel & Code Harmony**
   Great interfaces feel inevitable. Layout, contrast,
   and spacing are not decorations — they communicate structure.

2. **React Component Thinking**
   Treat components as composable lego bricks. Keep state
   local where possible, hoist only when necessary.

3. **Privacy First**
   Zero sensitive personal data exposed. Transparent public GitHub code.`,
  },
  stack: {
    filename: "stack.json",
    code: `{
  "core": ["React 19", "JavaScript (ES2024)", "Vite"],
  "styling": ["CSS Grid / Flexbox", "CSS Custom Properties", "Glassmorphism"],
  "workflow": ["Git", "GitHub Pages", "Automated Builds"],
  "focus": "High performance & responsive craft"
}`,
  },
};

function Navbar({ activeTheme, onThemeChange, onScrollTo }) {
  return (
    <header className="site-header">
      <div className="brand" onClick={() => onScrollTo("hero")}>
        <span className="brand-bracket">[</span>
        <span className="brand-name">A2</span>
        <span className="brand-bracket">]</span>
        <span className="brand-dot" />
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        <button type="button" onClick={() => onScrollTo("about")}>About</button>
        <button type="button" onClick={() => onScrollTo("terminal")}>Terminal</button>
        <button type="button" onClick={() => onScrollTo("skills")}>Stack</button>
        <button type="button" onClick={() => onScrollTo("projects")}>Projects</button>
        <button type="button" onClick={() => onScrollTo("contact")}>Contact</button>
      </nav>

      <div className="nav-actions">
        <div className="theme-pills" role="radiogroup" aria-label="Accent color theme">
          <button
            type="button"
            className={`pill-cyan ${activeTheme === "cyan" ? "active" : ""}`}
            onClick={() => onThemeChange("cyan")}
            title="Cyber Cyan Theme"
            aria-label="Cyan theme"
          />
          <button
            type="button"
            className={`pill-violet ${activeTheme === "violet" ? "active" : ""}`}
            onClick={() => onThemeChange("violet")}
            title="Electric Violet Theme"
            aria-label="Violet theme"
          />
          <button
            type="button"
            className={`pill-emerald ${activeTheme === "emerald" ? "active" : ""}`}
            onClick={() => onThemeChange("emerald")}
            title="Matrix Emerald Theme"
            aria-label="Emerald theme"
          />
        </div>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="btn-github-nav"
        >
          <span>GitHub</span>
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function HeroBento({ onScrollTo }) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Almaty",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bento-hero" id="hero">
      {/* Primary Card: Developer Title */}
      <div className="card bento-card-main">
        <div className="status-badge">
          <span className="pulse-dot" />
          <span>Available for Frontend & React Projects</span>
        </div>

        <h1 className="hero-heading">
          Engineering intuitive interfaces with{" "}
          <span className="gradient-text">React &amp; Modern Web Craft.</span>
        </h1>

        <p className="hero-subtext">
          Hi, I am <strong>{PROFILE.name}</strong>. I transform ideas into high-performance,
          responsive single-page applications with clean component architecture and
          delightful micro-interactions.
        </p>

        <div className="hero-cta-group">
          <button
            type="button"
            className="btn-primary"
            onClick={() => onScrollTo("terminal")}
          >
            <span className="btn-icon">&gt;_</span>
            Launch Terminal
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onScrollTo("about")}
          >
            Explore Profile
          </button>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Visual Avatar Card */}
      <div className="card bento-card-avatar">
        <div className="avatar-header">
          <span className="badge-tag">Developer ID</span>
          <span className="id-number">#A2-2026</span>
        </div>
        <div className="avatar-frame">
          <img
            src={`${import.meta.env.BASE_URL}abylau-avatar.svg`}
            alt="Futuristic illustrated avatar of Abylau"
            className="avatar-img"
          />
        </div>
        <div className="avatar-caption">
          <strong>{PROFILE.name}</strong>
          <span>{PROFILE.tagline}</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="mini-container">
        <div className="card bento-card-mini">
          <span className="mini-label">Almaty, KZ (GMT+5)</span>
          <div className="mini-metric mono-font">{timeString || "12:00:00"}</div>
          <p className="mini-subtext">Local system clock in sync</p>
        </div>

        <div className="card bento-card-mini">
          <span className="mini-label">React Architecture</span>
          <div className="mini-metric gradient-text">8+ Modules</div>
          <p className="mini-subtext">Modular, decoupled & typed</p>
        </div>

        <div className="card bento-card-mini">
          <span className="mini-label">Privacy Guarantee</span>
          <div className="mini-metric text-emerald">Verified Safe</div>
          <p className="mini-subtext">No sensitive data · Planet Earth</p>
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to AbylauOS Dev Terminal v2.4" },
    { type: "system", text: "Type 'help' or click quick commands below to explore." },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isMatrix, setIsMatrix] = useState(false);
  const terminalEndRef = useRef(null);

  const executeCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const parts = raw.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    const newEntries = [{ type: "command", text: `$ ${raw}` }];

    switch (cmd) {
      case "help":
        newEntries.push({
          type: "output",
          text: `Available commands:
  • about       - Read Abylau's bio & development background
  • skills      - Display technical proficiency matrix
  • projects    - View selected builds & GitHub links
  • contact     - Show safe contact channels & GitHub
  • matrix      - Toggle matrix cyber mode
  • sudo hire   - Run superuser hiring protocol ⚡
  • clear       - Wipe terminal screen output`,
        });
        break;
      case "about":
        newEntries.push({
          type: "output",
          text: `[ABYLAU / FRONTEND ENGINEER]
Focus: React ecosystem, responsive design systems, clean code.
Current status: Building reactive web apps & learning in public.
Location: Planet Earth 🌍 (Almaty, KZ).
Privacy: Safe profile for coursework review.`,
        });
        break;
      case "skills":
        newEntries.push({
          type: "output",
          text: `CORE SKILLS:
[✓] React 19 (Hooks, Context, State, Fast Refresh)
[✓] JavaScript ESNext (Async/Await, Arrays, DOM)
[✓] Modern CSS (Grid, Flex, Variables, Responsive)
[✓] Vite & Build Pipeline (Zero-config, fast HMR)
[✓] Git & GitHub Pages Automation`,
        });
        break;
      case "projects":
        newEntries.push({
          type: "output",
          text: `FEATURED PROJECTS:
1. Kaspi Data & Price Intelligence Tool (Automated checks)
2. Interactive Bento Studio (This React SPA)
3. Cyber Terminal Simulation Module
Repository: https://github.com/abylau2`,
        });
        break;
      case "contact":
        newEntries.push({
          type: "output",
          text: `CONTACT & LINKS:
GitHub:   https://github.com/abylau2
Handle:   @abylau2
Status:   Open for collaboration & code reviews
Location: Planet Earth 🌍`,
        });
        break;
      case "matrix":
        setIsMatrix((prev) => !prev);
        newEntries.push({
          type: "output",
          text: `[CYBER MATRIX] Mode toggled. Welcome to the construct.`,
        });
        break;
      case "sudo":
        if (arg.toLowerCase() === "hire") {
          newEntries.push({
            type: "success",
            text: `[ROOT ACCESS GRANTED] 🚀
Congratulations! You've unlocked top-tier React craftsmanship.
Status: Offer accepted. Let's build extraordinary software together!`,
          });
        } else {
          newEntries.push({
            type: "error",
            text: `sudo: unknown privilege request '${arg}'. Try: sudo hire`,
          });
        }
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        newEntries.push({
          type: "error",
          text: `Command not found: '${cmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section className={`terminal-section ${isMatrix ? "matrix-active" : ""}`} id="terminal">
      <div className="section-head">
        <span className="section-tag">Interactive Feature</span>
        <h2>Terminal Command Center</h2>
        <p>A simulated developer environment built right inside React.</p>
      </div>

      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="traffic-lights">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title">abylau@studio: ~/interactive-shell</span>
          <div className="terminal-status-chip">bash · active</div>
        </div>

        <div className="terminal-body">
          {history.map((item, idx) => (
            <div key={idx} className={`term-line term-${item.type}`}>
              <pre>{item.text}</pre>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        <div className="terminal-prompt-bar">
          <span className="prompt-symbol">abylau&gt;</span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'about', 'sudo hire'..."
            aria-label="Terminal command input"
          />
          <button
            type="button"
            className="btn-send-cmd"
            onClick={() => executeCommand(inputVal)}
          >
            Run ↵
          </button>
        </div>

        <div className="terminal-shortcuts">
          <span className="shortcuts-label">Quick Actions:</span>
          {["help", "about", "skills", "projects", "contact", "sudo hire", "matrix", "clear"].map(
            (shortcut) => (
              <button
                key={shortcut}
                type="button"
                className="chip-shortcut"
                onClick={() => executeCommand(shortcut)}
              >
                {shortcut}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function AboutBento() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="about-section" id="about">
      <div className="section-head">
        <span className="section-tag">01 / Profile</span>
        <h2>About The Developer</h2>
        <p>A closer look into engineering philosophy, code habits, and craft.</p>
      </div>

      <div className="about-grid">
        <div className="about-narrative card">
          <h3>Focused on Clarity &amp; Craft</h3>
          <p>
            I am a developer driven by the magic of turning abstract concepts into
            fast, intuitive, and responsive user experiences. When building interfaces,
            I place high value on structural semantics, readable code, and reliable state
            management.
          </p>
          <p>
            Whether it’s architecting React components with clean props, parsing API datasets,
            or fine-tuning CSS layouts for micro-screens, I build with care and curiosity.
          </p>

          <div className="highlight-pill-row">
            <span className="h-pill">⚡ Fast Learner</span>
            <span className="h-pill">📐 Component Thinker</span>
            <span className="h-pill">🛡️ Privacy Conscious</span>
            <span className="h-pill">🌍 Planet Earth Citizen</span>
          </div>
        </div>

        <div className="about-code-card card">
          <div className="code-tabs">
            {Object.keys(CODE_TABS).map((tabKey) => (
              <button
                key={tabKey}
                type="button"
                className={`code-tab ${activeTab === tabKey ? "active" : ""}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {CODE_TABS[tabKey].filename}
              </button>
            ))}
          </div>
          <div className="code-content">
            <pre>
              <code>{CODE_TABS[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="section-head">
        <span className="section-tag">02 / Tech Stack</span>
        <h2>Skills &amp; Capabilities</h2>
        <p>Tools and technologies mastered through practice and real-world experiments.</p>
      </div>

      <div className="category-filter">
        {["all", "frontend", "tools", "core"].map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="skill-card card">
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-info">
              <h4>{skill.name}</h4>
              <span className="skill-level">{skill.level}</span>
            </div>
            <span className="skill-cat-tag">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectGrid() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-head">
        <span className="section-tag">03 / Projects</span>
        <h2>Featured Work &amp; Experiments</h2>
        <p>Selected applications and repositories demonstrating practical engineering skills.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((proj) => (
          <article key={proj.id} className="project-card card">
            <div className="project-top">
              <span className="project-num">{proj.id}</span>
              <span className="project-highlight">{proj.highlight}</span>
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="project-tags">
              {proj.tags.map((t) => (
                <span key={t} className="proj-tag">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repository ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-head">
        <span className="section-tag">04 / Connect</span>
        <h2>Let's Connect</h2>
        <p>Open for questions, feedback, and technical discussions.</p>
      </div>

      <div className="contact-bento card">
        <div className="contact-meta">
          <div className="signal-online">
            <span className="beacon" />
            <span>Connection open</span>
          </div>
          <h3>Public Developer Profile</h3>
          <p>
            All projects, code samples, and experiments are hosted openly on GitHub.
            In compliance with assignment privacy standards, private phone numbers
            and home addresses are strictly omitted.
          </p>

          <div className="contact-details-list">
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-val">{PROFILE.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Platform:</span>
              <span className="detail-val">GitHub Public Workspace</span>
            </div>
          </div>
        </div>

        <div className="contact-action-box">
          <div className="github-highlight-card">
            <div className="gh-icon">🐙</div>
            <div className="gh-meta">
              <strong>github.com/{PROFILE.githubHandle}</strong>
              <span>Public Repositories &amp; Source Code</span>
            </div>
          </div>

          <div className="contact-buttons-row">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-full"
            >
              Visit GitHub Profile ↗
            </a>
            <button
              type="button"
              className="btn-secondary btn-full"
              onClick={handleCopy}
            >
              {copied ? "✓ Copied to Clipboard!" : "Copy GitHub Link"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onScrollTo }) {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="brand-name">[A2] Abylau</span>
          <p>© {new Date().getFullYear()} — Built with React &amp; Vite</p>
        </div>
        <div className="footer-center">
          <span>Self-Promotional SPA · Course Submission</span>
        </div>
        <div className="footer-right">
          <button
            type="button"
            className="btn-back-to-top"
            onClick={() => onScrollTo("hero")}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeTheme, setActiveTheme] = useState("cyan");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`app-root theme-${activeTheme}`}>
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />

      <div className="container">
        <Navbar
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
          onScrollTo={scrollTo}
        />
        <main>
          <HeroBento onScrollTo={scrollTo} />
          <Terminal />
          <AboutBento />
          <TechMatrix />
          <ProjectGrid />
          <ContactCard />
        </main>
        <Footer onScrollTo={scrollTo} />
      </div>
    </div>
  );
}
