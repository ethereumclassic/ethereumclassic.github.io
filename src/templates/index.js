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
  query ($locale: String!) {
    headlines: allNewsItem(
      filter: {
        locale: { eq: $locale }
        tags: { in: "news" }
        unlisted: { ne: true }
      }
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
      filter: { locale: { eq: $locale }, unlisted: { ne: true } }
      sort: { fields: [date, title], order: [DESC, ASC] }
    ) {
      edges {
        node {
          ...VideoDeets
        }
      }
    }
    videosEn: allVideosCollection(
      limit: 3
      filter: { locale: { eq: "en" }, unlisted: { ne: true } }
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
      filter: { locale: { eq: $locale }, unlisted: { ne: true } }
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
