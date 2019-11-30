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
            // hide the selected language
            if (locale === key) {
              return null;
            }
            // TODO document this
            const current = location.pathname.includes('/blog') ? '/blog' : location.pathname;
            let link = current.replace(`/${locale}`, '');
            if (defaultLocale !== key) {
              link = `/${key}${link}`;
            }
            return (
              <Link key={key} to={link} hrefLang={key}>
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
