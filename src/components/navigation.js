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
              <NavigationButton to="/teams" text={t.navTeams} />
              <NavigationButton to="/ecosystem" text={t.navEcosystem} />
              <NavigationButton to="/roadmap" text={t.navRoadmap} />
              <NavigationButton to="/blog" text={t.navBlog} />
            </Hamburger>
          )}
        />
      </div>
    </div>
  );
};

export default Navigation;
