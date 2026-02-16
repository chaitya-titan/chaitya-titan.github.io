import React from 'react';

const Section = ({ title, subtitle, children, id, className = '', alt = false }) => {
  return (
    <section id={id} className={`section ${alt ? 'section-alt' : ''} ${className}`}>
      <div className="container">
        {title && (
          <>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <div className="section-divider"></div>
          </>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
