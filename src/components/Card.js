import React from "react";

const Card = ({ title, children }) => {

  return (
    <div class="card">
      {title && <h4>{title}</h4>}
      <div class="content">
        {children}
      </div>
    </div>
  )
};

export default Card;
