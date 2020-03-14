import React from 'react';

import ButtonLink from '~components/buttonLink';
import Link from '~components/link';

const MultiLinkGroup = ({ items, header, buttons }) => {
  return (
    <div className="info-buttons-group">
      {header}
      {items.map(item => (
        <div key={item.key} className="item">
          <div className="right-buttons">
            {buttons.map(
              b =>
                item[b.key] && (
                  <ButtonLink {...b} to={item[b.key]} fullIcon={item[b.fullIcon] || b.fullIcon} />
                )
            )}
          </div>
          <h3>{item.link ? <Link to={item.link} text={item.name} /> : item.name}</h3>
          <p>{`${item.text} `}</p>
        </div>
      ))}
    </div>
  );
};

export default MultiLinkGroup;
