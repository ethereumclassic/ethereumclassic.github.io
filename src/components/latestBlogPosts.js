import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ButtonLink from './buttonLink';
import LatestBlogPostsItem from './latestBlogPostsItem';

const LatestBlogPosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query FrontPageBlogItems {
          allMdx(
            filter: { fields: { parent: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
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
      `}
      render={({ allMdx: { edges } }) => (
        <div className="latest-blog-posts">
          <div className="items">
            {edges.map(edge => (
              <LatestBlogPostsItem data={edge.node} key={edge.node.frontmatter.title} />
            ))}
          </div>
          <ButtonLink to="/blog" text="View all Blog Posts" icon="angle-right" />
        </div>
      )}
    />
  );
};

export default LatestBlogPosts;
