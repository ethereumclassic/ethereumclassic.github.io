/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Menu from './Menu';
import Search from './Search';

const MainMenu = ({
  i18n: {
    globals: { mainMenu, ui }
  }
}) => {
  return (
    <div className="main-menu">
      <input id="menu-toggle" type="checkbox" />
      <Menu items={mainMenu} />
      <Search i18n={ui} />
      <div className="hamburger">
        <i className="fas fa-bars" />
      </div>
      <label htmlFor="menu-toggle" className="toggle" />
      <div className="overlay" />
    </div>
  );
};

export default MainMenu;
