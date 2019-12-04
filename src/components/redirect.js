import React from 'react';
import { navigate } from 'gatsby';

import LocaleContext from '../i18n/localeContext';
import { defaultLocale } from '../i18n/config';

const Redirect = ({ to = '/' }) => {
  const { locale } = React.useContext(LocaleContext);
  let path = to;
  if (locale && locale !== defaultLocale) {
    path = `/${locale}${to}`;
  }
  React.useEffect(() => {
    navigate(path);
  }, []);
  return null;
};

export default Redirect;
