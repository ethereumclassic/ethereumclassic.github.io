import React from 'react';
import { Location } from '@reach/router';
import { StaticQuery, graphql } from 'gatsby';

import config from '../i18n/config';
import logo from '../assets/images/etc-black.svg';

import BackButton from '~components/backButton';
import SEO from '~components/seo';
import Redirect from '~components/redirect';
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
  const homePath = locale === config.defaultLocale ? '/' : `/${locale}`;
  return {
    homePath,
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
            const { globals, homePath } = parseGlobals(location.pathname, result.locales);

            const parentPath = location.pathname
              .split('/')
              .slice(0, -1)
              .join('/');

            return (
              <>
                <SEO title={globals.notFound} />
                <Redirect to={parentPath} />
                <div className="four-oh-four">
                  <img src={logo} alt={globals.title} />
                  <h1>{globals.notFoundText}</h1>
                  <BackButton text={globals.goBack} automatic />
                  <ButtonLink to={homePath} text={globals.navHome} />
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
