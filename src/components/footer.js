import React from 'react';
import Social from './social';
import Community from './community';
import Spacer from './spacer';
import Newsletter from './newsletter';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <header>
          <h2>Get Involved</h2>
        </header>
        <div className="content">
          <p>
            <strong>Auctor commodo</strong>
            interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis
            dolor imperdiet dolor mattis sagittis.
          </p>
          Discord goes here...
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
