import React from "react";
import LocalizedLink from "./LocalizedLink";

const NavigationButton = ({ to, text, onClick}) => {
  return (
    <LocalizedLink
      className="button-link"
      aria-label={text}
      to={to}
    >
      {text}
    </LocalizedLink>
  );
};

export default NavigationButton;
