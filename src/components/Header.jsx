export default function Header({ links }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="header-brand" aria-label="Abylau Portfolio Home">
          <span className="brand-name">ABYLAU</span>
          <span className="brand-divider">/</span>
          <span className="brand-sub">PORTFOLIO</span>
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#about" className="nav-item">
            <span className="nav-index">01</span> About
          </a>
          <a href="#projects" className="nav-item">
            <span className="nav-index">02</span> Work
          </a>
          <a href="#skills" className="nav-item">
            <span className="nav-index">03</span> Skills
          </a>
          <a href="#contact" className="nav-item">
            <span className="nav-index">04</span> Contact
          </a>
        </nav>

        <div className="header-actions">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="header-ext-link"
            aria-label="GitHub Profile (opens in new tab)"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
