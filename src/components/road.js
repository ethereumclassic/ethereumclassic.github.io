import React from 'react';

import renderMarkdown from './renderMarkdown';

const classes = {
  // evm: 'blue',
  // protocol: 'purple'
};

const Road = ({ items, header }) => {
  return (
    <>
      {renderMarkdown(header)}
      <div className="road">
        {items.map(({ key, date, text, type }) => {
          return (
            <div className={`item ${classes[type] || ''}`} key={key}>
              <h4 className="date">{`${date}`}</h4>
              <p>{renderMarkdown(text)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Road;
