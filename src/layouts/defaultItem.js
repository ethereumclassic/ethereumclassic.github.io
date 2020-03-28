import React from 'react';
import { graphql } from 'gatsby';
import Mdx from '~components/mdx';

import SubPageLayout from '~components/subPageLayout';

const DefaultItem = ({ pageContext: { i18n }, data: { mdx } }) => {
  return (
    <SubPageLayout
      i18n={{
        ...i18n,
        ...mdx.frontmatter
      }}
    >
      <h1>{mdx.frontmatter.title}</h1>
      <Mdx code={mdx.body} />
    </SubPageLayout>
  );
};
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
        license
        contribute
      }
    }
  }
`;
