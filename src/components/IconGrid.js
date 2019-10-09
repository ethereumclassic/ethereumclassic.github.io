import React from "react";

const IconGrid = ({ icons }) => {

  return (
    <div class="icon-grid">
      {icons.map(({ icon, text }) => (
        <div className="item">
          <div className={`icon-item ${icon}`} />
          {text && <div className="text">{text}</div>}
        </div>
      ))}
    </div>
  )
};

export default IconGrid;
