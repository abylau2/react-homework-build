export default function Header({ links }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="header-brand" aria-label="Abylau Profile Home">
          <span className="brand-name">ABYLAU</span>
          <span className="brand-divider">//</span>
          <span className="brand-sub">2026</span>
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#about" className="nav-item">
            <span className="nav-index">01</span> ABOUT
          </a>
          <a href="#focus" className="nav-item">
            <span className="nav-index">02</span> FOCUS
          </a>
          <a href="#interests" className="nav-item">
            <span className="nav-index">03</span> INTERESTS
          </a>
          <a href="#contact" className="nav-item">
            <span className="nav-index">04</span> CONTACT
          </a>
        </nav>

        <div className="header-actions">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="header-link"
            aria-label="GitHub Profile (opens in new tab)"
          >
            GITHUB ↗
          </a>
        </div>
      </div>
    </header>
  );
}
