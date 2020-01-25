import React from 'react';
import LocaleContext from '../i18n/localeContext';

/*
<LocaleVisibility
  show={['en']} // only shows on default locale
  hide={['en', 'zh']} // hides default and zh
>
</LocaleVisibility>
*/

const LocaleVisibility = ({ children, show, hide }) => {
  const { locale } = React.useContext(LocaleContext);
  if (show && show.indexOf(locale) > -1) {
    return children;
  }
  if (hide && hide.indexOf(locale) === -1) {
    return children;
  }
  return null;
};

export default LocaleVisibility;
