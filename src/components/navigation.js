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
      <Hamburger>
        <NavigationButton to="/" text={backToHome} />
        <NavigationButton to="/education" text="Education" />
        <NavigationButton to="/teams" text="Teams" />
        <NavigationButton to="/roadmap" text="Roadmap" />
        <NavigationButton to="/powered-by-etc" text="Powered by ETC" />
        <NavigationButton to="/resources" text="Resources" />
        <NavigationButton to="/blog" text="Blog" />
      </Hamburger>
    </div>
  );
};

export default Navigation;
