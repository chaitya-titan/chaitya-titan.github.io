import React from 'react';
import { GitPullRequest, ExternalLink } from 'lucide-react';
import Section from './Section';

const OpenSource = ({ contributions }) => {
  if (!contributions || contributions.length === 0) return null;

  return (
    <Section title="Open Source" subtitle="Projects I've contributed to." id="open-source" alt>
      <div className="oss-grid">
        {contributions.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card oss-card"
          >
            <div className="oss-top">
              <div className="oss-icon">
                <GitPullRequest size={18} />
              </div>
              <ExternalLink size={14} className="oss-external" />
            </div>
            <h4 className="oss-name">{item.project}</h4>
            <p className="oss-desc">{item.description}</p>
          </a>
        ))}
      </div>
      <style>{`
        .oss-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
        }
        .oss-card {
          cursor: pointer;
          text-decoration: none;
        }
        .oss-card::before {
          background: linear-gradient(90deg, var(--accent-2), var(--accent-3)) !important;
        }
        .oss-card:hover .oss-external {
          color: var(--accent-2);
          transform: translateY(-1px);
        }
        .oss-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .oss-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-2-soft);
          color: var(--accent-2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }
        .oss-card:hover .oss-icon {
          box-shadow: 0 0 16px var(--accent-2-soft);
        }
        .oss-external {
          color: var(--text-muted);
          transition: all var(--transition);
        }
        .oss-name {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        .oss-desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.6;
        }
      `}</style>
    </Section>
  );
};

export default OpenSource;
