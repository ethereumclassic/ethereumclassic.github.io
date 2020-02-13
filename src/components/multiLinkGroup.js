import React from 'react';

import ButtonLink from '~components/buttonLink';

const MultiLinkGroup = ({ items, header, buttons }) => {
  return (
    <div className="info-buttons-group">
      {header}
      {items.map(item => (
        <div key={item.key} className="item">
          <div className="right-buttons">
            {buttons.map(
              ({ text, key }) => item[key] && <ButtonLink key={key} text={text} to={item[key]} />
            )}
          </div>
          <h3>{item.name}</h3>
          <p>{`${item.text} `}</p>
        </div>
      ))}
    </div>
  );
};

export default MultiLinkGroup;
