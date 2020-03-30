import React from 'react';

import { graphql } from 'gatsby';

import html from '../i18n/html';
import PageLayout from '~components/pageLayout';
import ButtonLink from '~components/buttonLink';
import Link from '~components/link';

const Sitemap = ({
  pageContext: { i18n, globals, defaultLocale },
  data: {
    allSitePage: { edges }
  }
}) => {
  const blogs = [];
  const rest = [];
  edges.forEach(({ node: { path, context } }) => {
    const item = {
      link: path,
      indent: path.split('/').length - (defaultLocale ? 1 : 2),
      name: context.title || context.i18n.title || globals.navHome,
      description: context.description || context.i18n.description
    };
    if (item.link.indexOf('/blog/') >= 0) {
      blogs.push(item);
    } else {
      rest.push(item);
    }
  });
  const sorted = [...rest, ...blogs];
  return (
    <PageLayout i18n={i18n}>
      <ButtonLink to={'/sitemap.xml'} text={i18n.xml} icon="code" style={{ float: 'right' }} />
      {html(i18n.intro)}
      <div className="sitemap">
        {sorted.map(i => (
          <Link to={i.link} notLocalized style={{ paddingLeft: `${i.indent}rem` }}>
            <div className="title">
              <b>{`${i.name} `}</b>
              <small>{i.link}</small>
            </div>
            <div className="text">{i.description}</div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Sitemap;

export const query = graphql`
  query Sitemap($locale: String!) {
    allSitePage(
      filter: { context: { locale: { eq: $locale } } }
      sort: { fields: path, order: ASC }
    ) {
      edges {
        node {
          context {
            title
            i18n {
              title
              description
            }
          }
          path
        }
      }
    }
  }
`;
