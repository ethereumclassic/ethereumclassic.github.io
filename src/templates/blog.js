import { graphql } from 'gatsby';

import LayoutNews from '../components/LayoutNews';

export default LayoutNews;

export const query = graphql`
  query($locale: String!) {
    items: allYamlI18N(
      filter: { locale: { eq: $locale }, type: { in: ["markdown"] } }
      sort: { fields: data___date, order: ASC }
    ) {
      nodes {
        id
        relativeDirectory
        data {
          title
          author
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
