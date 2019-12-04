import React from 'react';
import { Location } from '@reach/router';

import { StaticQuery, graphql } from 'gatsby';
import config from '../i18n/config';
import { parseGlobals } from '../util';
import logo from '../assets/images/etc-black.svg';

import BackButton from '~components/backButton';
import SEO from '~components/seo';
import ButtonLink from '~components/buttonLink';

const query = graphql`
  query fourOhFour {
    locales: allFile(filter: { fields: { isGlobal: { eq: true } } }) {
      edges {
        node {
          fields {
            locale
            body
          }
        }
      }
    }
  }
`;

const NotFound = () => {
  return (
    <StaticQuery
      query={query}
      render={result => (
        <Location>
          {({ location }) => {
            // console.log(location);
            const { globals, homepath } = parseGlobals(location.pathname, result.locales, config);
            return (
              <>
                <SEO title={globals.notFound} />
                <div className="four-oh-four">
                  <img src={logo} alt={globals.title} />
                  <h1>{globals.notFoundText}</h1>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <BackButton text={globals.goBack} automatic />
                  <ButtonLink to={homepath} text={globals.navHome} />
                </div>
              </>
            );
          }}
        </Location>
      )}
    />
  );
};

export default NotFound;
