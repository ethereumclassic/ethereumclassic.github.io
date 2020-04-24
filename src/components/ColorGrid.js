import React from 'react';
import ContentItemWrapper from './ContentItemWrapper';

const ColorGrid = ({ data }) => {
  return (
    <ContentItemWrapper data={data}>
      {data.items.map(item => (
        <pre key={item.key}>{JSON.stringify(item)}</pre>
      ))}
    </ContentItemWrapper>
  );
};

export default ColorGrid;
