import React from 'react';
import Link from './Link';

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
          <div className="logo" />
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
