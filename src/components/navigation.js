import React from "react";
import LocalizedLink from "./localizedLink";
import useTranslations from "./useTranslations";
import SelectLanguage from "./selectLanguage";

const Navigation = (props) => {
  const { backToHome } = useTranslations();

  return (
    <nav id="menu">
      <div className="inner">
            <ul className="links">
              <li><LocalizedLink onClick={props.onToggleMenu} to="/" aria-label={backToHome}>{backToHome}</LocalizedLink></li>
              <li><LocalizedLink onClick={props.onToggleMenu} to="/blog">Blog</LocalizedLink></li>
              <li><LocalizedLink onClick={props.onToggleMenu} to="/about">About</LocalizedLink></li>
            </ul>
            <SelectLanguage />
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
  );
};

export default Navigation;
