import React from 'react';
import { graphql } from 'gatsby';

import BlogListItem from '~components/blogListItem';
import NewsLayout from '~components/newsLayout';

const Blog = ({ data: { allMdx }, pageContext: { i18n, globals } }) => {
  return (
    <NewsLayout
      i18n={i18n}
      globals={globals}
      currentPage="blog"
      rssLink={'https://ethereumclassic.org/rss.xml'}
      hasItems={allMdx.edges.length > 0}
    >
      {allMdx.edges.map(({ node: post }) => (
        <BlogListItem i18n={globals} post={post} key={post.parent.relativeDirectory} />
      ))}
    </NewsLayout>
  );
};

export default Blog;

export const query = graphql`
  query Blog($locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale }, parent: { eq: "blog" } } }
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
