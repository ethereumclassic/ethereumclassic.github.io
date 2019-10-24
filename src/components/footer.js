import React from 'react';
import Social from './social';
import Community from './community';
import Spacer from './spacer';

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
          <form>
            <div className="fields">
              <div className="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="field half">
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <div className="field">
                <textarea name="message" id="message" placeholder="Message" rows="7" />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="button primary" />
              </li>
            </ul>
          </form>
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
