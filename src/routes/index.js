import React from 'react';
import { graphql } from 'gatsby';

import html from '../i18n/html';

import GlobalLayout from '~components/globalLayout';
import Navigation from '~components/navigation';
import Footer from '~components/footer';
import Banner from '~components/banner';
import Section from '~components/section';
import WideSection from '~components/wideSection';
import IconGrid from '~components/iconGrid';
import ButtonLink from '~components/buttonLink';
import LatestBlogPosts from '~components/latestBlogPosts';

const Index = ({ pageContext: { i18n }, data: { file, allMdx: blogArticles } }) => (
  <GlobalLayout>
    <Navigation />
    <div id="wrapper">
      <Banner i18n={i18n} image={file.childImageSharp.fluid} />
      <Section subSection={() => html(i18n.whatIsClassic)}>{html(i18n.whatIsBlockchain)}</Section>
      <WideSection className="shaded">
        <IconGrid
          icons={[
            {
              title: i18n.decentralized,
              text: i18n.decentralizedText,
              icon: 'fas fa-users'
            },
            {
              title: i18n.immutable,
              text: i18n.immutableText,
              icon: 'fas fa-link'
            },
            {
              title: i18n.unstoppable,
              text: i18n.unstoppableText,
              icon: 'far fa-hourglass'
            }
          ]}
        />
      </WideSection>
      <WideSection className="dark">
        {html(i18n.getStarted)}
        <ButtonLink text={i18n.knowledgeBase} to="/knowledge" className="big" icon="angle-right" />
      </WideSection>
      <Section
        subSection={() => {
          return (
            <>
              {html(i18n.stayCurrent)}
              <ButtonLink
                text={i18n.contributeArticles}
                to="https://github.com/ethereumclassic/ethereumclassic.github.io"
                icon="angle-right"
              />
            </>
          );
        }}
      >
        <LatestBlogPosts articles={blogArticles} />
      </Section>
      <Footer />
    </div>
  </GlobalLayout>
);

export default Index;

export const query = graphql`
  query Landing($locale: String!) {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 80) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allMdx(
      filter: {
        fields: { locale: { eq: $locale }, parent: { eq: "blog" } }
      }
      limit: 3
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
