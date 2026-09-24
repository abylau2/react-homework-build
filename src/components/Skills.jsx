export default function Skills({ categories }) {
  return (
    <section className="section-block" id="skills" aria-label="Skills & Capabilities">
      <div className="section-header-row">
        <span className="section-kicker">03 / SKILLS</span>
        <h2 className="section-title">Technical Foundation</h2>
        <span className="section-count" aria-hidden="true">[TOOLSET]</span>
      </div>

      <div className="skills-editorial-grid">
        {categories.map((group) => (
          <div key={group.category} className="skill-column">
            <div className="skill-col-header">
              <span className="skill-col-num">{group.index}</span>
              <h3 className="skill-col-title">{group.category}</h3>
            </div>
            <ul className="skill-items-list">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-bullet" aria-hidden="true">—</span>
                  <span className="skill-name">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
