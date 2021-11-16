import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
import News from "../components/news";

export default function NewsTempalte(props) {
  return (
    <GlobalLayout {...props}>
      <News {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!, $filterQuery: NewsItemFilterInput!) {
    items: allNewsItem(
      filter: $filterQuery
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          date
          author
          source
          link
          title
          blog
          parent {
            ... on Mdx {
              excerpt(pruneLength: 400)
            }
          }
        }
      }
    }
  }
`;
