import React from "react"
import { graphql } from "gatsby"
import Mdx from "components/Mdx"
import LocalizedLink from "components/LocalizedLink"

const BlogPost = ({ data: { mdx } }) => (
  <>
  <div className="blog-post">
    <h4>
      {new Date(mdx.frontmatter.date).toLocaleDateString()}{' '}
      <small>{mdx.frontmatter.author}</small>
    </h4>
    <h1>{mdx.frontmatter.title}</h1>
    <Mdx code={mdx.body} />
  </div>
  <LocalizedLink to="/blog" className="button-link" >
    <i className="fas fa-angle-left" />
    Back to Blog
  </LocalizedLink>
  </>
)

export default BlogPost

export const query = graphql`
  query BlogPost($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`
