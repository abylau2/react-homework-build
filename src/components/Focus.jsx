export default function Focus({ focusAreas, techStack }) {
  return (
    <section className="section-block" id="focus" aria-label="Learning Focus & Technical Stack">
      <div className="section-grid-editorial">
        {/* Left Column: Index & Title */}
        <div className="section-col-header">
          <span className="section-kicker">02 / FOCUS</span>
          <h2 className="section-title">What I’m Learning</h2>
          <p className="section-col-desc">
            Foundations in defensive security, incident response workflows, and full-stack interfaces.
          </p>
        </div>

        {/* Right Column: Focus List & Technical Categories */}
        <div className="section-col-content">
          <div className="focus-areas-list" role="list">
            {focusAreas.map((area) => (
              <div key={area.id} className="focus-area-row" role="listitem">
                <div className="focus-area-index">{area.id}</div>
                <div className="focus-area-body">
                  <h3 className="focus-area-title">{area.title}</h3>
                  <p className="focus-area-desc">{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-stack-overview">
            <h4 className="tech-stack-heading">TECHNICAL STACK &amp; FOUNDATIONS</h4>
            <div className="tech-categories-grid">
              {techStack.map((group) => (
                <div key={group.category} className="tech-group-block">
                  <span className="tech-group-name">{group.category}</span>
                  <ul className="tech-group-list">
                    {group.skills.map((skill) => (
                      <li key={skill} className="tech-group-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
