import React from 'react';

const WideSection = ({ title, children, full, className }) => {
  return (
    <div className={`wide-section ${className || ''}`}>
      <div className={`container ${full ? 'full' : ''}`}>
        {title && (
          <header>
            <h2>{title}</h2>
          </header>
        )}
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default WideSection;
