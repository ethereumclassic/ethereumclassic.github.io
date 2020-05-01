import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/etc-black.svg';

const Default = () => (
  <div className="page-missing">
    <img src={logo} alt="ETC Logo" />
    <h2>404</h2>
    <h1>Page Not Found</h1>
    <Link to="/" className="button-link">
      <i className="fas fa-chevron-left left" />
      Go Home
      <i className="fas fa-home right" />
    </Link>
    <hr />
    <small>https://ethereumclassic.org</small>
  </div>
);

export default Default;
