import React from 'react';

import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

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

const Seo = props => {
  const { i18n, data = {} } = props;
  const {
    title,
    description,
    globals: { ui }
  } = i18n;
  return (
    <Location>
      {({ location: { pathname } }) => (
        <StaticQuery
          query={query}
          render={({ site: { siteMetadata } }) => {
            const { markdown: { excerpt, frontmatter: { linkImage } = {} } = {} } = data;
            const markdownImage = linkImage && linkImage.publicURL;
            const seo = {
              siteName: ui.title,
              locale: ui.metaLocale,
              lang: ui.htmlLang,
              bodyClass: ui.bodyClass,
              url: `${siteMetadata.siteUrl}${pathname}`,
              title: title ? `${title} - ${ui.title}` : ui.title,
              description: description || excerpt || ui.description,
              image: `${siteMetadata.siteUrl}${markdownImage || siteMetadata.image}`
            };
            return (
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
                {excerpt && <meta property="og:type" content="article" />}
                {/* twitter tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content={seo.image} />
              </Helmet>
            );
          }}
        />
      )}
    </Location>
  );
};

export default Seo;
