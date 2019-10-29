import React from 'react';
import Helmet from 'react-helmet';

import '../assets/sass/main.scss';

import Warning from '~components/warning';

import withI18next from '../i18n/withI18next';

const Index = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Ethereum Classic</title>
      </Helmet>
      <Warning />
      {children}
    </>
  );
};

export default withI18next()(Index);
