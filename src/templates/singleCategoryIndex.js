import React from 'react';
import { Link } from 'gatsby';

const SingleCategoryTemplate = ({data, pageContext}) => {
  const { posts, categoryName } = pageContext;
  return (
    <div>
      <div>
        Posts about {`${categoryName}`}
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default SingleCategoryTemplate;
