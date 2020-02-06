import React from 'react';

import Link from '~components/link';

const SubMenu = ({ items, i18n }) => {
  const menu = items || i18n.yaml.menu;
  return (
    <ul>
      {menu.map(i => (
        <li key={i.key}>
          <Link to={i.link} text={i.text} />
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
