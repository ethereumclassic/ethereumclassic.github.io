import React from 'react';

const Grid = ({ children, columns, className }) => {
  const style = !columns
    ? {}
    : {
        gridTemplateColumns: new Array(columns)
          .fill()
          .map(() => '1fr')
          .join(' ')
      };

  return (
    <div className={`grid ${className || ''}`} style={style}>
      {children}
    </div>
  );
};

export default Grid;
