import React from "react";
import logo from '../assets/images/etc-black.svg';
import image from '../assets/images/10.jpg';

const Banner = () => {
  return (
    <section className="intro">
      <header>
        <h1>
          <img className="logo" src={logo} alt="Ethereum Classic Logo" />
          Ethereum Classic
        </h1>
        <p>Decentralized. Immutable. Unstoppable.</p>
      </header>
      <div className="content">
        <span className="image fill" data-position="center"><img src={image} alt="" /></span>
      </div>
    </section>
  )
};

export default Banner;
