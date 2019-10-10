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
        <NavigationButton to="/teams" text={'Teams'} />
        <NavigationButton to="/roadmap" text={'Roadmap'} />
        <NavigationButton to="/powered-by-etc" text={'Powered by ETC'} />
        <NavigationButton to="/resources" text={'Resources'} />
        <NavigationButton to="/blog" text={'Blog'} />
      </Hamburger>
    </div>
  );
};

export default Navigation;
