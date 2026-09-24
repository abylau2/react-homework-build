import { useState } from "react";

// ============================================================================
// PROFILE & SPECIFICATION DATA
// ============================================================================
const PROFILE = {
  name: "Abylau",
  role: "Creative Developer & Interface Architect",
  location: "Planet Earth (Almaty, KZ)",
  github: "https://github.com/abylau2",
  githubHandle: "abylau2",
  coordinates: "43°14'N 76°53'E",
};

const SPECIFICATIONS = [
  { label: "Discipline", value: "Frontend Systems & React Architecture" },
  { label: "Core Methodology", value: "Declarative UI · Composable Primitives" },
  { label: "Design Language", value: "Swiss Modernism & Brutalist Precision" },
  { label: "Coordinates", value: PROFILE.location },
];

const LAB_EXPERIMENTS = [
  {
    id: "01",
    tag: "ARCHITECTURE",
    title: "Component Tree & Props Flow",
    description:
      "Interfaces are built like modular architecture. Every component has a dedicated responsibility, predictable inputs, and isolated local state.",
    spec: "Header → Hero → About → BlueprintLab → Dispatch → Footer",
    metric: "07 Decoupled Modules",
  },
  {
    id: "02",
    tag: "REACTIVITY",
    title: "State Primitives & React Hooks",
    description:
      "No over-engineering. State is maintained close to where it lives using declarative useState, guaranteeing zero unnecessary re-renders.",
    spec: "Predictable state hoisting · Immutable updates · Clean lifecycles",
    metric: "100% Declarative",
  },
  {
    id: "03",
    tag: "RESPONSIVENESS",
    title: "Fluid Layouts & Viewport Math",
    description:
      "Interfaces should adapt with architectural poise across micro-screens, tablets, and wide monitors without sacrificing character or rhythm.",
    spec: "CSS Grid · clamp() typography · Flexible columns · Sub-pixel crispness",
    metric: "Universal Viewports",
  },
];

