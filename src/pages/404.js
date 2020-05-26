import React, { useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import logo from '../assets/images/etc-black.svg';

const Default = () => {
  useEffect(() => {
    const [_, locale, ...path] = window.location.pathname.split('/');
    if (path.length > 1) {
      navigate(path.join('/'));
    } else {
      navigate('/');
    }
  }, []);
  return (
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
};

export default Default;
