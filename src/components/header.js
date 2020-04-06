import React from 'react';
import logo from '../assets/images/etc-black.svg';
import Link from './link';
import Translate from './translate';

const Header = ({ link }) => {
  return (
    <div id="page-header">
      <header>
        <h1>
          <Link to="/">
            <img src={logo} alt="Ethereum Classic Logo" />
            <Translate text="title" />
          </Link>
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
