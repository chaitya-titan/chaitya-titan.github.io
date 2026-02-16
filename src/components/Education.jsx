import React from 'react';
import { GraduationCap } from 'lucide-react';
import Section from './Section';

const Education = ({ education }) => {
  if (!education) return null;

  return (
    <Section title="Education" id="education" alt>
      <div className="edu-list">
        {education.map((edu, index) => (
          <div key={index} className="card edu-card">
            <div className="edu-icon">
              <GraduationCap size={20} />
            </div>
            <div className="edu-content">
              <h3 className="edu-inst">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <div className="edu-meta">
                <span className="tag">{edu.score}</span>
                <span className="edu-year">{edu.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .edu-card {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .edu-card::before {
          background: linear-gradient(90deg, var(--accent-3), var(--accent-4)) !important;
        }
        .edu-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--accent-3-soft);
          color: var(--accent-3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }
        .edu-card:hover .edu-icon {
          box-shadow: 0 0 16px var(--accent-3-soft);
        }
        .edu-content {
          flex: 1;
        }
        .edu-inst {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .edu-degree {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }
        .edu-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .edu-year {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}</style>
    </Section>
  );
};

export default Education;
