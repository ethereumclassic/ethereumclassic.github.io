import React from 'react';
import Md from './Markdown';

import { textToKey } from '../utils';

const ContentItemWrapper = ({ wide, children, data: { title, subtitle, description } }) => {
  return (
    <>
      <div className="content-item" id={textToKey(title)}>
        {title && (
          <h2>
            {title}
            {subtitle && <small>{` ${subtitle}`}</small>}
          </h2>
        )}
        <Md>{description}</Md>
        {!wide && children}
      </div>
      {wide && <div className="content-item wide">{children}</div>}
    </>
  );
};

export default ContentItemWrapper;
