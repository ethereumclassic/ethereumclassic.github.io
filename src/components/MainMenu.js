import React from 'react';

import Menu from './Menu';

const MainMenu = ({
  i18n: {
    globals: { mainMenu }
  }
}) => {
  return (
    <div>
      <Menu items={mainMenu} />
    </div>
  );
};

export default MainMenu;
