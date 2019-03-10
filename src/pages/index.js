import React from "react";
import { StaticQuery, graphql } from 'gatsby';

const TitleAndDecription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
};

const Header = () => {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `
      }
      render={data => <TitleAndDecription data={data}/>}
    />
  )
};

const Layout = () => {
  return (
    <div>
      <Header/>
    </div>
  )
};

export default Layout;
