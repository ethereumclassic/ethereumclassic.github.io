import React from "react";

const Hamburger = ({ children }) => {
  return (
    <nav id="page-nav">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      <div className="buttons" onClick={() => console.log('clicked')}>
        {children}
      </div>
    </nav>
  );
};

export default Hamburger;
