import React from 'react';
import { graphql } from 'gatsby';
import Mdx from '~components/mdx';

import PageLayout from '~components/pageLayout';

const DefaultItem = ({ data: { mdx } }) => (
  <PageLayout seo={{ title: mdx.frontmatter.title, description: mdx.frontmatter.description }}>
    <h1>{mdx.frontmatter.title}</h1>
    <Mdx code={mdx.body} />
  </PageLayout>
);

export default DefaultItem;

export const query = graphql`
  query DefaultItem($locale: String!, $title: String!, $parent: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { parent: { eq: $parent }, locale: { eq: $locale } }
    ) {
      body
      frontmatter {
        title
        description
      }
    }
  }
`;
