import React from 'react';
import Md from './Markdown';

const ContentItemWrapper = ({ wide, children, data: { title, description } }) => {
  return (
    <>
      <div className="content-item">
        {title && <h2>{title}</h2>}
        <Md>{description}</Md>
        {!wide && children}
      </div>
      {wide && <div className="content-item wide">{children}</div>}
    </>
  );
};

export default ContentItemWrapper;
