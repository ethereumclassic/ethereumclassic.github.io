import React from 'react';
import logo from '../assets/images/etc-black.svg';
import Link from './link';

const Header = ({ link }) => {
  return (
    <div id="page-header">
      <header>
        <img src={logo} alt="Ethereum Classic Logo" />
        <h1>
          <Link to="/">Ethereum Classic</Link>
          {link && (
            <>
              {' '}
              <small>
                <Link {...link} />
              </small>
            </>
          )}
        </h1>
      </header>
    </div>
  );
};

export default Header;
