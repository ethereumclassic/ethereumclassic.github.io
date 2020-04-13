import React from 'react';
import Link from './link';

import renderMarkdown from './renderMarkdown';

const ButtonGroup = ({ items, header }) => {
  return (
    <div className="link-group">
      {renderMarkdown(header)}
      {items.map(({ name, key, link, title, text }) => (
        <div key={key} className="link-item">
          <h3>
            <Link text={name || title} to={link} />
          </h3>
          {renderMarkdown(text, { unwrap: false })}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
