import React from 'react';
import ButtonLink from './buttonLink';

const LinkGroup = ({ title, items }) => {
  return (
    <div className="link-group">
      {title && <h5>{title}</h5>}
      {items.map(({ link, text }) => (
        <ButtonLink to={link} key={link}>
          {/* {icon && } */}
          {text}
        </ButtonLink>
      ))}
    </div>
  );
};

export default LinkGroup;
