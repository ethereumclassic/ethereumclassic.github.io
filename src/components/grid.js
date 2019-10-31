import React from 'react';

const Grid = ({ children, columns, className, itemWidth, semi, wide }) => {
  const style = {};
  if (itemWidth) {
    style.gridTemplateColumns = `repeat(auto-fit, minmax(${itemWidth}px, 1fr))`;
  } else if (columns) {
    style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }
  return (
    <div
      className={`grid ${wide ? 'wide' : ''} ${semi ? 'semi' : ''} ${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Grid;
