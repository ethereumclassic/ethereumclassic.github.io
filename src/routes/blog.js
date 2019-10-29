import React from 'react';
import { graphql } from 'gatsby';
import Link from '~components/link';
import DefaultLanguageHidden from '~components/defaultLanguageHidden';

import PageLayout from '../layouts/pageLayout';

const Blog = ({ data: { allMdx } }) => {
  return (
    <PageLayout>
      <DefaultLanguageHidden>
        <Link className="button-link" to="/blog" style={{ float: 'right', marginTop: '0' }}>
          Enlgish Posts
        </Link>
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
            <div key={`${post.frontmatter.title}-${post.fields.locale}`} className="blog-item">
              <h4>
                {`${new Date(post.frontmatter.date).toLocaleDateString()} `}
                <small>{post.frontmatter.author}</small>
              </h4>
              <h3>
                <Link to={`/${post.parent.relativeDirectory}`}>{post.frontmatter.title}</Link>
                <br />
              </h3>
              <div>
                {`${post.excerpt} `}
                <br />
                <Link to={`/${post.parent.relativeDirectory}`} className="read-more">
                  Continue Reading
                  <i className="fas fa-angle-right" />
                </Link>
              </div>
            </div>
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
