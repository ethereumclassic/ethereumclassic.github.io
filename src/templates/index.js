import { graphql } from "gatsby";
import React from "react";

import GlobalLayout from "../components/globalLayout";
import Landing from "../components/landing";

export default function LayoutLanding(props) {
  return (
    <GlobalLayout {...props}>
      <Landing {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  query {
    headlines: allNewsItem(
      filter: { tags: { in: "news" } }
      limit: 5
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...NewsDeets
        }
      }
    }
    videos: allVideosCollection(
      limit: 3
      sort: { fields: [date, title], order: [DESC, ASC] }
    ) {
      edges {
        node {
          ...VideoDeets
        }
      }
    }
    apps: allServicesAppsCollection(
      limit: 12
      sort: { fields: [date, title], order: [DESC, ASC] }
    ) {
      edges {
        node {
          ...AppDeets
        }
      }
    }
  }
`;
