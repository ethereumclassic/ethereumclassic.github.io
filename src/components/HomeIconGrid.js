import React from 'react';

const HomeIconGrid = ({ data }) => {
  return (
    <section className="shaded full">
      <div className="container icon-grid">
        {data.items.map(({ key, icon, title, description }) => (
          <div className="item" key={key}>
            <div className={`item-icon ${icon}`} />
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeIconGrid;
