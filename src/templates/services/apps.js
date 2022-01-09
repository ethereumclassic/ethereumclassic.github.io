import { graphql } from "gatsby";

import TaggedLayout from "../../components/taggedLayout";
import Apps from "../../components/apps";

export default function AppsTemplate(props) {
  return (
    <TaggedLayout {...props} field="types">
      <Apps {...props} />
    </TaggedLayout>
  );
}

export const pageQuery = graphql`
  fragment AppDeets on ServicesAppsCollection {
    id
    title
    author
    authorLink
    description
    type
    date
    slug
    verifiedContract
    openSource
    teamSite
    audit
    testSuite
    ipfsFrontend
    links {
      name
      link
    }
    image {
      childImageSharp {
        gatsbyImageData(width: 208, aspectRatio: 1)
      }
    }
  }

  query (
    $skip: Int!
    $limit: Int!
    $filterQuery: ServicesAppsCollectionFilterInput!
  ) {
    items: allServicesAppsCollection(
      filter: $filterQuery
      skip: $skip
      limit: $limit
      sort: { fields: [date, title], order: [DESC, ASC] }
    ) {
      edges {
        node {
          ...AppDeets
        }
      }
    }
  }
`;
