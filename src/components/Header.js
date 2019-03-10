import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import TitleAndDecription from '../components/TitleAndDecription'

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
      render = {data => <TitleAndDecription data={data}/>}
    />
  )
};

export default Header;
