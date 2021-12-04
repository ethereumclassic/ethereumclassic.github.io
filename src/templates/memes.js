// import { graphql } from "gatsby";
import React from "react";

import GlobalLayout from "../components/globalLayout";
import Memes from "../components/memes";

export default function MemesLayout(props) {
  return (
    <GlobalLayout {...props}>
      <Memes {...props} />
    </GlobalLayout>
  );
}

// export const pageQuery = graphql`
//   query {
//     allContributorAvatar {
//       group(field: githubId) {
//         edges {
//           node {
//             githubId
//             githubImage {
//               childImageSharp {
//                 gatsbyImageData(
//                   width: 40
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
