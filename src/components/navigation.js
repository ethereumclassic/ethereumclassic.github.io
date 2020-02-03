import React from 'react';
import Translate from './translate';
import NavigationButton from './navigationButton';
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
              <NavigationButton to="/" text={t.navHome} />
              <NavigationButton to="/knowledge" text={t.navKnowledge} />
              <NavigationButton to="/ecosystem" text={t.navEcosystem} />
              <NavigationButton to="/development" text={t.navDevelopment} />
              <NavigationButton to="/blog" text={t.navNews} />
              <NavigationButton to="/press" text={t.navPress} />
            </Hamburger>
          )}
        />
      </div>
    </div>
  );
};

export default Navigation;
