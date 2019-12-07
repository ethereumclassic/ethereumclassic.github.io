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
        siteUrl
        image
      }
    }
  }
`;

const SEO = ({ title, description, article, image }) => {
  return (
    <Location>
      {({ location: { pathname } }) => {
        return (
          <StaticQuery
            query={query}
            render={({ site: { siteMetadata } }) => {
              // from i18n/config
              const { globals } = React.useContext(LocaleContext);
              // prevent 404 from erroring
              if (!globals) {
                return null;
              }
              // resolved SEO params
              const seo = {
                title:
                  !title || title === globals.title ? globals.title : `${title} - ${globals.title}`,
                siteName: globals.title,
                description: description || globals.description,
                url: `${siteMetadata.siteUrl}${pathname}`,
                image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
                locale: globals.metaLocale,
                lang: globals.htmlLang,
                bodyClass: globals.bodyClass
              };
              return (
                <>
                  <Helmet title={seo.title}>
                    {/* language */}
                    <html lang={seo.lang} />
                    <body className={seo.bodyClass} />
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
