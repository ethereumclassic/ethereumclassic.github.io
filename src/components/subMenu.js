import React from 'react';

import Link from '~components/link';

const SubMenu = ({ items }) => {
  return (
    <>
      <ul className="sub-menu">
        {items.map(i => (
          <li
            key={i.key || `${i.text}${i.link || i.to}`}
            className={`${i.selected ? 'selected' : ''}`}
          >
            <Link to={i.link || i.to} text={i.text} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubMenu;
