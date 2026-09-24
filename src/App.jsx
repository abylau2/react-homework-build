import { useState } from "react";

// ============================================================================
// PROFILE & LAB DATA
// ============================================================================
const profile = {
  name: "Abylau2",
  github: "https://github.com/abylau2",
  location: "Planet Earth",
};

const labNotes = [
  {
    number: "01",
    label: "Component thinking",
    title: "Decompose the complex. Compose with clarity.",
    text: "I break user interfaces into small, decoupled React components that do one thing reliably, then assemble them into fluid, coherent experiences.",
    detail: "Header · Hero · Marquee · About · Lab · Contact · Footer",
  },
  {
    number: "02",
    label: "Responsive systems",
    title: "One concept, every viewport.",
    text: "Layouts shouldn't simply scale down until they fit — they need an intentional rhythm and character whether viewed on mobile, tablet, or desktop.",
    detail: "CSS Grid · clamp() · fluid typography · touch-first rhythm",
  },
  {
    number: "03",
    label: "Craft & semantics",
    title: "Restraint and precision over visual noise.",
    text: "Semantic HTML, high contrast, clean keyboard navigation, and purposeful motion make an application feel dependable, fast, and respectful to use.",
    detail: "Accessible tags · focus states · tactile contrast · zero fluff",
  },
];

// Reusable SVG arrow icon
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

// ============================================================================
// COMPONENT 1: HEADER
// ============================================================================
function Header({ theme, xray, onToggleTheme, onToggleXray }) {
  return (
    <header className="site-header" data-component="Header">
      <a className="wordmark" href="#top" aria-label="Abylau2 — back to top">
        AB<span>/02</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#lab">Lab notes</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        {/* React X-Ray Button: Highlights component boundaries */}
        <button
          className="xray-switch"
          type="button"
          aria-pressed={xray}
          onClick={onToggleXray}
        >
          <span aria-hidden="true">&lt;/&gt;</span>
          React X-Ray
        </button>

        {/* Paper / Ink Mode Toggle */}
        <button className="theme-switch" type="button" onClick={onToggleTheme}>
          <span className="theme-dot" aria-hidden="true" />
          {theme === "paper" ? "Ink mode" : "Paper mode"}
        </button>
      </div>
    </header>
  );
}

// ============================================================================
// COMPONENT 2: HERO
// ============================================================================
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title" data-component="Hero">
      <div className="hero-copy">
        <div className="hero-meta">
          <span>Self portrait in React</span>
          <span>Issue No. 02</span>
        </div>

        <p className="hero-kicker">Hello — my name is</p>
        <h1 id="hero-title" aria-label={profile.name}>
          <span>Abylau</span>
          <span className="outline-word">2</span>
        </h1>

        <div className="hero-bottom">
          <p>
            I am learning how good ideas become useful interfaces — one
            component, one experiment, one tiny improvement at a time.
          </p>
          <a className="arrow-link" href="#lab">
            Enter the lab <ArrowIcon />
          </a>
        </div>
      </div>

      <figure className="portrait-card">
        <div className="portrait-label portrait-label-top">Work in progress</div>
        <img
          src={`${import.meta.env.BASE_URL}abylau-editorial.svg`}
          alt="Editorial collage illustration of Abylau2 designing an interface at his desk"
        />
        <figcaption>
          <span>Current mode</span>
          <strong>Learn → make → refine</strong>
        </figcaption>
        <div className="portrait-stamp" aria-hidden="true">
          React
        </div>
      </figure>
    </section>
  );
}

