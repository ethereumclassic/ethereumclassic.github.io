import React from "react";
import LocalizedLink from "./localizedLink";
import useTranslations from "./useTranslations";
import SelectLanguage from "./selectLanguage";


// TODO make this menu stateful

const Navigation = (props) => {
  const { backToHome } = useTranslations();

  return (
    <div id="menu">
      <nav>
        <div className="inner">
          <ul className="links">
            <li><LocalizedLink onClick={props.onToggleMenu} to="/" aria-label={backToHome}>{backToHome}</LocalizedLink></li>
            <li><LocalizedLink onClick={props.onToggleMenu} to="/blog">Blog</LocalizedLink></li>
            <li><LocalizedLink onClick={props.onToggleMenu} to="/about">About</LocalizedLink></li>
          </ul>
          <SelectLanguage />
        </div>
        {/* <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a> */}
      </nav>
    </div>
  );
};

export default Navigation;
