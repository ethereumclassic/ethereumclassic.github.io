import React from 'react';

const SocialIcon = ({ link, icon, text }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer" className={`icon brands fa-${icon}`}>
        <span className="label">{text}</span>
      </a>
    </li>
  );
};

export default SocialIcon;
