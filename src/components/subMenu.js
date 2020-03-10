import React from 'react';

import Link from '~components/link';

const SubMenu = ({ items, i18n, selected }) => {
  const menu = items || i18n.yaml.menu;
  return (
    <ul>
      {menu.map(i => (
        <li key={i.key || `${i.text}${i.link || i.to}`}>
          {selected === i.key && '➡️'}
          <Link to={i.link || i.to} text={i.text} />
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
