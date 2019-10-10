import React from "react"
import Mdx from "components/Mdx"

const Teams = ({ pageContext: { i18n } }) => {
  return (
    <Mdx code={i18n.mdx.teams} />
  )
}

export default Teams
