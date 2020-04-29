import React from 'react';
import Link from './Link';
import logo from '../assets/images/etc-black.svg';

const PageHeader = ({
  i18n: {
    globals: { ui, section = {} }
  }
}) => {
  return (
    <div className="header">
      <header className="contained">
        <h1>
          <img src={logo} alt={ui.title} />
          <Link to="/">{ui.title}</Link>
          {section.title && (
            <>
              {'  '}
              <small>
                <Link to={section.root}>{section.title}</Link>
              </small>
            </>
          )}
        </h1>
      </header>
    </div>
  );
};

export default PageHeader;
