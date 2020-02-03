import React from 'react';

import Link from '~components/link';

const SubMenu = ({ items }) => {
  return (
    <ul>
      {items.map(i => (
        <li key={i.key}>
          <Link to={i.link} text={i.text} />
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
