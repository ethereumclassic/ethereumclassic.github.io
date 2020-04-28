import React from 'react';
import ContentItemWrapper from './ContentItemWrapper';

import Md from './Markdown';

const Roadmap = ({ data }) => {
  return (
    <ContentItemWrapper data={data}>
      <div className="roadmap">
        {data.items.map(({ date, key, text }) => (
          <div key={key} className="item">
            <h4>{date}</h4>
            <Md>{text}</Md>
          </div>
        ))}
      </div>
    </ContentItemWrapper>
  );
};

export default Roadmap;
