import React from "react";

const WideSection = ({ title, children, className }) => {

  return (
    <div className={`wide-section ${className || ''}`}>
      {title &&
        <header>
          <h2>{title}</h2>
        </header>
      }
      <div className="content">
        {children}
      </div>
    </div>
  )
};

export default WideSection;
