import React from 'react';
import { graphql } from 'gatsby';

import Mdx from '~components/mdx';
import LocalizedLink from '~components/localizedLink';

import PageLayout from './pageLayout';

const BlogItem = ({ data: { mdx } }) => (
  <PageLayout headerExtra={<LocalizedLink to="/blog">Blog</LocalizedLink>}>
    <div className="blog-post">
      <h4>
        {`${new Date(mdx.frontmatter.date).toLocaleDateString()} `}
        <small>{mdx.frontmatter.author}</small>
      </h4>
      <h1>{mdx.frontmatter.title}</h1>
      <Mdx code={mdx.body} />
    </div>
    <LocalizedLink to="/blog" className="button-link">
      <i className="fas fa-angle-left" />
      Back to Blog
    </LocalizedLink>
  </PageLayout>
);

export default BlogItem;

export const query = graphql`
  query BlogItem($locale: String!, $title: String!) {
    mdx(frontmatter: { title: { eq: $title } }, fields: { locale: { eq: $locale } }) {
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`;
