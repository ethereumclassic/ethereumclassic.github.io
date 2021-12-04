import { graphql } from "gatsby";
import Json from "../../components/json";

import GlobalLayout from "../../components/globalLayout";
// import News from "../../components/news";
// import Videos from "../../components/videos";

export default function AppsTemplate(_props) {
  const { pageContext, i18n } = _props;
  const filter = pageContext.filter && i18n.tags[pageContext.filter];
  const content = filter || i18n;
  content.disclaimer = true;
  const props = {
    ..._props,
    i18n: { ..._props.i18n, ...content },
  };
  return (
    <GlobalLayout {...props}>
      <Json {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  query (
    $skip: Int!
    $limit: Int!
    $filterQuery: VideosCollectionFilterInput!
  ) {
    items: allVideosCollection(
      filter: $filterQuery
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...VideoDeets
        }
      }
    }
    featured: allVideosCollection(
      sort: { fields: date, order: DESC }
      filter: { featured: { eq: true } }
      limit: 3
    ) {
      edges {
        node {
          ...VideoDeets
        }
      }
    }
  }
`;
