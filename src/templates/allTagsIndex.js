import React from 'react';
import { Link } from 'gatsby';

const AllTagsTemplate = ({data, pageContext}) => {
  const { tags } = pageContext;
  return (
    <div>
      <h1>All Tags</h1>
      <ul>
        {tags.map((tagName, index) => {
          return (
            <li key={index}>
              <Link to={`tags/${tagName}`}>
                {tagName}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default AllTagsTemplate;
