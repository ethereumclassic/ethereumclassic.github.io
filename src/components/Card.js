import React from 'react';

const Card = ({ title, children, span, link, className }) => {
  const style = span ? { gridColumn: `span ${span}` } : {};
  const Comp = link ? 'a' : 'div';
  const linkArgs = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Comp className={`card item ${className || ''}`} style={style} {...linkArgs}>
      {title && <h4>{title}</h4>}
      <div className="content">{children}</div>
    </Comp>
  );
};

export default Card;