// ============================================================================
// 1. COMPONENT: TOP NAVIGATION
// ============================================================================
function TopNavigation({ mode, onToggleMode }) {
  return (
    <header className="monolith-nav">
      <div className="nav-brand">
        <a href="#hero" className="brand-link">
          <span className="brand-glyph">■</span>
          <span className="brand-title">ABYLAU</span>
          <span className="brand-sub">/ ARCHIVE.02</span>
        </a>
      </div>

      <nav className="nav-menu" aria-label="System navigation">
        <a href="#about">01 // Foundations</a>
        <a href="#lab">02 // Blueprint</a>
        <a href="#dispatch">03 // Dispatch</a>
      </nav>

      <div className="nav-controls">
        {/* Theme mode toggle: Studio (paper) vs Blueprint (technical dark) */}
        <button
          type="button"
          className="btn-mode-toggle"
          onClick={onToggleMode}
          aria-label="Toggle technical blueprint mode"
        >
          <span className="mode-indicator" />
          <span>{mode === "studio" ? "Studio Mode" : "Blueprint Mode"}</span>
        </button>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="nav-btn-gh"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}

// ============================================================================
// 2. COMPONENT: HERO SECTION
// ============================================================================
function Hero({ onScrollTo }) {
  const [pulseCount, setPulseCount] = useState(16);

  return (
    <section className="hero-monolith" id="hero">
      <div className="hero-text-block">
        <div className="meta-strip">
          <span className="meta-tag">EDITION // 2026</span>
          <span className="meta-tag">LOCATION: {PROFILE.location}</span>
          <span className="meta-tag">SYS // REACT 19</span>
        </div>

        <h1 className="hero-giant-heading">
          <span>ABYLAU</span>
          <span className="hero-subhead">INTERFACE ARCHITECTURE</span>
        </h1>

        <p className="hero-statement">
          I design and engineer tactile, high-performance web systems. Rooted in
          Swiss graphic precision, declarative React components, and functional clarity.
        </p>

        <div className="hero-action-row">
          <button
            type="button"
            className="btn-monolith-primary"
            onClick={() => onScrollTo("lab")}
          >
            Inspect Blueprint →
          </button>
          <button
            type="button"
            className="btn-monolith-outline"
            onClick={() => setPulseCount((prev) => prev + 1)}
          >
            Interactive Pulse ({pulseCount})
          </button>
        </div>
      </div>

      <div className="hero-poster-frame">
        <div className="poster-top-bar">
          <span className="poster-badge">ARCHIVAL ARTIFACT</span>
          <span className="poster-id">№ A2-77</span>
        </div>
        <div className="poster-image-holder">
          <img
            src={`${import.meta.env.BASE_URL}abylau-portrait.svg`}
            alt="Swiss modernist silkscreen poster of developer Abylau"
            className="poster-graphic"
          />
        </div>
        <div className="poster-caption">
          <strong>ABYLAU.STUDIO</strong>
          <span>CERTIFIED FRONTEND CRAFT</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 3. COMPONENT: MANIFESTO MARQUEE
// ============================================================================
function ManifestoMarquee() {
  return (
    <div className="marquee-monolith" aria-label="Core Engineering Manifesto">
      <div className="marquee-inner">
        <span>PRECISION OVER PREDICTION</span>
        <span className="marquee-sep">■</span>
        <span>STRUCTURE BEFORE ORNAMENT</span>
        <span className="marquee-sep">■</span>
        <span>DECLARATIVE COMPONENT RIGOR</span>
        <span className="marquee-sep">■</span>
        <span>TACTILE PERFORMANCE</span>
        <span className="marquee-sep">■</span>
        <span>RESPECT FOR THE VIEWPORT</span>
      </div>
    </div>
  );
}

// ============================================================================
// 4. COMPONENT: ABOUT SECTION (FOUNDATIONS)
// ============================================================================
function About() {
  return (
    <section className="section-monolith" id="about">
      <div className="section-header-row">
        <span className="section-index-num">01</span>
        <div>
          <h2>Foundations &amp; Philosophy</h2>
          <p>The engineering principles guiding my interface development.</p>
        </div>
      </div>

      <div className="about-layout-grid">
        <div className="about-statement-card">
          <h3>Form Follows Functionality</h3>
          <p>
            Software interfaces shouldn't just look assembled — they should feel
            inevitable. When hierarchy is intentional and components are decoupled,
            complexity disappears into fluid utility.
          </p>
          <p>
            I focus on building resilient React applications: typed data boundaries,
            semantic HTML primitives, accessible interactions, and thoughtful styling
            that respects typography and physical contrast.
          </p>

          <div className="about-tags-row">
            <span className="pill-tag">Single-Page Architecture</span>
            <span className="pill-tag">Design Systems</span>
            <span className="pill-tag">Declarative State</span>
          </div>
        </div>

        <div className="about-specs-card">
          <div className="specs-table-head">
            <span>SYSTEM SPECIFICATION</span>
            <span>VALUE</span>
          </div>
          <dl className="specs-dl">
            {SPECIFICATIONS.map((spec, i) => (
              <div key={i} className="spec-row">
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. COMPONENT: BLUEPRINT LAB (KILLER INTERACTIVE FEATURE)
// ============================================================================
function BlueprintLab() {
  const [activeTab, setActiveTab] = useState(0);
  const currentExp = LAB_EXPERIMENTS[activeTab];

  return (
    <section className="section-monolith" id="lab">
      <div className="section-header-row">
        <span className="section-index-num">02</span>
        <div>
          <h2>Interface Blueprint &amp; Lab</h2>
          <p>Interactive diagnostics of component structure and state flow.</p>
        </div>
      </div>

      <div className="lab-workbench">
        {/* Tab Selection */}
        <div className="lab-nav-tabs" role="tablist">
          {LAB_EXPERIMENTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeTab === idx}
              className={`lab-tab-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="tab-num">{item.id}</span>
              <span className="tab-title">{item.tag}</span>
            </button>
          ))}
        </div>

        {/* Active Inspection Panel */}
        <article className="lab-display-card">
          <div className="display-card-topbar">
            <span>MODULE INSPECTOR // {currentExp.tag}</span>
            <span className="live-badge">STATUS: MOUNTED</span>
          </div>

          <div className="display-content-grid">
            <div className="display-left">
              <span className="huge-spec-num">{currentExp.id}</span>
              <span className="spec-metric-pill">{currentExp.metric}</span>
            </div>

            <div className="display-right">
              <h3>{currentExp.title}</h3>
              <p>{currentExp.description}</p>
              <div className="code-spec-box">
                <span className="code-label">ARCHITECTURE PROTOCOL:</span>
                <code>{currentExp.spec}</code>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// ============================================================================
// 6. COMPONENT: DISPATCH & CONTACT (BOARDING PASS TICKET)
// ============================================================================
function DispatchContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PROFILE.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section-monolith" id="dispatch">
      <div className="section-header-row">
        <span className="section-index-num">03</span>
        <div>
          <h2>Dispatch &amp; Transmission</h2>
          <p>Safe coordinates and public channels for code reviews and inquiries.</p>
        </div>
      </div>

      <div className="ticket-boarding-pass">
        <div className="ticket-main-body">
          <div className="ticket-header-strip">
            <span>DEVELOPER DISPATCH TICKET</span>
            <span className="ticket-class">CLASS: PUBLIC_ACCESS</span>
          </div>

          <div className="ticket-grid-data">
            <div className="ticket-cell">
              <span className="cell-label">PASSENGER NAME</span>
              <strong className="cell-val">{PROFILE.name}</strong>
            </div>

            <div className="ticket-cell">
              <span className="cell-label">TARGET DESTINATION</span>
              <strong className="cell-val">{PROFILE.location}</strong>
            </div>

            <div className="ticket-cell">
              <span className="cell-label">REPOSITORY ACCESS</span>
              <strong className="cell-val">github.com/{PROFILE.githubHandle}</strong>
            </div>

            <div className="ticket-cell">
              <span className="cell-label">PRIVACY PROTOCOL</span>
              <strong className="cell-val">Zero Sensitive Personal Data</strong>
            </div>
          </div>

          <p className="ticket-compliance-note">
            * In strict accordance with homework guidelines, phone numbers and
            private residential addresses are excluded. All coursework code is
            open source.
          </p>
        </div>

        {/* Perforated Stub Section */}
        <div className="ticket-perforated-stub">
          <div className="stub-notch notch-top" />
          <div className="stub-notch notch-bottom" />

          <div className="barcode-mockup" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="stub-actions">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ticket-primary"
            >
              Open GitHub Profile ↗
            </a>
            <button
              type="button"
              className="btn-ticket-secondary"
              onClick={handleCopyLink}
            >
              {copied ? "✓ Copied" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 7. COMPONENT: FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="monolith-footer">
      <div className="footer-left">
        <strong>ABYLAU.ARCHIVE</strong>
        <span>© {new Date().getFullYear()} — Built with React &amp; Vite</span>
      </div>

      <div className="footer-center">
        <span>SWISS PRECISION · BRUTALIST ARCHITECTURE</span>
      </div>

      <div className="footer-right">
        <a href="#hero" className="btn-back-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

// ============================================================================
// ROOT APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [mode, setMode] = useState("studio");

  const toggleMode = () => {
    setMode((prev) => (prev === "studio" ? "blueprint" : "studio"));
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="monolith-app" data-mode={mode}>
      <div className="monolith-frame">
        <TopNavigation mode={mode} onToggleMode={toggleMode} />
        <main>
          <Hero onScrollTo={scrollTo} />
          <ManifestoMarquee />
          <About />
          <BlueprintLab />
          <DispatchContact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
