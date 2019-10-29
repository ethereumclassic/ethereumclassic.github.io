// TODO replace with i18n
import React from 'react';
import Dapps from '~components/dapps';
import Navigation from '~components/navigation';
import Header from '~components/header';
import ContentContainer from '~components/contentContainer';
import Resources from '~components/resources';
import Footer from '~components/footer';

const Reseources = () => {
  return (
    <>
      <Navigation />
      <div id="wrapper" className="page">
        <Header />
        <ContentContainer>
          <h1>Ecosystem</h1>
          <h3>Lorem ipsum dolor sit</h3>
          <p>Links are not endorsements!</p>
        </ContentContainer>
        <Dapps />
        <ContentContainer>
          <Resources />
        </ContentContainer>
        <Footer />
      </div>
    </>
  );
};

export default Reseources;
