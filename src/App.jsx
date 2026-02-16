import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load content:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="loader" />
        <style>{`
          .loader {
            width: 32px; height: 32px;
            border: 3px solid var(--border);
            border-top-color: var(--accent);
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  if (!content) return <div style={{padding:'2rem'}}>Error loading content. Check content.json</div>;

  return (
    <Router>
      <Navbar name={content.personal.name} />
      <main>
        <Hero personal={content.personal} />
        <Experience experience={content.experience} />
        <Projects projects={content.projects} />
        <OpenSource contributions={content.openSource} />
        <Skills skills={content.skills} />
        <Education education={content.education} />
        <ContactForm />
      </main>
      <Footer personal={content.personal} />
    </Router>
  );
}

export default App;
