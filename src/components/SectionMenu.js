import React from 'react';

import Menu from './Menu';

const SectionMenu = ({
  relativePath,
  i18n: {
    globals: { section, mainMenu }
  }
}) => {
  if (!section || !section.menu) {
    return null;
  }
  let next;
  let prev;
  let home;
  const homeMatch = relativePath
    .split('/')
    .slice(0, -1)
    .join('/');
  mainMenu.forEach(({ to }, i) => {
    if (to === `/${homeMatch}`) {
      home = i;
    }
  });
  section.menu.forEach(({ to }, i) => {
    if (to === `/${relativePath}`) {
      prev = section.menu[i - 1] || mainMenu[home];
      next = section.menu[i + 1] || mainMenu[home + 1];
    }
  });
  return (
    <div style={{ float: 'right' }}>
      <Menu items={section.menu} />
      ---
      <br />
      {prev && next && <Menu items={[prev, next]} />}
      <br />
    </div>
  );
};

export default SectionMenu;
