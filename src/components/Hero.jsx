export default function Hero({ developer, links }) {
  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      {/* Top Technical Metadata Bar */}
      <div className="hero-meta-row">
        <span className="hero-meta-item">{developer.title}</span>
        <span className="hero-meta-divider">—</span>
        <span className="hero-meta-item">{developer.location}</span>
        <span className="hero-meta-divider">—</span>
        <span className="hero-meta-item hero-meta-coord">{developer.coordinates}</span>
        <span className="hero-meta-divider hero-meta-coord-divider">—</span>
        <span className="hero-meta-item hero-meta-year">{developer.year}</span>
      </div>

      {/* Prominent Typographic Name */}
      <div className="hero-name-block">
        <h1 className="hero-name">{developer.name}</h1>
        <p className="hero-subline">{developer.subline}</p>
      </div>

      {/* Asymmetric Editorial Composition */}
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-intro-text">{developer.heroIntro}</p>

          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            <span className="status-label">STATUS</span>
            <span className="status-separator">/</span>
            <span className="status-value">{developer.status}</span>
          </div>

          <div className="hero-links">
            <a href="#projects" className="editorial-link">
              View selected work <span className="arrow">↓</span>
            </a>
            <a href="#contact" className="editorial-link">
              Get in touch <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-figure">
          <div className="figure-frame">
            <img
              src={`${import.meta.env.BASE_URL}abylau-portrait.svg`}
              alt="Swiss graphic portrait of Abylau with technical composition"
              className="figure-image"
              loading="eager"
            />
          </div>
          <figcaption className="figure-caption">
            <span className="figure-tag">FIG. 01</span>
            <span className="figure-caption-text">
              Abylau — Security &amp; Frontend / Almaty, KZ
            </span>
          </figcaption>
        </aside>
      </div>
    </section>
  );
}
