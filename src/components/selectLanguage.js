import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import LocaleContext from '../i18n/localeContext';
import { locales, defaultLocale } from '../i18n/config';

const SelectLanguage = () => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <Location>
      {({ location }) => (
        <div className="select-language">
          {Object.keys(locales).map(key => {
            // hide the current language
            if (locale === key || !locales[key].enabled) {
              return null;
            }
            // replace current path with our locale with our new locale
            let link = location.pathname.replace(`/${locale}/`, '/');
            if (defaultLocale !== key) {
              link = `/${key}${link}`;
            }
            return (
              <Link key={key} to={link} hrefLang={key} state={{ languageChange: true }}>
                {locales[key].flag}
              </Link>
            );
          })}
        </div>
      )}
    </Location>
  );
};

export default SelectLanguage;
