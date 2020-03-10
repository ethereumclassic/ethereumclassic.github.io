import React from 'react';

const Road = ({ items }) => {
  return (
    <div className="road">
      {items.map(({ key, date, title, text }) => {
        return (
          <div className={'item'} key={key}>
            <h5 className="date">{date}</h5>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Road;
