import React from 'react';
import useTranslations from '../i18n/useTranslations';
import NavigationButton from './navigationButton';
import SelectLanguage from './selectLanguage';
import Hamburger from './hamburger';

const Navigation = () => {
  const { backToHome } = useTranslations();

  return (
    <div id="menu">
      <SelectLanguage />
      <div id="page-nav">
        <Hamburger>
          <NavigationButton to="/" text={backToHome} />
          <NavigationButton to="/knowledge" text="Knowledge" />
          <NavigationButton to="/participants" text="Participants" />
          <NavigationButton to="/ecosystem" text="Ecosystem" />
          <NavigationButton to="/roadmap" text="Roadmap" />
          <NavigationButton to="/blog" text="Blog" />
        </Hamburger>
      </div>
    </div>
  );
};

export default Navigation;
