import React from "react";

const Section = ({ title, children }) => {

  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      <div className="content">
        {children}
      </div>
    </section>
  )
};

export default Section;
