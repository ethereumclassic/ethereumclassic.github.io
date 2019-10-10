import React from "react";

const Card = ({ title, children, span, link, className }) => {
  const style = span ? { gridColumn: `span ${span}` } : {}
  const card = (
    <div className={`card ${className || ''}`} style={style}>
      {title && <h4>{title}</h4>}
      <div className="content">
        {children}
      </div>
    </div>
  )
  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{card}</a>;
  }
  return card;
};

export default Card;
