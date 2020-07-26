/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Menu from './Menu';

const MainMenu = ({
  i18n: {
    globals: { mainMenu }
  }
}) => {
  return (
    <div className="main-menu">
      <input id="menu-toggle" type="checkbox" />
      <Menu items={mainMenu} />
      <div className="hamburger">
        <i className="fas fa-bars" />
      </div>
      <label htmlFor="menu-toggle" className="toggle" />
      <div className="overlay" />
    </div>
  );
};

export default MainMenu;
