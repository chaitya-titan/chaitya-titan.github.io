import React from 'react';
import { Code2, Layers, Database, Settings } from 'lucide-react';
import Section from './Section';

const categoryConfig = [
  { key: 'languages', label: 'Languages', icon: Code2, color: 'var(--accent)', colorSoft: 'var(--accent-soft)' },
  { key: 'frameworks', label: 'Frameworks', icon: Layers, color: 'var(--accent-2)', colorSoft: 'var(--accent-2-soft)' },
  { key: 'databases', label: 'Databases', icon: Database, color: 'var(--accent-3)', colorSoft: 'var(--accent-3-soft)' },
  { key: 'devops', label: 'DevOps & Tools', icon: Settings, color: 'var(--accent-4)', colorSoft: 'var(--accent-4-soft)' },
];

const Skills = ({ skills }) => {
  if (!skills) return null;

  const categories = categoryConfig
    .map(cfg => ({
      ...cfg,
      items: skills[cfg.key] || [],
    }))
    .filter(c => c.items.length > 0);

  return (
    <Section title="Skills" subtitle="Technologies I work with." id="skills" alt>
      <div className="skills-grid">
        {categories.map((cat, index) => {
          const IconComp = cat.icon;
          return (
            <div key={index} className="card skill-card" style={{ '--card-accent': cat.color, '--card-accent-soft': cat.colorSoft }}>
              <div className="skill-card-header">
                <div className="skill-icon-wrap">
                  <IconComp size={20} />
                </div>
                <div>
                  <h4 className="skill-card-title">{cat.label}</h4>
                  <span className="skill-card-count">{cat.items.length} technologies</span>
                </div>
              </div>
              <div className="skill-items">
                {cat.items.map((skill, i) => (
                  <span key={i} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .skill-card {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .skill-card::before {
          background: linear-gradient(90deg, var(--card-accent), transparent) !important;
        }
        .skill-card:hover {
          border-color: var(--border-hover);
        }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .skill-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--card-accent-soft);
          color: var(--card-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition);
        }
        .skill-card:hover .skill-icon-wrap {
          box-shadow: 0 0 16px var(--card-accent-soft);
        }
        .skill-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.1rem;
        }
        .skill-card-count {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .skill-chip {
          padding: 0.35rem 0.8rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          transition: all var(--transition);
        }
        .skill-chip:hover {
          border-color: var(--card-accent);
          color: var(--card-accent);
          background: var(--card-accent-soft);
        }
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default Skills;
