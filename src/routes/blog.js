import React from 'react';
import { graphql } from 'gatsby';

import html from '../i18n/html';
import ButtonLink from '~components/buttonLink';
import BlogListItem from '~components/blogListItem';
import LocaleVisibility from '~components/localeVisibility';
import PageLayout from '~components/pageLayout';

// TODO a way to show posts from all languages etc...

const Blog = ({ data: { allMdx }, pageContext: { i18n } }) => {
  const hasPosts = allMdx.edges.length !== 0;
  return (
    <PageLayout seo={i18n}>
      {html(i18n.intro)}
      <ButtonLink
        text={i18n.submitArticle}
        to="https://github.com/ethereumclassic/ethereumclassic.github.io"
        icon="angle-right"
      />
      <hr />
      <LocaleVisibility hide={['en']}>
        <ButtonLink notLocalized to="/blog" text={i18n.englishPosts} style={{ float: 'right' }} />
      </LocaleVisibility>
      <h2>{hasPosts ? i18n.latestArticles : i18n.noPosts}</h2>
      <div className="blog-list">
        {hasPosts &&
          allMdx.edges.map(({ node: post }) => (
            <BlogListItem post={post} key={post.parent.relativeDirectory} i18n={i18n} />
          ))}
      </div>
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
