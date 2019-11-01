import React from 'react';

const Spacer = ({ size }) => {
  const style = size ? { marginTop: size } : {};
  return <div className="spacer" style={style} />;
};

export default Spacer;
