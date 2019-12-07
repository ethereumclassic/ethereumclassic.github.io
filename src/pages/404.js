import React from 'react';
import { Location } from '@reach/router';

import { StaticQuery, graphql } from 'gatsby';
import config from '../i18n/config';
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

// TODO fallback up the URL tree automatically

function getLocaleFromPath({ defaultLocale, locales }, pathname) {
  const potential = pathname.split('/')[1];
  const match = Object.keys(locales).find(locale => locale === potential);
  return match || defaultLocale;
}

function parseResult(result, locale) {
  const edge = result.edges.find(({ node }) => node.fields.locale === locale);
  return JSON.parse(edge.node.fields.body);
}

function parseGlobals(pathname, result) {
  const locale = getLocaleFromPath(config, pathname);
  const fallback = parseResult(result, config.defaultLocale);
  const translation = parseResult(result, locale);
  const homepath = locale === config.defaultLocale ? '/' : `/${locale}`;
  return {
    homepath,
    globals: { ...fallback, ...translation }
  };
}

const NotFound = () => {
  return (
    <StaticQuery
      query={query}
      render={result => (
        <Location>
          {({ location }) => {
            const { globals, homepath } = parseGlobals(location.pathname, result.locales);
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
