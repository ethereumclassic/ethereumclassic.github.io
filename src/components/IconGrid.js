import React from "react";

const IconGrid = ({ icons }) => {

  return (
    <div className="icon-grid">
      {icons.map(({ icon, text }) => (
        <div className="item" key={text}>
          <div className={`icon-item ${icon}`} />
          {text && <div className="text">{text}</div>}
        </div>
      ))}
    </div>
  )
};

export default IconGrid;
