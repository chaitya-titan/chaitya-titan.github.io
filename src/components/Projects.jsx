import React from 'react';
import { Github } from 'lucide-react';
import Section from './Section';

const Projects = ({ projects }) => {
  if (!projects) return null;

  return (
    <Section title="Projects" id="projects">
      <div className="proj-grid">
        {projects.map((project, index) => (
          <div key={index} className={`card proj-card ${project.type === 'Company' ? 'proj-featured' : ''}`}>
            <div className="proj-header">
              <div className="proj-meta-top">
                <span className="proj-number">0{index + 1}</span>
                <span className={`proj-type-badge ${project.type?.toLowerCase()}`}>
                  {project.type}
                </span>
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-github-link" aria-label="View on GitHub">
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-desc">{project.description}</p>
            {project.tech && (
              <div className="proj-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .proj-card {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .proj-featured::before {
          background: linear-gradient(90deg, var(--accent), var(--accent-2)) !important;
          opacity: 1 !important;
        }
        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.85rem;
        }
        .proj-meta-top {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .proj-number {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent);
          font-family: 'SF Mono', 'Fira Code', monospace;
          letter-spacing: 0.05em;
          line-height: 1;
        }
        .proj-type-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          width: fit-content;
        }
        .proj-type-badge.personal {
          background: var(--accent-soft);
          color: var(--accent);
        }
        .proj-type-badge.company {
          background: var(--accent-2-soft);
          color: var(--accent-2);
        }
        .proj-github-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          color: var(--text-muted);
          background: transparent;
          border: 1px solid var(--border);
          font-size: 0.72rem;
          font-weight: 600;
          transition: all var(--transition);
        }
        .proj-github-link:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background: var(--bg-secondary);
          transform: translateY(-1px);
        }
        .proj-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .proj-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.25rem;
        }
        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
      `}</style>
    </Section>
  );
};

export default Projects;
