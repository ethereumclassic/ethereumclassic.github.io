import React from 'react';
import { graphql } from 'gatsby';
import Mdx from '~components/mdx';

import PageLayout from '~components/pageLayout';
import SubMenu from '~components/subMenu';
import Spacer from '~components/spacer';
import BackButton from '~components/backButton';

const DefaultItem = ({
  pageContext: {
    i18n: { globals, menu }
  },
  data: { mdx }
}) => {
  const { backLinkTo, sectionTitle, backLinkText } = globals;
  const layoutLink = backLinkTo && { to: globals.backLinkTo, text: sectionTitle };
  const backLink = backLinkTo && <BackButton text={backLinkText || sectionTitle} to={backLinkTo} />;
  return (
    <PageLayout
      link={layoutLink}
      seo={{
        title: mdx.frontmatter.title,
        description: mdx.frontmatter.description
      }}
    >
      {backLink}
      {(menu || backLinkTo) && <Spacer />}
      <h1>{mdx.frontmatter.title}</h1>
      <Mdx code={mdx.body} />
      {backLinkTo && <hr />}
      {menu && <SubMenu items={menu} />}
      {backLink}
    </PageLayout>
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
      }
    }
  }
`;
