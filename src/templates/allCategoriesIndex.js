import React from 'react';
import { Link } from 'gatsby';

const AllCategoriesTemplate = ({data, pageContext}) => {
  const { categories } = pageContext;
  return (
    <div>
      <h1>All Categories</h1>
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li key={index}>
              <Link to={`categories/${categoryName}`}>
                {categoryName}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default AllCategoriesTemplate;
