import React from 'react';

const SocialIcon = ({ to, icon, text }) => {
  return (
    <li>
      <a href={to} target="_blank" rel="noopener noreferrer" className={`icon brands fa-${icon}`}>
        <span className="label">{text}</span>
      </a>
    </li>
  );
};

export default SocialIcon;
