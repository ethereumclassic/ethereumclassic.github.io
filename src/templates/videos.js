import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
// import News from "../components/news";
import Videos from "../components/videos";

export default function VideosTempalte(_props) {
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
      <Videos {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  fragment VideoDeets on VideosVideosCollection {
    id
    date
    locale
    youtube
    title
    description
    author
    authorYoutube
    videoImage {
      childImageSharp {
        gatsbyImageData(
          width: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }

  query (
    $skip: Int!
    $limit: Int!
    $filterQuery: VideosVideosCollectionFilterInput!
  ) {
    items: allVideosVideosCollection(
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
    featured: allVideosVideosCollection(
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
