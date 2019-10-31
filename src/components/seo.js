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
      }
    }
  }
`;

// from passed props
const SEO = ({ title, description }) => {
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
                title,
                description: description || localeMetadata.description,
                url: `${siteMetadata.url}${pathname}`
              };
              return (
                <>
                  <Helmet
                    title={seo.title}
                    defaultTitle={localeMetadata.title}
                    titleTemplate={`%s - ${localeMetadata.title}`}
                  >
                    <meta name="description" content={seo.description} />
                    {/* 
                    // TODO other SEO data
                    <meta name="image" content={seo.image} />
                    {seo.url && <meta property="og:url" content={seo.url} />}
                    {(article ? true : null) && <meta property="og:type" content="article" />}
                    {seo.title && <meta property="og:title" content={seo.title} />}
                    {seo.description && <meta property="og:description" content={seo.description} />}
                    {seo.image && <meta property="og:image" content={seo.image} />}
                    <meta name="twitter:card" content="summary_large_image" />
                    {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
                    {seo.title && <meta name="twitter:title" content={seo.title} />}
                    {seo.description && <meta name="twitter:description" content={seo.description} />}
                    {seo.image && <meta name="twitter:image" content={seo.image} />}
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
