import React from 'react';

const Section = ({ title, children, subSection, className }) => {
  return (
    <section className={className}>
      <header>
        {title && <h2>{title}</h2>}
        {subSection && subSection()}
      </header>
      <div className="content">{children}</div>
    </section>
  );
};

export default Section;
