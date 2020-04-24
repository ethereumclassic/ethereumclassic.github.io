import React from 'react';

const HomeSplit = ({ data }) => {
  return (
    <div key={data.key}>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default HomeSplit;
