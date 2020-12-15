import React from 'react';

import Img from 'gatsby-image';

import { StaticQuery, graphql } from 'gatsby';
// TODO make this responsive

import Link from './Link';
import Phoenix from './Phoenix';

import Md from './Markdown';
import NewsItems from './NewsItems';

const HomeBanner = ({
  data: i18n,
  news: items,
  i18n: {
    globals: { news }
  }
}) => {
  return (
    <>
      <section className="intro">
        <header>
          <h1>
            <div className="logo" />
            {i18n.title}
          </h1>
          <Md>{i18n.subtitle}</Md>
        </header>
        <div className="content">
          {/* 
          <div className="overlay dark">
            <h3>{i18n.bannerTitle}</h3>
            <Md>{i18n.bannerText}</Md>
            <Link next button to={i18n.button.link}>
              {i18n.button.text}
            </Link>
          </div> 
          */}
          <div className="overlay dark">
            <h3>{news.latestNews}</h3>
            <NewsItems items={items.nodes} className="widen scrolly" />
            <Link to="/news" next button>
              {news.allNews}
            </Link>
            <Link
              to="https://github.com/ethereumclassic/ethereumclassic.github.io#general-instructions"
              className="float-right"
              icon="pencil-alt"
              button
            >
              {news.submitNews}
            </Link>
          </div>
          <span className="image fill" data-position="center">
            <StaticQuery
              query={graphql`
                query BannerImage {
                  file(relativePath: { eq: "banner.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1200, quality: 80) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
              `}
              render={({ file }) => (
                <Img
                  fadeIn={false}
                  loading="eager"
                  fluid={file.childImageSharp.fluid}
                  style={{ position: 'initial', height: '100%' }}
                />
              )}
            />
          </span>
        </div>
      </section>
      <Phoenix />
    </>
  );
};

export default HomeBanner;
