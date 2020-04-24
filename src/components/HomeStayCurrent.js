import React from 'react';

const HomeStayCurrent = ({ data }) => {
  return (
    <div key={data.key}>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default HomeStayCurrent;
