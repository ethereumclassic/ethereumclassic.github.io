import React from 'react';
import Translate from './translate';
import Link from './link';
import SelectLanguage from './selectLanguage';
import Hamburger from './hamburger';

const Navigation = () => {
  return (
    <div id="menu">
      <SelectLanguage />
      <div id="page-nav">
        <Translate
          all={t => (
            <Hamburger>
              <Link to="/" text={t.navHome} />
              <Link to="/knowledge" text={t.navKnowledge} />
              <Link to="/ecosystem" text={t.navEcosystem} />
              <Link to="/development" text={t.navDevelopment} />
              <Link to="/news" text={t.navNews} />
              <Link to="/press" text={t.navPress} />
            </Hamburger>
          )}
        />
      </div>
    </div>
  );
};

export default Navigation;
