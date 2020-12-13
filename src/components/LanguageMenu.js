import React from 'react';

import Menu from './Menu';

const LangueMenu = ({ locales: enabled, locale, relativePath, i18n, onClick }) => {
  const items = i18n.globals.locales
    // .filter(({ key }) => enabled.includes(key))
    .map(({ key, localized, icon, link }) => ({
      name: `${icon} ${localized}`,
      link: `${link}${relativePath}`,
      key,
      localized: true,
      className: locale === key && 'active',
      noScroll: true
    }));
  return <Menu className="languages" items={items} onClick={onClick} />;
};

export default LangueMenu;
