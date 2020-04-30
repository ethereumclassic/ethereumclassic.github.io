import { graphql } from 'gatsby';

import LayoutMarkdown from '../components/LayoutMarkdown';

export default LayoutMarkdown;

export const query = graphql`
  query($mdxId: String!) {
    markdown: mdx(id: { eq: $mdxId }) {
      body
      excerpt
      frontmatter {
        linkImage {
          publicURL
        }
      }
    }
  }
`;
