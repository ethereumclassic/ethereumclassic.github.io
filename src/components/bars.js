import React from 'react';

const Bars = ({ title, items }) => {
  return (
    <div className="bars">
      {title && <h3>{title}</h3>}
      {items.map(({ name, progress }) => (
        <div key={name}>
          <span>{name}</span>
          <div className="bar">
            <div className="fill" style={{ width: `${progress || 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bars;
