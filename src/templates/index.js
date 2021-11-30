import React from 'react';
import { graphql } from 'gatsby';

import LayoutWithMenu from '../components/LayoutWithMenu';

import HomeBanner from '../components/HomeBanner';
import HomeIconGrid from '../components/HomeIconGrid';
import HomeStayCurrent from '../components/HomeStayCurrent';
import HomeSplit from '../components/HomeSplit';
import HomePlain from '../components/HomePlain';

const components = {
  banner: HomeBanner,
  split: HomeSplit,
  iconGrid: HomeIconGrid,
  plain: HomePlain,
  stayCurrent: HomeStayCurrent
};

const IndexTemplate = props => {
  const {
    data: { news },
    pageContext: { i18n }
  } = props;
  return (
    <LayoutWithMenu {...props} className="landing">
      {i18n.content.map(item => {
        const Component = components[item.type];
        return <Component key={item.key} data={item} i18n={i18n} news={news} />;
      })}
    </LayoutWithMenu>
  );
};

export default IndexTemplate;

export const query = graphql`
  query($locale: String!) {
    news: allYamlI18N(
      filter: {
        locale: { eq: $locale }
        type: { in: ["collection", "markdown"] }
        parentDirectory: { in: ["blog", "news"] }
        data: { tags: { nin: "application" } }
      }
      sort: { fields: data___date, order: DESC }
      limit: 10
    ) {
      nodes {
        id
        relativeDirectory
        type
        data {
          link
          tags
          title
          author
          source
          date
        }
        parent {
          ... on Mdx {
            excerpt(pruneLength: 100)
          }
        }
      }
    }
  }
`;
