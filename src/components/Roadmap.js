import React from 'react';
import ContentItemWrapper from './ContentItemWrapper';

const Roadmap = ({ data }) => {
  return (
    <ContentItemWrapper data={data}>
      {data.items.map(item => (
        <pre key={item.key}>{JSON.stringify(item)}</pre>
      ))}
    </ContentItemWrapper>
  );
};

export default Roadmap;
