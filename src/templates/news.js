import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
import News from "../components/news";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function NewsTempalte(props) {
  const {
    ui: { tagNames },
  } = useGlobals();
  const categoryTitle = tagNames[props.pageContext.filter];
  const title = categoryTitle
    ? `${categoryTitle} - ${props.i18n.title}`
    : props.i18n.title;
  return (
    <GlobalLayout {...props} i18n={{ ...props.i18n, title }}>
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
