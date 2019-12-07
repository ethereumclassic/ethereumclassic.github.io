import React from 'react';
import { graphql } from 'gatsby';

import Translate from '~components/translate';
import Mdx from '~components/mdx';
import Spacer from '~components/spacer';
import BackButton from '~components/backButton';

import PageLayout from '~components/pageLayout';

const KnowledgeItem = ({ data: { mdx } }) => {
  return (
    <Translate
      all={i18n => (
        <PageLayout
          link={{ to: '/knowledge', text: i18n.navKnowledge }}
          seo={{
            title: mdx.frontmatter.title,
            description: mdx.frontmatter.description
          }}
        >
          <BackButton text={i18n.knowledgeBase} to="/knowledge" />
          <Spacer />
          <h1>{mdx.frontmatter.title}</h1>
          <Mdx code={mdx.body} />
          <hr />
          <BackButton text={i18n.knowledgeBase} to="/knowledge" />
        </PageLayout>
      )}
    />
  );
};

export default KnowledgeItem;

export const query = graphql`
  query KnowledgeItem($locale: String!, $title: String!, $parent: String!) {
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
