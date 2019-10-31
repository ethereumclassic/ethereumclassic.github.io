import React from 'react';

import Navigation from '~components/navigation';
import Landing from '~components/landing';

const Index = ({ pageContext: { i18n } }) => (
  <>
    <Navigation />
    <div id="wrapper">
      <Landing i18n={i18n} />
    </div>
  </>
);

export default Index;
