import React from 'react';
import Grid from './grid';

const IconGrid = ({ icons }) => {
  return (
    <Grid columns={3} className="icon-grid">
      {icons.map(({ icon, text }) => (
        <div className="item" key={text}>
          <div className={`icon-item ${icon}`} />
          {text && <div className="text">{text}</div>}
        </div>
      ))}
    </Grid>
  );
};

export default IconGrid;
