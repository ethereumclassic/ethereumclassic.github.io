/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import Menu from './Menu';
import LangueMenu from './LanguageMenu';

const MainMenu = pageContext => {
  const {
    i18n: {
      globals: { mainMenu }
    }
  } = pageContext;
  const [hidden, setHidden] = useState(true);
  function toggle() {
    setHidden(!hidden);
  }
  return (
    <div className="main-menu">
      <div className={`overlay ${hidden ? 'hidden' : ''}`} onClick={toggle}>
        <Menu className="main" items={mainMenu} onClick={toggle} />
        <LangueMenu {...pageContext} onClick={toggle} />
      </div>
      <div className={`hamburger ${!hidden ? 'selected' : ''}`} onClick={toggle}>
        <i className="fas fa-bars" />
      </div>
    </div>
  );
};

export default MainMenu;
