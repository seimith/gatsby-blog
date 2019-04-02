import React from 'react';
import { graphql, Link } from 'gatsby';

const Template = ({data, pageContext}) => {
  const { next , prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html
  const featuredImage = markdownRemark.frontmatter.featuredImage ? markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src : null;

  return (
    <div>
      <h1>{title}</h1>
      {featuredImage ? <img src={featuredImage}/> : null}
      <div className="blogpost" dangerouslySetInnerHTML={{__html: html}} />
      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
    </div>
  )
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 500, height: 500) {
              src
            }
          }
        }
      }
    }
  }
`;
export default Template;
