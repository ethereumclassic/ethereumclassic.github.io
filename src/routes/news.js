/* eslint-disable no-underscore-dangle */
import React from 'react';
import { graphql } from 'gatsby';

import BlogListItem from '~components/blogListItem';
import MediaListItem from '~components/mediaListItem';
import NewsLayout from '~components/newsLayout';

const News = ({ data: { allMdx }, pageContext: { i18n, globals } }) => {
  // merge the blog with media links blog
  const items = allMdx.edges
    .map(i => ({ ...i, isBlog: true, date: i.node.frontmatter.date }))
    .concat(i18n.yaml.media.filter(i => i._localized))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <NewsLayout
      i18n={i18n}
      globals={globals}
      hasItems={items.length > 0}
      currentPage="news"
      rssLink={false}
    >
      {items.map(i =>
        i.isBlog ? (
          <BlogListItem i18n={globals} post={i.node} key={i.node.parent.relativeDirectory} />
        ) : (
          <MediaListItem {...i} key={i.key} />
        )
      )}
    </NewsLayout>
  );
};

export default News;

export const query = graphql`
  query News($locale: String!) {
    allMdx(
      filter: {
        fields: { locale: { eq: $locale }, parent: { eq: "blog" } }
        frontmatter: { unlisted: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            author
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;
