import { graphql } from "gatsby";
import React from "react";

import GlobalLayout from "../components/globalLayout";
import About from "../components/about";

export default function AboutLayout(props) {
  return (
    <GlobalLayout {...props}>
      <About {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  query {
    contributors: allContributorAvatar {
      group(field: githubId, limit: 1) {
        totalCount
        edges {
          node {
            githubId
            githubImage {
              childImageSharp {
                gatsbyImageData(
                  width: 136
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
