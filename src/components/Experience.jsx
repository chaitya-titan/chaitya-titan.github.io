import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import Section from './Section';

const Experience = ({ experience }) => {
  if (!experience) return null;

  return (
    <Section title="Experience" subtitle="Where I've worked and what I've built." id="experience" alt>
      <div className="exp-timeline">
        {experience.map((job, index) => (
          <div key={index} className="exp-item">
            <div className="exp-dot-line">
              <div className="exp-dot">
                <Briefcase size={14} />
              </div>
              {index < experience.length - 1 && <div className="exp-line" />}
            </div>
            <div className="card exp-card">
              <div className="exp-top">
                <div>
                  <h3 className="exp-company">{job.company}</h3>
                  <p className="exp-role">{job.role}</p>
                </div>
                <span className="exp-period">
                  <Calendar size={13} />
                  {job.period}
                </span>
              </div>
              {job.highlights && (
                <ul className="exp-highlights">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {job.description && !job.highlights && (
                <p className="exp-desc">{job.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .exp-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .exp-item {
          display: flex;
          gap: 1.5rem;
        }
        .exp-dot-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 1.85rem;
        }
        .exp-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent-soft);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid var(--accent);
        }
        .exp-line {
          width: 2px;
          flex: 1;
          background: var(--border);
        }
        .exp-card {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        .exp-company {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.15rem;
        }
        .exp-role {
          font-size: 0.95rem;
          color: var(--accent);
          font-weight: 600;
        }
        .exp-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          white-space: nowrap;
          font-weight: 500;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }
        .exp-highlights {
          list-style: none;
          padding: 0;
        }
        .exp-highlights li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.6rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .exp-highlights li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }
        .exp-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        @media (max-width: 600px) {
          .exp-dot-line {
            display: none;
          }
          .exp-top {
            flex-direction: column;
          }
        }
      `}</style>
    </Section>
  );
};

export default Experience;
