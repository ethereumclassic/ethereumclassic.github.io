import React from 'react';

const Json = props => (
  <>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </>
);

export default Json;
