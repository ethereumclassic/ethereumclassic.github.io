import React from 'react';

const Grid = ({ children, columns = 2, className }) => {
  const gridTemplateColumns = new Array(columns)
    .fill()
    .map(() => '1fr')
    .join(' ');

  return (
    <div className={`grid ${className || ''}`} style={{ gridTemplateColumns }}>
      {children}
    </div>
  );
};

export default Grid;
