import { graphql } from "gatsby";

import TaggedLayout from "../../components/taggedLayout";
import Apps from "../../components/apps";

export default function AppsTemplate(props) {
  return (
    <TaggedLayout {...props}>
      <Apps {...props} />
    </TaggedLayout>
  );
}

export const pageQuery = graphql`
  query (
    $skip: Int!
    $limit: Int!
    $filterQuery: ServicesAppsCollectionFilterInput!
  ) {
    items: allServicesAppsCollection(
      filter: $filterQuery
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          name
          image {
            childImageSharp {
              gatsbyImageData(width: 250, aspectRatio: 1, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
