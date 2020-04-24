import React from 'react';

const HomePlain = ({ data }) => {
  return (
    <div key={data.key}>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default HomePlain;
