import { graphql } from 'gatsby';

import LayoutNews from '../components/LayoutNews';

export default LayoutNews;

export const query = graphql`
  query($locale: String!, $skip: Int!, $limit: Int!, $yearQuery: String!, $tagQuery: [String]) {
    items: allYamlI18N(
      filter: {
        locale: { eq: $locale }
        type: { in: ["collection", "markdown"] }
        parentDirectory: { in: ["blog", "news"] }
        data: { tags: { in: $tagQuery }, date: { glob: $yearQuery } }
      }
      sort: { fields: data___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        relativeDirectory
        type
        data {
          link
          tags
          title
          author
          source
          date
        }
        parent {
          ... on Mdx {
            excerpt
          }
        }
      }
    }
  }
`;
