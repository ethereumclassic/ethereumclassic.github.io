import React from "react";
import { Link } from "gatsby";
import { Location } from '@reach/router'
import LocaleContext from "../i18n/localeContext";
import { locales, defaultLocale } from '../i18n/config';

const SelectLanguage = () => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <Location>
      {({ location }) => (
          <div>
            {Object.values(locales).map((localeConf) => {
              // hide the selected language
              if (locale === localeConf.path) {
                return null;
              }
              const current = location.pathname.includes('/blog') ? '/blog' : location.pathname;
              let link = current.replace(`/${locale}`, '');
              if (defaultLocale !== localeConf.path) {
                link = `/${localeConf.path}${link}`;
              }
              return (
                <Link key={localeConf.path} to={link} hrefLang={localeConf.path}>
                  {localeConf.name}
                </Link>
              )
            })}
          </div>
        )
      }
    </Location>
  );
};

export default SelectLanguage;
