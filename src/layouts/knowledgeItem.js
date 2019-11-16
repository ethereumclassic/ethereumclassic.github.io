import React from 'react';
import { graphql } from 'gatsby';
import EducationMenu from '~components/educationMenu';
import Mdx from '~components/mdx';
import Spacer from '~components/spacer';
import BackButton from '~components/backButton';

import PageLayout from '~components/pageLayout';

const EducationItem = ({ data: { mdx } }) => {
  return (
    <PageLayout
      link={{ to: '/knowledge', text: 'Knowledge' }}
      seo={{ title: mdx.frontmatter.title, description: mdx.frontmatter.metaDescription }}
    >
      <BackButton text="Knowledge Base" to="/knowledge" />
      <Spacer />
      <h1>{mdx.frontmatter.title}</h1>
      <Mdx code={mdx.body} />
      <hr />
      <EducationMenu compact />
    </PageLayout>
  );
};

export default EducationItem;

export const query = graphql`
  query EducationItem($locale: String!, $title: String!, $parent: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { parent: { eq: $parent }, locale: { eq: $locale } }
    ) {
      body
      frontmatter {
        title
        metaDescription
      }
    }
  }
`;
