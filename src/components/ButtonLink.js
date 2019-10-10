import React from "react";

const ButtonLink = ({ link, text, children, className, ...props }) => {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`button-link ${className || ''}`} { ...props }>
      {text || children}
    </a>
  )
};

export default ButtonLink;
