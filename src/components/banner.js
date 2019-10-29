import React from 'react';
import logo from '../assets/images/etc-black.svg';
import image from '../assets/images/vancouver.jpg';
import ButtonLink from './buttonLink';

const Banner = () => {
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
          Dapps
        </p>
      </header>
      <div className="content">
        <div className="overlay" style={{ textAlign: 'right', right: '4em', top: '4em' }}>
          <h3>Ethereum Classic Summit</h3>
          October 3rd & 4th, 2019
          <br />
          Vancouver Convention Centre
          <br />
          <br />
          <ButtonLink to="/summit/2019" icon="angle-right">
            View Presentations
          </ButtonLink>
        </div>
        <span className="image fill" data-position="center">
          <img src={image} alt="" />
        </span>
      </div>
    </section>
  );
};

export default Banner;
