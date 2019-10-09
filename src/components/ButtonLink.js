import React from "react";

const ButtonLink = ({ link, text }) => {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="button-link">
      {text}
    </a>
  )
};

export default ButtonLink;
