import React from "react"
import LocalizedLink from "./LocalizedLink"

const isHash = str => /^#/.test(str)
const isInternal = to => /^\/(?!\/)/.test(to)

// Only use <LocalizedLink /> for internal links
const MdxLink = ({ href, ...props }) =>
  isHash(href) || !isInternal(href) ? (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer" />
  ) : (
    <LocalizedLink {...props} to={href} />
  )

export default MdxLink
