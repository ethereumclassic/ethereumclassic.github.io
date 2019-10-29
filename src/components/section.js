import React from 'react';

const Section = ({ title, children, subSection }) => {
  return (
    <section>
      <header>
        {title && <h2>{title}</h2>}
        {subSection && subSection()}
      </header>
      <div className="content">{children}</div>
    </section>
  );
};

export default Section;
