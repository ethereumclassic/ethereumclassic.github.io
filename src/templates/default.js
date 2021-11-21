import { graphql } from "gatsby";

import LayoutGlobal from "../components/globalLayout";
import Content from "../components/content";

export default function DefaultTempalte(props) {
  return (
    <LayoutGlobal {...props}>
      <Content {...props} />
    </LayoutGlobal>
  );
}

export const pageQuery = graphql`
  query MDXQuery($mdxSlug: String) {
    mdx(slug: { eq: $mdxSlug }) {
      body
      toc: tableOfContents
      excerpt(pruneLength: 199, truncate: false)
      headings(depth: h1) {
        value
      }
      contributors: childrenContributorAvatar {
        githubId
      }
      meta: frontmatter {
        title
        license
        description
        contribute
        date
        author
        contributors
      }
    }
  }
`;
