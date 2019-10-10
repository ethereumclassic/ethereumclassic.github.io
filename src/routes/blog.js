import React from "react"
import { graphql, Link } from "gatsby"
import LocalizedLink from "components/LocalizedLink"
import DefaultLanguageHidden from 'components/DefaultLanguageHidden';

const Blog = ({ data: { allMdx } }) => {
  return (
    <>
        <DefaultLanguageHidden>
          <Link className="button-link" to="/blog" style={{ float: 'right', marginTop: '0' }}>Enlgish Posts</Link>
        </DefaultLanguageHidden>
      <h2>
        Latest Articles
      </h2>
      <hr style={{ margin: `2rem 0` }} />
      {allMdx.edges.length === 0 ?
        <div>
          <br/>
          No posts in this language
        </div>
      :
        <div className="blog-list">
          {allMdx.edges.map(({ node: post }) => (
            <div key={`${post.frontmatter.title}-${post.fields.locale}`} className="blog-item">
              <h4>
                {new Date(post.frontmatter.date).toLocaleDateString()}{' '}
                <small>{post.frontmatter.author}</small>
              </h4>
              <h3>
                <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
                  {post.frontmatter.title}
                </LocalizedLink>
                <br/>
              </h3>
              <div>
                {post.excerpt}{' '}
                <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
                  Continue reading
                  <i className="fas fa-angle-right"></i>
                </LocalizedLink>
              </div>
            </div>
          ))}
        </div>
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
          excerpt
          frontmatter {
            title
            date
            author
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
