import { graphql } from "gatsby";

import TaggedLayout from "../components/taggedLayout";
import Videos from "../components/videos";

export default function VideosTempalte(props) {
  return (
    <TaggedLayout {...props}>
      <Videos {...props} />
    </TaggedLayout>
  );
}

export const pageQuery = graphql`
  fragment VideoDeets on VideosCollection {
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
