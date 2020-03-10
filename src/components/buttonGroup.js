import React from 'react';
import ButtonLink from './buttonLink';

const ButtonGroup = ({ title, items, header }) => {
  return (
    <div className="button-group">
      {header}
      {title && <h5>{title}</h5>}
      {items.map(({ link, text, name, key, alert }) => (
        <ButtonLink key={key} to={link} text={name || text} alert={alert} />
      ))}
    </div>
  );
};

export default ButtonGroup;
