import { useState } from "react";

const profile = {
  name: "Nazerke",
  role: "Frontend learner & thoughtful interface maker",
  github: "https://github.com/abylau2",
};

const labNotes = [
  {
    number: "01",
    label: "Component thinking",
    title: "Build small. Compose boldly.",
    text: "I split interfaces into focused React components, then reconnect them into one clear experience.",
    detail: "Header · Hero · Lab · About · Contact",
  },
  {
    number: "02",
    label: "Responsive systems",
    title: "One idea, every screen.",
    text: "Layouts should keep their character on a laptop, tablet, or phone — not simply shrink until they fit.",
    detail: "Grid · clamp() · fluid spacing · mobile rhythm",
  },
  {
    number: "03",
    label: "Useful details",
    title: "Polish should explain, not distract.",
    text: "Visible focus, semantic HTML, restrained motion, and readable contrast make the design feel finished.",
    detail: "Keyboard · contrast · reduced motion · semantics",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Nazerke — back to top">
        NZ<span>/02</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#lab">Lab notes</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="theme-switch" type="button" onClick={onToggleTheme}>
        <span className="theme-dot" aria-hidden="true" />
        {theme === "paper" ? "Ink mode" : "Paper mode"}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-meta">
          <span>Self portrait in React</span>
          <span>Issue No. 02</span>
        </div>

        <p className="hero-kicker">Hello — my name is</p>
        <h1 id="hero-title" aria-label={profile.name}>
          <span>Nazer</span>
          <span className="outline-word">ke</span>
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
          src={`${import.meta.env.BASE_URL}nazerke-studio.svg`}
          alt="Editorial illustration of Nazerke designing an interface at her desk"
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

function Marquee() {
  return (
    <div className="marquee" aria-label="Design principles">
      <div>
        <span>Curiosity over perfection</span>
        <span className="marquee-cross" aria-hidden="true">+</span>
        <span>Clarity over clutter</span>
        <span className="marquee-cross" aria-hidden="true">+</span>
        <span>Progress over pretending</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="section-index">01 / About</span>
        <h2 id="about-title">A learner with an editor’s eye.</h2>
      </div>

      <div className="about-body">
        <p className="about-lead">
          I like the moment when a rough idea finally clicks into place: the
          hierarchy makes sense, the interaction feels natural, and the code is
          still readable tomorrow.
        </p>
        <div className="about-columns">
          <p>
            Right now I am practicing React, reusable components, responsive
            layouts, and accessible HTML. I care about visual character, but I
            care just as much about making the page easy to understand.
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
              <dd>Planet Earth</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function LearningLab() {
  const [activeNote, setActiveNote] = useState(0);
  const note = labNotes[activeNote];

  return (
    <section className="lab" id="lab" aria-labelledby="lab-title">
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
            <span>nazerke.lab</span>
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

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
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

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Nazerke</span>
      <span>Built from scratch with React</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState("paper");

  return (
    <div className="app" data-theme={theme} id="top">
      <div className="page-frame">
        <Header
          theme={theme}
          onToggleTheme={() => setTheme(theme === "paper" ? "ink" : "paper")}
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
