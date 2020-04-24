import React from 'react';

const HomeIconGrid = ({ data }) => {
  return (
    <div key={data.key}>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default HomeIconGrid;
