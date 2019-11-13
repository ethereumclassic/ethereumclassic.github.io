import React from 'react';
import Social from './social';
import Community from './community';
import Newsletter from './newsletter';
import Discord from './discord';
import Link from './link';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <header>
          <h2>Get Involved</h2>
        </header>
        <div className="content">
          <Discord />
          <Newsletter />
        </div>
        <footer>
          <Community />
          <Social />
        </footer>
      </section>
      <div className="copyright">
        <Link to="https://github.com/ethereumclassic/ethereumclassic.github.io">Made</Link>
        {' with'}
        <code>&lt;3</code>
        for the original Ethereum vision
      </div>
    </>
  );
};

export default Footer;
