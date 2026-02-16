import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">{name || 'Portfolio'}</a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact-form">Contact</a>
        </div>
        <ThemeToggle />
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all var(--transition);
        }
        .navbar.scrolled {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.03em;
          color: var(--text-primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition);
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
