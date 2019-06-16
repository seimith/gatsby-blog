import React from "react";
import { Link, graphql } from 'gatsby';
import Header from '../components/Header'

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <div class="media-object">
        <img src={'assets/me.jpg'} alt="Me doing things." class="avatar"/>
        <h1>Kaixo!</h1>
        <p>I <Link to='/categories/code' title='Technical posts.'>code</Link> some <Link to='/tags' title='All post categories.'>things</Link>, I <Link to='/categories/design' title='Design related posts.'>design</Link> sometimes, and I <a href="#" class="weekend">do random stuff</a> on the weekends.</p>
        <p>On <a href="https://twitter.com/themcsuth/" target="_blank" title="Twitter.">social</a> media I'm pretty dead.</p>
        <p>- "<a href="https://www.linkedin.com/in/seimith/" target="_blank" title="Reach out to me on LinkedIn for work-related inquiries.">Smith</a>"</p>
      </div>
      <div class="special-treat">
        🍭 Here's a <a href="#" class="treat" target="_blank">video</a>.
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
