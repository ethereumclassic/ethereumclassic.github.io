import React from 'react';
import Img from 'gatsby-image';
import logo from '../assets/images/etc-black.svg';

import ButtonLink from './buttonLink';

const Banner = ({ image }) => {
  return (
    <section className="intro">
      <header>
        <h1>
          <img className="logo" src={logo} alt="Ethereum Classic Logo" />
          Ethereum Classic
        </h1>
        <p>
          Build
          <b> Unstoppable </b>
          Applications
        </p>
      </header>
      <div className="content">
        <div className="overlay dark">
          <h3>Ethereum Classic Summit</h3>
          <p>
            October 3rd & 4th, 2019
            <br />
            Vancouver Convention Centre
          </p>
          <ButtonLink
            to="/summit/2019"
            icon="angle-right"
            // className="massive"
            text="View Presentations"
          />
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
