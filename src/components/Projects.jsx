export default function Projects({ projects }) {
  return (
    <section className="section-block" id="projects" aria-label="Selected Projects">
      <div className="section-header-row">
        <span className="section-kicker">02 / WORK</span>
        <h2 className="section-title">Selected Projects</h2>
        <span className="section-count" aria-hidden="true">[0{projects.length}]</span>
      </div>

      <div className="projects-table" role="list">
        {projects.map((proj) => (
          <article
            key={proj.id}
            className="project-row"
            role="listitem"
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="project-row-link"
              aria-label={`${proj.title} repository / details (opens in new tab)`}
            >
              <div className="project-cell-index">
                <span className="project-id">{proj.id}</span>
              </div>

              <div className="project-cell-info">
                <div className="project-headline-group">
                  <h3 className="project-title">{proj.title}</h3>
                  <span className="project-category-tag">{proj.category}</span>
                </div>
                <p className="project-description">{proj.description}</p>
              </div>

              <div className="project-cell-tech">
                <div className="tech-tags-list">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-cell-year">
                <span className="project-year">{proj.year}</span>
              </div>

              <div className="project-cell-action">
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
