import React from 'react';

import html from '../i18n/html';

const classes = {
  // evm: 'blue',
  // protocol: 'purple'
};

const Road = ({ items }) => {
  return (
    <div className="road">
      {items.map(({ key, date, text, type }) => {
        return (
          <div className={`item ${classes[type] || ''}`} key={key}>
            <h5 className="date">{`${date}`}</h5>
            {/* <h4>{title || type}</h4> */}
            <p>{html(text)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Road;
