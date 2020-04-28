import React from 'react';
import Link from './Link';

const PageHeader = ({
  i18n: {
    globals: { ui, section = {} }
  }
}) => {
  return (
    <div className="header">
      <header className="contained">
        <h1>
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
