import React from 'react';

import Img from 'gatsby-image';

import logo from '../assets/images/etc-black.svg';
// TODO make this responsive
import image from '../assets/images/banner.jpg';

import Link from './Link';

import Md from './Markdown';

const HomeBanner = ({ data: i18n }) => {
  return (
    <section className="intro">
      <header>
        <h1>
          <img className="logo" src={logo} alt="Ethereum Classic Logo" />
          {i18n.title}
        </h1>
        <Md>{i18n.subtitle}</Md>
      </header>
      <div className="content">
        <div className="overlay dark">
          <h3>{i18n.bannerTitle}</h3>
          <Md>{i18n.bannerText}</Md>
          <Link button to={i18n.button.to}>
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
