import React from 'react';
import Social from './social';
import Community from './community';
import Discord from './discord';
import Translate from './translate';
import Link from './link';
import ButtonLink from './buttonLink';

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
          <Social />
          <Discord />
        </div>
        <footer>
          <Community />
        </footer>
      </section>
      <div className="copyright">
        <ButtonLink to="/sitemap" text={<Translate text="sitemap" />} icon={'sitemap'} />
        <br />
        <br />
        <Translate text="footerText" />
        <br />
        <Link to="https://html5up.net/license" text="Template derived from HTML5UP" />
      </div>
    </>
  );
};

export default Footer;
