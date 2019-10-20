import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MdxLink from "./mdxLink"

const Mdx = ({ code, components }) => {
  return (
    <MDXRenderer
      components={{
        a: MdxLink,
        ...components
      }}
    >
      {code}
    </MDXRenderer>
  )
}

export default Mdx
