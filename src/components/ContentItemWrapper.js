import React from 'react';

const ContentItemWrapper = ({ wide, children, data: { title, description } }) => {
  return (
    <>
      <div className="content-item">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {!wide && children}
      </div>
      {wide && <div className="content-item wide">{children}</div>}
    </>
  );
};

export default ContentItemWrapper;
