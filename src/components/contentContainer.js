import React from 'react';

const contentContainer = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-content">{children}</div>
    </div>
  );
};

export default contentContainer;
