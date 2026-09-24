export default function Interests({ interests }) {
  return (
    <section className="section-block" id="interests" aria-label="Personal Interests">
      <div className="section-grid-editorial">
        {/* Left Column: Index & Title */}
        <div className="section-col-header">
          <span className="section-kicker">03 / INTERESTS</span>
          <h2 className="section-title">Personal Interests</h2>
          <p className="section-col-desc">
            Topics, disciplines, and activities outside of computing and security research.
          </p>
        </div>

        {/* Right Column: Editorial Rows */}
        <div className="section-col-content">
          <div className="interests-table" role="list">
            {interests.map((interest) => (
              <div key={interest.number} className="interest-row" role="listitem">
                <span className="interest-num">{interest.number}</span>
                <div className="interest-main">
                  <h3 className="interest-title">{interest.title}</h3>
                  <p className="interest-desc">{interest.description}</p>
                </div>
                <span className="interest-symbol" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
