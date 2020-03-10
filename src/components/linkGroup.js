import React from 'react';
import Link from './link';

const ButtonGroup = ({ items, header }) => {
  return (
    <div className="link-group">
      {header}
      {items.map(({ name, key, link, title, text }) => (
        <div key={key} className="link-item">
          <h4>
            <Link text={name || title} to={link} />
          </h4>
          {text && <p>{text}</p>}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
