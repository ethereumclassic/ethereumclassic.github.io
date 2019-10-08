import React from "react"
import { graphql } from "gatsby"
import Mdx from "../components/mdx"

const Post = ({ data: { mdx } }) => (
  <div className="blogpost">
    <h1>{mdx.frontmatter.title}</h1>
    <Mdx code={mdx.code.body} />
  </div>
)

export default Post

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
