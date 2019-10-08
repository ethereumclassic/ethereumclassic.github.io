import React from "react";
import LocaleContext from "../i18n/localeContext";
import { defaultLocale } from "../i18n/config";

const DefaultLanguageHidden = ({ children }) => {
  const { locale } = React.useContext(LocaleContext);
  if (defaultLocale === locale){ return null; }
  return children;
};

export default DefaultLanguageHidden;