// ============================================================================
// COMPONENT 3: MARQUEE (Design Manifesto)
// ============================================================================
function Marquee() {
  return (
    <div className="marquee" aria-label="Design principles" data-component="Marquee">
      <div>
        <span>Curiosity over perfection</span>
        <span className="marquee-cross" aria-hidden="true">+</span>
        <span>Clarity over clutter</span>
        <span className="marquee-cross" aria-hidden="true">+</span>
        <span>Progress over pretending</span>
        <span className="marquee-cross" aria-hidden="true">+</span>
        <span>Structure before style</span>
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENT 4: ABOUT ME
// ============================================================================
function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title" data-component="About">
      <div className="section-heading">
        <span className="section-index">01 / About</span>
        <h2 id="about-title">An engineer with an editorial eye.</h2>
      </div>

      <div className="about-body">
        <p className="about-lead">
          I like the moment when a rough idea finally clicks into place: the
          hierarchy makes sense, the interaction feels natural, and the code is
          clean, readable, and solid tomorrow.
        </p>
        <div className="about-columns">
          <p>
            Right now I am practicing React, reusable components, responsive
            layouts, and accessible HTML. I care deeply about visual character
            and typography, but I care just as much about structural integrity
            and making the application intuitive to navigate.
          </p>
          <dl>
            <div>
              <dt>Focus</dt>
              <dd>React interfaces</dd>
            </div>
            <div>
              <dt>Method</dt>
              <dd>Learn by building</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 5: LEARNING LAB (Interactive Tabbed Notes)
// ============================================================================
function LearningLab() {
  const [activeNote, setActiveNote] = useState(0);
  const note = labNotes[activeNote];

  return (
    <section className="lab" id="lab" aria-labelledby="lab-title" data-component="LearningLab">
      <div className="lab-sidebar">
        <span className="section-index">02 / Lab notes</span>
        <h2 id="lab-title">What I am training now.</h2>
        <p>Choose a note to open the current experiment.</p>
      </div>

      <div className="lab-workspace">
        <div className="lab-tabs" role="tablist" aria-label="Learning topics">
          {labNotes.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeNote === index}
              aria-controls="lab-panel"
              id={`lab-tab-${index}`}
              className={activeNote === index ? "active" : ""}
              onClick={() => setActiveNote(index)}
              key={item.number}
            >
              <span>{item.number}</span>
              {item.label}
            </button>
          ))}
        </div>

        <article
          className="lab-panel"
          id="lab-panel"
          role="tabpanel"
          aria-labelledby={`lab-tab-${activeNote}`}
        >
          <div className="panel-bar">
            <span>abylau2.lab</span>
            <span className="panel-status">active study</span>
          </div>
          <div className="panel-content" key={note.number}>
            <span className="giant-number" aria-hidden="true">
              {note.number}
            </span>
            <div>
              <p className="panel-label">{note.label}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <code>{note.detail}</code>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENT 6: CONTACT
// ============================================================================
function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title" data-component="Contact">
      <div className="contact-signal" aria-hidden="true">
        <span />
        Signal open
      </div>

      <div className="contact-copy">
        <span className="section-index">03 / Contact</span>
        <h2 id="contact-title">Let’s compare notes.</h2>
        <p>
          My learning projects live on GitHub. No phone number, no private
          address — just work I am happy to share.
        </p>
      </div>

      <a className="github-ticket" href={profile.github} target="_blank" rel="noreferrer">
        <span className="ticket-label">Public workspace</span>
        <strong>github.com/abylau2</strong>
        <span className="ticket-arrow">
          <ArrowIcon />
        </span>
      </a>
    </section>
  );
}

// ============================================================================
// COMPONENT 7: FOOTER
// ============================================================================
function Footer() {
  return (
    <footer data-component="Footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built from scratch with React</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

// ============================================================================
// ROOT APP COMPONENT
// ============================================================================
export default function App() {
  const [theme, setTheme] = useState("paper");
  const [xray, setXray] = useState(false);

  return (
    <div className="app" data-theme={theme} data-xray={xray} id="top">
      <div className="page-frame">
        <Header
          theme={theme}
          xray={xray}
          onToggleTheme={() => setTheme(theme === "paper" ? "ink" : "paper")}
          onToggleXray={() => setXray(!xray)}
        />
        <main>
          <Hero />
          <Marquee />
          <About />
          <LearningLab />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
