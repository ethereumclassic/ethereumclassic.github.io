import { graphql } from "gatsby";

import LayoutGlobal from "../components/globalLayout";
import Sitemap from "../components/sitemap";

// useNavItems primarily
// Include each Tag, Page
// Query all Mdx items
// exclude 404
// UI for collapsing other languages

export default function SitemapTemplate(props) {
  return (
    <LayoutGlobal {...props}>
      <a href="/sitemap.xml">For Robots</a>
      <Sitemap {...props} />
    </LayoutGlobal>
  );
}

export const pageQuery = graphql`
  query SitemapQuery {
    pages: allSitePage(sort: { order: ASC, fields: path }) {
      edges {
        node {
          path
        }
      }
    }
  }
`;
