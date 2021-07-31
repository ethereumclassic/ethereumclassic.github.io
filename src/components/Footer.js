import React from 'react';
import Link from './Link';
import ButtonsGroup from './ButtonsGroup';
import Icons from './Icons';
import Md from './Markdown';
import Search from './Search';

import netlify from '../assets/images/netlify-color-accent.svg';

const Footer = ({
  i18n: {
    globals: { footer: i18n, ui }
  }
}) => {
  return (
    <>
      <section className="footer">
        <header>
          <h2>{i18n.participants}</h2>
        </header>
        <div className="content">
          <h3>{i18n.social.title}</h3>
          <Icons items={i18n.social.items} />
          <div className="spaced">
            <div>
              <Md unwrap>{i18n.discordTip}</Md>
            </div>
            <Link button to={i18n.discord.link} className="blue massive" brand="discord">
              {i18n.discord.name}
            </Link>
            <div className="spaced" />
            <Link button next to="/ecosystem/social-channels">
              {i18n.moreChannels}
            </Link>
            <div className="spaced" />
            <Search i18n={ui} />
          </div>
        </div>
        <footer>
          <h3>{i18n.teams.title}</h3>
          <ButtonsGroup items={i18n.teams.items} />
          <div className="spaced" />
          <h3>{i18n.regions.title}</h3>
          <ButtonsGroup items={i18n.regions.items} />
        </footer>
      </section>
      <div className="copyright">
        <ButtonsGroup items={i18n.buttons} />
        <div className="sign-off">
          <Md unwrap>{i18n.signOff}</Md>
          <br />
          <Link to="https://html5up.net/license">{i18n.html5Up}</Link>
          <br />
        </div>
        <br />
        <a href="https://www.netlify.com" style={{ border: 0 }}>
          <img src={netlify} alt="Deploys by Netlify" />
        </a>
      </div>
    </>
  );
};

export default Footer;
