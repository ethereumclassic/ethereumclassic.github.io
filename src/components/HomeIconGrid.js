import React from 'react';

const HomeIconGrid = ({ data }) => {
  return (
    <section className="icon-grid">
      {data.items.map(({ key, icon, title, description }) => (
        <div className="item" key={key}>
          <div className={`icon ${icon}`} />
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      ))}
    </section>
  );
};

export default HomeIconGrid;
