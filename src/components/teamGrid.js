import React from 'react';

const members = [{ name: 'Bob Summerwill' }];
const TeamGrid = () => {
  // const TeamGrid = ({ members }) => {
  return (
    <div className="icon-grid">
      {members.map(({ icon, text }) => (
        <div className="item" key={text}>
          <div className={`icon-item ${icon}`} />
          {text && <div className="text">{text}</div>}
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
