import React from 'react';
import Grid from './grid';

const IconGrid = ({ icons }) => {
  return (
    <Grid columns={3} className="icon-grid">
      {icons.map(({ icon, text, title }) => (
        <div className="item" key={`${title || text}-${icon}`}>
          <div className={`icon-item ${icon}`} />
          {title && <h3>{title}</h3>}
          {text && <p>{text}</p>}
        </div>
      ))}
    </Grid>
  );
};

export default IconGrid;
