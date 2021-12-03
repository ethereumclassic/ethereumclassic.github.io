import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
// import News from "../components/news";
import Json from "../components/json";

export default function VideosTempalte(props) {
  return (
    <GlobalLayout {...props}>
      <div>Videos</div>
      <Json>{props}</Json>
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
          title
        }
      }
    }
  }
`;
