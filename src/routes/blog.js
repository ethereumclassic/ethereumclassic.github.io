import React from 'react';
import { graphql } from 'gatsby';
import ButtonLink from '~components/buttonLink';
import BlogListItem from '~components/blogListItem';
import DefaultLanguageHidden from '~components/defaultLanguageHidden';

import PageLayout from '../layouts/pageLayout';

const Blog = ({ data: { allMdx } }) => {
  return (
    <PageLayout seo={{ title: 'Blog', description: 'Latest news and articles' }}>
      <DefaultLanguageHidden>
        <ButtonLink notLocalized to="/blog" text="Enlgish Posts" />
      </DefaultLanguageHidden>
      <h1>Blog & Updates</h1>
      <h3>Latest Articles</h3>
      {allMdx.edges.length === 0 ? (
        <div>
          <br />
          No posts in this language
        </div>
      ) : (
        <div className="blog-list">
          {allMdx.edges.map(({ node: post }) => (
            <BlogListItem post={post} key={post.parent.relativeDirectory} />
          ))}
        </div>
      )}
    </PageLayout>
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
