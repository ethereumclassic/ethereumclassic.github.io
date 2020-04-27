import React from 'react';
import Link from './Link';
import ButtonsGroup from './ButtonsGroup';

const Footer = ({
  i18n: {
    globals: { footer: i18n }
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
          <ButtonsGroup items={i18n.social.items} />
          <div>
            <p>{i18n.discordTip}</p>
            <Link className="button" to={i18n.discord.to}>
              {i18n.discord.name}
            </Link>
            <br />
            <Link className="button" to="/ecosystem/social-channels">
              {i18n.moreChannels}
            </Link>
          </div>
        </div>
        <footer>
          <h3>{i18n.teams.title}</h3>
          <ButtonsGroup items={i18n.teams.items} />
          <h3>{i18n.regions.title}</h3>
          <ButtonsGroup items={i18n.regions.items} />
        </footer>
      </section>
      <div className="copyright">
        <ButtonsGroup items={i18n.buttons} />
        <div className="sign-off">
          {i18n.signOff}
          <br />
          <Link to="https://html5up.net/license">{i18n.html5Up}</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
