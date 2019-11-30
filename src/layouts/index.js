import React from 'react';

import '../assets/sass/main.scss';

import withTranslations from '../i18n/withTranslations';

import Warning from '~components/warning';
import SEO from '~components/seo';

const warningEnabled = true;

const Index = ({ children }) => {
  return (
    <>
      <SEO />
      {warningEnabled && <Warning />}
      {children}
    </>
  );
};

export default withTranslations()(Index);
