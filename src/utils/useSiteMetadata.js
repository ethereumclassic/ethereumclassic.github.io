import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteUrl
          socialImage
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
