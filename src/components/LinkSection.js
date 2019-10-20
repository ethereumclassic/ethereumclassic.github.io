import React from 'react';
import ButtonLink from './buttonLink';

const LinkSection = ({ link, children, title }) => {
  return (
    <div>
      {link && (
        <ButtonLink link={link} style={{ float: 'right', marginTop: '-0.5em' }}>
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
