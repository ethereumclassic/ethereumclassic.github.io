import React from 'react';
import ButtonLink from './buttonLink';

const LinkSection = ({ to, children, title }) => {
  return (
    <div className="link-section">
      {to && (
        <ButtonLink to={to}>
          Visit Website
          <i className="fas fa-angle-right" />
        </ButtonLink>
      )}
      <h3>{title}</h3>
      {children}
      <br />
    </div>
  );
};

export default LinkSection;
