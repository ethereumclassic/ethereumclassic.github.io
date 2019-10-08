import React from "react"
import { graphql, Link } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import DefaultLanguageHidden from '../components/defaultLanguageHidden';

const Blog = ({ data: { allMdx } }) => {
  return (
    <>
      <h1>Blog</h1>
      <hr style={{ margin: `2rem 0` }} />
      <DefaultLanguageHidden>
        <Link to="/blog">Enlgish Posts</Link>
      </DefaultLanguageHidden>
      {allMdx.edges.length === 0 ?
        <div>
          <br/><br/>
          No posts in this language
        </div>
      :
        <ul className="post-list">
          {allMdx.edges.map(({ node: post }) => (
            <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
              <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
                {post.frontmatter.title}
              </LocalizedLink>
              <div>{post.frontmatter.date}</div>
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default Blog

export const query = graphql`
  query Blog($locale: String!) {
    allMdx(
      filter: {
        fields: {
          locale: {
            eq: $locale
          },
          pageType: {
            eq: "blogPost"
          }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
