import React from 'react';
import ContentItemWrapper from './ContentItemWrapper';

import Md from './Markdown';

const Roadmap = ({ data }) => {
  return (
    <ContentItemWrapper data={data}>
      <div className="roadmap">
        {data.items.map(({ dateString, key, text }) => (
          <div key={key} className="item">
            <h4>{dateString}</h4>
            <Md>{text}</Md>
          </div>
        ))}
      </div>
    </ContentItemWrapper>
  );
};

export default Roadmap;
