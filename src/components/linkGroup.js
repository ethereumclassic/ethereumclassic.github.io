import React from 'react';
import Link from './link';

import renderHtml from '../i18n/html';

const ButtonGroup = ({ items, header }) => {
  return (
    <div className="link-group">
      {header}
      {items.map(({ name, key, link, title, text, html }) => (
        <div key={key} className="link-item">
          <h3>
            <Link text={name || title} to={link} />
          </h3>
          {text && <p>{html ? renderHtml(text) : text}</p>}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
