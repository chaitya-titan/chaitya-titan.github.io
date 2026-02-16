import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = ({ personal }) => {
  if (!personal) return null;

  const links = [
    { icon: <Github size={18} />, href: personal.github, label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: personal.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">{personal.name}</span>
          <span className="footer-dot">·</span>
          <span className="footer-copy">© {new Date().getFullYear()}</span>
        </div>
        <div className="footer-links">
          {links.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="footer-link">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .footer-section {
          border-top: 1px solid var(--border);
          padding: 1.75rem 0;
          margin-top: 1rem;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-name {
          font-weight: 600;
          font-size: 0.88rem;
        }
        .footer-dot {
          color: var(--text-muted);
        }
        .footer-copy {
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        .footer-links {
          display: flex;
          gap: 0.5rem;
        }
        .footer-link {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition);
        }
        .footer-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: var(--accent-soft);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
