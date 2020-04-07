import React from 'react';
import { graphql } from 'gatsby';

import Translate from '~components/translate';
import Mdx from '~components/mdx';
import BackButton from '~components/backButton';

import PageLayout from '~components/pageLayout';

const BlogItem = ({
  data: { mdx },
  pageContext: {
    i18n: { globals }
  }
}) => (
  <PageLayout
    link={{ to: globals.backLinkTo, text: globals.sectionTitle }}
    i18n={{
      title: mdx.frontmatter.title,
      description: mdx.frontmatter.description || mdx.excerpt,
      image: mdx.frontmatter.linkImage && mdx.frontmatter.linkImage.childImageSharp.fixed.src,
      article: true
    }}
  >
    <div className="blog-post">
      <h1>{mdx.frontmatter.title}</h1>
      <h3>
        <Translate date={mdx.frontmatter.date} />
        <small>{` ${mdx.frontmatter.author}`}</small>
      </h3>
      <Mdx code={mdx.body} />
    </div>
    <hr />
    <BackButton text={<Translate text="allBlogPosts" />} to="/blog" />
  </PageLayout>
);

export default BlogItem;

export const query = graphql`
  query BlogItem($locale: String!, $title: String!) {
    mdx(frontmatter: { title: { eq: $title } }, fields: { locale: { eq: $locale } }) {
      body
      excerpt
      frontmatter {
        title
        date
        author
        description
        linkImage {
          childImageSharp {
            fixed(height: 256, quality: 80) {
              src
            }
          }
        }
      }
    }
  }
`;
