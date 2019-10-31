import React from 'react';
import { graphql } from 'gatsby';

import Mdx from '~components/mdx';
import Link from '~components/link';
import BackButton from '~components/backButton';
import Spacer from '~components/spacer';

import PageLayout from './pageLayout';

const BlogItem = ({ data: { mdx } }) => (
  <PageLayout headerExtra={<Link to="/blog">Blog</Link>} seo={{ title: mdx.frontmatter.title }}>
    <BackButton text="Blog Articles" to="/blog" />
    <Spacer />
    <div className="blog-post">
      <h4>
        {`${new Date(mdx.frontmatter.date).toLocaleDateString()} `}
        <small>{mdx.frontmatter.author}</small>
      </h4>
      <h1>{mdx.frontmatter.title}</h1>
      <Mdx code={mdx.body} />
    </div>
    <BackButton text="Blog Articles" to="/blog" />
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
