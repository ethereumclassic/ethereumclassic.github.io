import React from 'react';
import ButtonLink from './buttonLink';
import renderMarkdown from './renderMarkdown';

const ButtonGroup = ({ title, items, header }) => {
  return (
    <div className="button-group">
      {renderMarkdown(header)}
      {title && <h5>{title}</h5>}
      {items.map(props => (
        <ButtonLink {...props} />
      ))}
    </div>
  );
};

export default ButtonGroup;
