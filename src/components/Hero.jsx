import avatar from "../assets/avatar.jpg";

export default function Hero({ developer, links }) {
  return (
    <section className="hero-section" id="hero" aria-label="Introduction & Character Dossier">
      {/* Top Technical Metadata Bar */}
      <div className="hero-meta-row">
        <span className="hero-meta-item">{developer.profileId}</span>
        <span className="hero-meta-divider">—</span>
        <span className="hero-meta-item">{developer.location}</span>
        <span className="hero-meta-divider">—</span>
        <span className="hero-meta-item hero-meta-coord">{developer.coordinates}</span>
        <span className="hero-meta-divider hero-meta-coord-divider">—</span>
        <span className="hero-meta-item hero-meta-year">{developer.year}</span>
      </div>

      {/* Prominent Typographic Name Block */}
      <div className="hero-name-block">
        <h1 className="hero-name">{developer.name}</h1>
        <p className="hero-subline">{developer.roleTag}</p>
      </div>

      {/* Asymmetric Editorial & Dossier Composition */}
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-intro-text">{developer.heroDescription}</p>

          <div className="hero-status-strip">
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span className="status-label">STATUS</span>
              <span className="status-sep">/</span>
              <span className="status-val">{developer.status}</span>
            </div>
            <div className="hero-tag-pill">
              <span className="tag-label">AIM</span>
              <span className="status-sep">/</span>
              <span className="tag-val">SOC ANALYST</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#about" className="editorial-link">
              Read Background <span className="arrow">↓</span>
            </a>
            <a href="#focus" className="editorial-link">
              Explore Focus Areas <span className="arrow">↓</span>
            </a>
            <a href="#contact" className="editorial-link">
              Get in Touch <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Character Profile / Dossier Card */}
        <aside className="dossier-card" aria-label="Identity Card">
          <div className="dossier-header">
            <div className="dossier-code">
              <span className="dossier-dot" aria-hidden="true" />
              <span>DOSSIER // ABY-01</span>
            </div>
            <span className="dossier-class">{developer.classTag}</span>
          </div>

          <div className="dossier-image-container">
            <img
              src={avatar}
              alt="Abylau profile"
              className="hero-avatar"
              loading="eager"
            />
            <div className="dossier-overlay-badge">
              <span className="badge-corner top-left" aria-hidden="true" />
              <span className="badge-corner top-right" aria-hidden="true" />
              <span className="badge-corner bottom-left" aria-hidden="true" />
              <span className="badge-corner bottom-right" aria-hidden="true" />
              <span className="badge-text">ID: 01-ALM</span>
            </div>
          </div>

          <div className="dossier-meta-footer">
            <div className="dossier-field-row">
              <span className="dossier-key">OPERATOR</span>
              <span className="dossier-val">{developer.name}</span>
            </div>
            <div className="dossier-field-row">
              <span className="dossier-key">ROLE</span>
              <span className="dossier-val">{developer.focus}</span>
            </div>
            <div className="dossier-field-row">
              <span className="dossier-key">LOADOUT</span>
              <span className="dossier-val">SOC · LINUX · REACT</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
