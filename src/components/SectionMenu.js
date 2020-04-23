import React from 'react';

import Menu from './Menu';

const SectionMenu = ({
  i18n: {
    globals: { section }
  }
}) => {
  if (!section || !section.menu) {
    return null;
  }
  return (
    <div style={{ float: 'right' }}>
      <Menu items={section.menu} />
    </div>
  );
};

export default SectionMenu;
