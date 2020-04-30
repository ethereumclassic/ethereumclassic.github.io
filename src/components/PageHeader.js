import React from 'react';
import Link from './Link';
import logo from '../assets/images/etc-black.svg';

const PageHeader = ({
  relativePath,
  i18n: {
    title,
    globals: { ui, section = {} }
  }
}) => {
  const link = section.root ? section : { root: `/${relativePath}`, title };
  return (
    <div className="header">
      <header className="contained">
        <h1>
          <img src={logo} alt={ui.title} />
          <Link to="/">{ui.title}</Link>
          {link.root && (
            <>
              {'  '}
              <small>
                <Link to={link.root}>{link.title}</Link>
              </small>
            </>
          )}
        </h1>
      </header>
    </div>
  );
};

export default PageHeader;
