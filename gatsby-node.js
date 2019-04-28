const path = require('path');

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
  const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js');

  const postsByTag = {};

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach( tag => {
        if(!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node);
      })
    }
  })

  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    }
  });

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];

    createPage({
      path: `tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName,
      }

    })
  })
}


const createCategoryPages = (createPage, posts) => {
  const allCategoriesIndexTemplate = path.resolve('src/templates/allCategoriesIndex.js');
  const singleCategoriesIndexTemplate = path.resolve('src/templates/singleCategoryIndex.js');

  const postsByCategory = {};

  posts.forEach(({node}) => {
    if (node.frontmatter.categories) {
      node.frontmatter.categories.forEach( category => {
        if(!postsByCategory[category]) {
          postsByCategory[category] = []
        }

        postsByCategory[category].push(node);
      })
    }
  })

  const categories = Object.keys(postsByCategory);

  createPage({
    path: '/categories',
    component: allCategoriesIndexTemplate,
    context: {
      categories: categories.sort(),
    }
  });

  categories.forEach(categoryName => {
    const posts = postsByCategory[categoryName];

    createPage({
      path: `categories/${categoryName}`,
      component: singleCategoriesIndexTemplate,
      context: {
        posts,
        categoryName,
      }

    })
  })
}

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');
    resolve (
      graphql(
        `
          query {
            allMarkdownRemark (
              sort: {order: ASC, fields: [frontmatter___date]}
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                    categories
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        createTagPages(createPage, posts)
        createCategoryPages(createPage, posts)

        posts.forEach(({node}, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index -1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node,
            }
          });
          resolve();
        })
      })
    )
  });
});
