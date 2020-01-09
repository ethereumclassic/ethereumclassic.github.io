import React from 'react';
import Social from './social';
import Community from './community';
import Newsletter from './newsletter';
import Discord from './discord';
import Translate from './translate';
import Link from './link';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <header>
          <h2>
            <Translate text="getInvolved" />
          </h2>
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
        <br />
        <Link to="https://html5up.net/license" text="Template derived from HTML5UP" />
      </div>
    </>
  );
};

export default Footer;
