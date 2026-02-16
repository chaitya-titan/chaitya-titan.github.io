import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="toggle-btn" aria-label="Toggle Theme">
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : ''}`}>
          {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
        </div>
      </div>
      <style>{`
        .toggle-btn {
          background: none;
          border: none;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .toggle-track {
          width: 52px;
          height: 28px;
          background: var(--border);
          border-radius: 100px;
          padding: 3px;
          cursor: pointer;
          transition: background var(--transition);
        }
        .toggle-track:hover {
          background: var(--border-hover);
        }
        .toggle-thumb {
          width: 22px;
          height: 22px;
          background: var(--bg-card);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--text-primary);
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
        .toggle-thumb.dark {
          transform: translateX(24px);
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
