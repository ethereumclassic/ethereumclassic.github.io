import React from 'react';
import Img from 'gatsby-image';
import logo from '../assets/images/etc-black.svg';
import html from '../i18n/html';

import ButtonLink from './buttonLink';

const Banner = ({ image, i18n }) => {
  return (
    <section className="intro">
      <header>
        <h1>
          <img className="logo" src={logo} alt="Ethereum Classic Logo" />
          {i18n.title}
        </h1>
        <p>{html(i18n.subtitle)}</p>
      </header>
      <div className="content">
        <div className="overlay dark">
          <h3>{i18n.summitTitle}</h3>
          <p>{html(i18n.summitSubtitle)}</p>
          <ButtonLink to="/summit/2019" icon="angle-right" text={i18n.summitButton} />
        </div>
        <span className="image fill" data-position="center">
          <Img
            fadeIn={false}
            loading="eager"
            fluid={image}
            style={{ position: 'initial', height: '100%' }}
          />
        </span>
      </div>
    </section>
  );
};

export default Banner;
