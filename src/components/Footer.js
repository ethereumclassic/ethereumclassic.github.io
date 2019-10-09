import React from "react";
import Social from "./Social";
import Community from "./Community";
import Spacer from "./Spacer";

const Footer = () => {

  return (
    <>
      <section>
        <header>
          <h2>Get Involved</h2>
        </header>
        <div className="content">
          <p><strong>Auctor commodo</strong> interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
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
                <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="button primary" /></li>
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
        Made with <span role="img" aria-label="heart">💚</span> by the ETC Community
      </div>
    </>
)
};

export default Footer;
