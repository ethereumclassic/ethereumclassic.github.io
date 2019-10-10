import React from "react";
import useTranslations from "../i18n/useTranslations";
import NavigationButton from "./NavigationButton";
import SelectLanguage from "./selectLanguage";
import Hamburger from "./Hamburger";

const Navigation = (props) => {
  const { backToHome } = useTranslations();

  return (
    <div id="menu">
      <SelectLanguage />
      <Hamburger>
        <NavigationButton to="/" text={backToHome} />
        <NavigationButton to="/blog" text={'Blog'} />
        <NavigationButton to="/teams" text={'Teams'} />
        <NavigationButton to="/roadmap" text={'Roadmap'} />
        <NavigationButton to="/about" text={'About'} />
      </Hamburger>
    </div>
  );
};

export default Navigation;
