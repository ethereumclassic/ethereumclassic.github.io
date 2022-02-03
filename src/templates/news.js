import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
import News from "../components/news";

export default function NewsTempalte(props) {
  // TODO set title to this tag's name
  return (
    <GlobalLayout {...props}>
      <News {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  fragment NewsDeets on NewsItem {
    id
    date
    locale
    author
    source
    link
    title
    newsType
  }

  query ($skip: Int!, $limit: Int!, $filterQuery: NewsItemFilterInput!) {
    items: allNewsItem(
      filter: $filterQuery
      sort: { fields: [date, title], order: [DESC, ASC] }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...NewsDeets
        }
      }
    }
  }
`;
