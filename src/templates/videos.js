import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
// import News from "../components/news";
import Videos from "../components/videos";

export default function VideosTempalte(props) {
  return (
    <GlobalLayout {...props}>
      <Videos {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  query (
    $skip: Int!
    $limit: Int!
    $filterQuery: VideosVideosCollectionFilterInput!
  ) {
    items: allVideosVideosCollection(
      filter: $filterQuery
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          date
          locale
          youtube
          title
          description
          localImage {
            childImageSharp {
              gatsbyImageData(
                width: 250
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
