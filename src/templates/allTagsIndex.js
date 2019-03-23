import React from 'react';
import { graphql, Link } from 'gatsby';

const AllTagsTemplate = ({data, pageContext}) => {
  console.log(pageContext);
  return (
    <div>
      Tags here for now.
    </div>
  )
};

export default AllTagsTemplate;
