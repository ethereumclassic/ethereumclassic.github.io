import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

import LocaleContext from '../i18n/localeContext';

// from gatsby-config
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        url
        image
      }
    }
  }
`;

// TODO dynamic images, twitter username, etc, locale

const SEO = ({ title, description, article }) => {
  return (
    <Location>
      {({ location: { pathname } }) => {
        return (
          <StaticQuery
            query={query}
            render={({ site: { siteMetadata } }) => {
              // from i18n/config
              const { localeMetadata } = React.useContext(LocaleContext);
              // prevent 404 from erroring
              if (!localeMetadata) {
                return null;
              }
              const seo = {
                title:
                  !title || title === localeMetadata.title
                    ? localeMetadata.title
                    : `${title} - ${localeMetadata.title}`,
                siteName: localeMetadata.title,
                description: description || localeMetadata.description,
                url: `${siteMetadata.url}${pathname}`,
                image: `${siteMetadata.url}${siteMetadata.image}`,
                locale: siteMetadata.locale,
                lang: siteMetadata.lang
              };
              return (
                <>
                  <Helmet title={seo.title}>
                    {/* language */}
                    <html lang={seo.lang} />
                    {/* meta head */}
                    <meta name="description" content={seo.description} />
                    <meta name="image" content={seo.image} />
                    {/* social og tags */}
                    <meta property="og:site_name" content={seo.siteName} />
                    <meta property="og:title" content={seo.title} />
                    <meta property="og:description" content={seo.description} />
                    <meta property="og:image" content={seo.image} />
                    <meta property="og:locale" content={seo.locale} />
                    {seo.url && <meta property="og:url" content={seo.url} />}
                    {article && <meta property="og:type" content="article" />}
                    {/* twitter tags */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={seo.title} />
                    <meta name="twitter:description" content={seo.description} />
                    <meta name="twitter:image" content={seo.image} />
                    {/* 
                    // TODO other SEO data
                    {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
                    */}
                  </Helmet>
                </>
              );
            }}
          />
        );
      }}
    </Location>
  );
};

export default SEO;
