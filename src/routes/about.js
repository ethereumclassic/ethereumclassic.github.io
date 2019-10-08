import React from "react"
import useTranslations from "../components/useTranslations"
import Mdx from "../components/mdx"

const About = ({ pageContext: { i18n } }) => {
  return (
    <>
      <h1>About</h1>
      {JSON.stringify(useTranslations())}
      <br/><br/>
      {JSON.stringify(i18n.json)}
      <br/><br/>
      <Mdx code={i18n.mdx.testing} />
    </>
  )
}

export default About
