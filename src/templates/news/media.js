import { graphql } from 'gatsby';

import LayoutNews from '../../components/LayoutNews';

export default LayoutNews;

export const query = graphql`
  query($locale: String!) {
    items: allYamlI18N(
      filter: { locale: { eq: $locale }, type: { in: ["collection"] } }
      sort: { fields: data___date, order: ASC }
    ) {
      nodes {
        id
        data {
          link
          title
          author
          source
          date
        }
      }
    }
  }
`;
