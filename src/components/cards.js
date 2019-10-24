import React from 'react';

const Cards = ({ children, columns, className }) => {
  const style = columns
    ? {
        gridTemplateColumns: columns,
        gridAutoColumns: 'unset'
      }
    : {};
  return (
    <div className={`cards ${className || ''}`} style={style}>
      {children}
    </div>
  );
};

export default Cards;
