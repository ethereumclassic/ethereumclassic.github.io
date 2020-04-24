import React from 'react';

const ContentItemWrapper = ({ children, data: { title, description } }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </>
  );
};

export default ContentItemWrapper;
