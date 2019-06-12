import React from "react";
import { Link, graphql } from 'gatsby';
import Header from '../components/Header'

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <h2>Index</h2>
      <Header/>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
            <p>{frontmatter.excerpt}</p>
          </div>
        )
      })}

      <div>
        <Link to='/tags'>Browse by Tag</Link>
        <br/>
        <Link to='/categories'>Browse by categories</Link>
      </div>
    </div>
  )
};

export const query = graphql`
  query HompageQuery {
    allMarkdownRemark(
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`

export default Layout;
