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
            if (locale === key) {
              return null;
            }
            // TODO replace this with 404 tree traversal logic
            // if we're in a sub-page like /blog/xxx or /knowledge/xxx, go to the root page
            let link = location.pathname.replace(`/${locale}/`, '/');
            const fragments = link.split('/');
            if (fragments.length >= 3) {
              link = `/${fragments[1]}`;
            }
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
