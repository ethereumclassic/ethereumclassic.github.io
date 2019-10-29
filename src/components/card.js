import React from 'react';

import Link from './link';

const Card = ({ title, children, span, to, className }) => {
  const style = span ? { gridColumn: `span ${span}` } : {};
  const Comp = to ? Link : 'div';
  const linkArgs = to ? { to } : {};
  return (
    <Comp className={`card item ${className || ''}`} style={style} {...linkArgs}>
      {title && <h4>{title}</h4>}
      <div className="content">{children}</div>
    </Comp>
  );
};

export default Card;
