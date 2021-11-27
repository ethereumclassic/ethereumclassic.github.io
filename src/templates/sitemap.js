import { graphql } from "gatsby";

import LayoutGlobal from "../components/globalLayout";
import Sitemap from "../components/sitemap";

export default function SitemapTemplate(props) {
  return (
    <LayoutGlobal {...props}>
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
