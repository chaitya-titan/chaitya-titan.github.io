import React from 'react';
import { ArrowRight, MapPin, Github, Linkedin } from 'lucide-react';

const Hero = ({ personal }) => {
  if (!personal) return null;

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-badge">
          <MapPin size={14} />
          <span>{personal.location || 'Bangalore, India'}</span>
        </div>
        <h1 className="hero-name">{personal.name}</h1>
        <p className="hero-role">{personal.role}</p>
        {personal.tagline && <p className="hero-tagline">{personal.tagline}</p>}
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact-form" className="btn-outline">
            Get in Touch
          </a>
          {personal.github && (
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="GitHub">
              <Github size={18} />
            </a>
          )}
          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
      <style>{`
        .hero {
          padding-top: 9rem;
          padding-bottom: 5rem;
          border-bottom: 1px solid var(--border);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.8rem;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: var(--radius-pill);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .hero-name {
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 0.6rem;
        }
        .hero-role {
          font-size: 1.25rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-bottom: 0.6rem;
        }
        .hero-tagline {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 520px;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-social {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition);
        }
        .hero-social:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: var(--accent-soft);
        }
        @media (max-width: 600px) {
          .hero {
            padding-top: 7rem;
            padding-bottom: 3.5rem;
          }
          .hero-name {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Hero;
