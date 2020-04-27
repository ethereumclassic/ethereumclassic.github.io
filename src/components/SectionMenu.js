import React from 'react';

import Link from './Link';
import Menu from './Menu';

const SectionMenu = ({
  relativePath,
  i18n: {
    globals: { section, mainMenu, ui }
  },
  slim
}) => {
  if (!section || !section.menu || relativePath.split('/').length === 1) {
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
    <div className="section-menu">
      {(prev || next) && (
        <div className="fast-nav grid">
          <div>
            {prev && (
              <Link className="button" to={prev.to}>
                {prev.name}
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <>
                {!slim && `${ui.continueReading}: `}
                <Link className="button" to={next.to}>
                  {next.name}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <div className="clear" />
      {!slim && <Menu items={section.menu} />}
    </div>
  );
};

export default SectionMenu;
