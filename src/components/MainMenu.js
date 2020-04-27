/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import Menu from './Menu';

const MainMenu = ({
  i18n: {
    globals: { mainMenu }
  }
}) => {
  const [hidden, setHidden] = useState(true);
  function toggle() {
    setHidden(!hidden);
  }
  return (
    <div className="main-menu">
      <div className={`overlay ${hidden ? 'hidden' : ''}`} onClick={toggle}>
        <Menu items={mainMenu} onClick={toggle} />
      </div>
      <div className="hamburger" onClick={toggle}>
        <i className="fas fa-bars" />
      </div>
    </div>
  );
};

export default MainMenu;
