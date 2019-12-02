import React from 'react';
import { graphql } from 'gatsby';

import html from '../i18n/html';
import ButtonLink from '~components/buttonLink';
import Mdx from '~components/mdx';
import BlogListItem from '~components/blogListItem';
import DefaultLanguageHidden from '~components/defaultLanguageHidden';
import PageLayout from '~components/pageLayout';

// TODO a way to show posts from all languages etc...

const Blog = ({ data: { allMdx }, pageContext: { i18n } }) => {
  return (
    <PageLayout seo={i18n}>
      {html(i18n.intro)}
      <ButtonLink
        text={i18n.submitArticle}
        to="https://github.com/ethereumclassic/ethereumclassic.github.io"
        icon="angle-right"
      />
      <hr />
      <h2>{i18n.latestArticles}</h2>
      {allMdx.edges.length === 0 ? (
        <div>
          <p>{i18n.noPosts}</p>
          <DefaultLanguageHidden>
            <ButtonLink notLocalized to="/blog" text={i18n.englishPosts} />
          </DefaultLanguageHidden>
        </div>
      ) : (
        <div className="blog-list">
          {allMdx.edges.map(({ node: post }) => (
            <BlogListItem post={post} key={post.parent.relativeDirectory} i18n={i18n} />
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
