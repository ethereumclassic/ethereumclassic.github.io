import React from 'react';
import Social from './social';
import Community from './community';
import Newsletter from './newsletter';
import Discord from './discord';
import Translate from './translate';

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
        <Translate text="footerText" />
      </div>
    </>
  );
};

export default Footer;
