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
    slug
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
    $featuredFilterQuery: VideosCollectionFilterInput!
  ) {
    items: allVideosCollection(
      filter: $filterQuery
      skip: $skip
      limit: $limit
      sort: { fields: [date, title], order: [DESC, ASC] }
    ) {
      edges {
        node {
          ...VideoDeets
        }
      }
    }
    featured: allVideosCollection(
      sort: { fields: [date, title], order: [DESC, ASC] }
      filter: $featuredFilterQuery
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
