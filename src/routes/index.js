import React from 'react';

import Navigation from '~components/navigation';
import Landing from '~components/landing';
import Footer from '~components/footer';

const Index = ({ pageContext: { i18n } }) => (
  <>
    <Navigation />
    <div id="wrapper">
      <Landing i18n={i18n} />
      <Footer />
    </div>
  </>
);

export default Index;
