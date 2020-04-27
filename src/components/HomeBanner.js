import React from 'react';

import Img from 'gatsby-image';

import logo from '../assets/images/etc-black.svg';
// TODO make this responsive
import image from '../assets/images/banner.jpg';

import Link from './Link';

const HomeBanner = ({ data: i18n }) => {
  return (
    <section className="intro">
      <header>
        <h1>
          <img className="logo" src={logo} alt="Ethereum Classic Logo" />
          {i18n.title}
        </h1>
        <p className="tagline">{i18n.subtitle}</p>
      </header>
      <div className="content">
        <div className="overlay dark">
          <h3>{i18n.bannerTitle}</h3>
          <p>{i18n.bannerText}</p>
          <Link className="button" to={i18n.button.to}>
            {i18n.button.text}
          </Link>
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

export default HomeBanner;
