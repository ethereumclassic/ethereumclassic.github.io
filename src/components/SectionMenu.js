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
    <div className={`section-menu ${!slim && 'expanded'}`}>
      {!slim && <hr />}
      {(prev || next) && (
        <div className="fast-nav flex">
          <div>
            {prev && (
              <Link button back to={prev.to}>
                {prev.name}
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <>
                {!slim && <small>{`${ui.continueReading}: `}</small>}
                <Link button next to={next.to}>
                  {next.name}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      {!slim && (
        <div className="learn-more">
          <h2>
            {`${ui.learnMore}: `}
            <small>{section.title}</small>
          </h2>
          <Menu list items={section.menu} />
        </div>
      )}
    </div>
  );
};

export default SectionMenu;
