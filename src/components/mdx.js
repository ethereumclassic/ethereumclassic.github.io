import React from "react"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import MdxLink from "./mdxLink"

const Mdx = ({ code }) => (
  <MDXRenderer
    components={{
      a: MdxLink,
    }}
  >
    {code}
  </MDXRenderer>
)

export default Mdx
