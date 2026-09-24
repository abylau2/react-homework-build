export default function About({ developer }) {
  return (
    <section className="section-block" id="about" aria-label="About Me">
      <div className="section-grid-editorial">
        {/* Left Column: Index & Title */}
        <div className="section-col-header">
          <span className="section-kicker">01 / ABOUT ME</span>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Right Column: Narrative + Editorial Metadata */}
        <div className="section-col-content">
          <div className="editorial-lead-text">
            <p>{developer.aboutText}</p>
            <p className="editorial-secondary-text">{developer.aboutSubtext}</p>
          </div>

          <div className="facts-metadata-list" aria-label="Quick Facts">
            {developer.facts.map((fact) => (
              <div key={fact.label} className="fact-row">
                <span className="fact-label">{fact.label}</span>
                <span className="fact-line" aria-hidden="true" />
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
