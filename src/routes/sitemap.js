import React from 'react';

import { graphql } from 'gatsby';

import html from '../i18n/html';
import PageLayout from '~components/pageLayout';
import ButtonLink from '~components/buttonLink';
import ItemTable from '~components/itemTable';

const Sitemap = ({
  pageContext: { i18n, globals },
  data: {
    allSitePage: { edges }
  }
}) => {
  const blogs = [];
  const rest = [];
  edges.forEach(({ node: { path, context } }) => {
    const item = { link: path, name: context.title || context.i18n.title || globals.navHome };
    if (item.link.indexOf('/blog/') >= 0) {
      blogs.push(item);
    } else {
      rest.push(item);
    }
  });
  return (
    <PageLayout i18n={i18n}>
      <ButtonLink to={'/sitemap.xml'} text={i18n.xml} icon="code" style={{ float: 'right' }} />
      {html(i18n.intro)}
      <ItemTable
        hideHead
        items={[...rest, ...blogs]}
        columns={[
          { key: 'name', type: 'link', notLocalized: true },
          { key: 'link', type: 'link', notLocalized: true }
        ]}
      />
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
            }
          }
          path
        }
      }
    }
  }
`;
