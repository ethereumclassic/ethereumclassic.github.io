import React from 'react';
import Social from './social';
import Community from './community';
import Spacer from './spacer';
import Newsletter from './newsletter';
import Discord from './discord';

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
          <Spacer />
          <Social />
        </footer>
      </section>
      <div className="copyright">
        Made with
        <code>&lt;3</code>
        by the ETC Community
      </div>
    </>
  );
};

export default Footer;
