import React from 'react';

import '../assets/sass/main.scss';

import Warning from '~components/warning';
import SEO from '~components/seo';

import withI18next from '../i18n/withI18next';

const Index = ({ children }) => {
  return (
    <>
      <SEO />
      <Warning />
      {children}
    </>
  );
};

export default withI18next()(Index);
