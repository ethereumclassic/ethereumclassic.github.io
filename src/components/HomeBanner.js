import React from 'react';

const HomeBanner = ({ data }) => {
  return (
    <div key={data.key}>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default HomeBanner;
