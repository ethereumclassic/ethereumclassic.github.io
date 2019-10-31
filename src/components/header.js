import React from 'react';
import logo from '../assets/images/etc-black.svg';
import LocalizedLink from './localizedLink';

const Header = ({ link }) => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Ethereum Classic Logo" />
        <h1>
          <LocalizedLink to="/">Ethereum Classic</LocalizedLink>
          {link && (
            <>
              {' '}
              <small>
                <LocalizedLink {...link} />
              </small>
            </>
          )}
        </h1>
      </header>
    </div>
  );
};

export default Header;
