import React from 'react';

import '../assets/sass/main.scss';

import withTranslations from '../i18n/withTranslations';

import LocaleContext from '../i18n/localeContext';

import SEO from '~components/seo';
import Warning from '~components/warning';

const Index = ({ children }) => {
  const { locale } = React.useContext(LocaleContext);
  return (
    <>
      <SEO />
      <Warning enabled={!!locale} />
      {children}
    </>
  );
};

export default withTranslations()(Index);
