const path = require('path');
const { pick } = require('lodash');


function createTagPages(createPage, edges) {
  const tagTemplate = path.resolve('src/templates/tags.jsx');
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags.split(', ')
          .forEach((tag) => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  Object.keys(posts)
    .forEach((tagName) => {
      const pageSize = 5;
      const pagesSum = Math.ceil(posts[tagName].length / pageSize);

      for (let page = 1; page <= pagesSum; page += 1) {
        createPage({
          path: page === 1 ? `/tag/${tagName}` : `/tag/${tagName}/page/${page}`,
          component: tagTemplate,
          context: {
            posts: posts[tagName],
            tag: tagName,
            pagesSum,
            page,
          },
        });
      }
    });
}

async function generateContent(createPage, graphqlResults) {
  if (graphqlResults.errors) {
    throw graphqlResults.errors;
  }

  const blogPostTemplate = path.resolve('src/templates/blog-post.jsx');
 
  const posts = graphqlResults.data.allMarkdownRemark.edges;
  const blogPosts = posts.filter(post => {  if (post.node.fileAbsolutePath.includes("/blog/")) return post; });
  const projectPosts = posts.filter(post => {  if (post.node.fileAbsolutePath.includes("/projects/")) return post; });
  

  createTagPages(createPage, posts);

  blogPosts.forEach(({ node }, index) => {
    const prev = index === blogPosts.length - 1 ? false : blogPosts[index + 1].node;
    const next = index === 0 ? false : blogPosts[index - 1].node;
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        refPath: node.frontmatter.path,
        prev: prev && pick(prev, ['frontmatter.title', 'frontmatter.path']),
        next: next && pick(next, ['frontmatter.title', 'frontmatter.path']),
      },
    });
  });

  projectPosts.forEach(({ node }, index) => {
    const prev = index === projectPosts.length - 1 ? false : projectPosts[index + 1].node;
    const next = index === 0 ? false : projectPosts[index - 1].node;
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        refPath: node.frontmatter.path,
        prev: prev && pick(prev, ['frontmatter.title', 'frontmatter.path']),
        next: next && pick(next, ['frontmatter.title', 'frontmatter.path']),
      },
    });
  });

  // const notebookTemplate = path.resolve('src/templates/notebook-post.jsx');

  // const notebooks = graphqlResults.data.allJupyterNotebook.edges;

  // notebooks.forEach(({ node }, index) => {
  //   createPage({
  //     path: node.metadata.kernelspec.name,
  //     component: notebookTemplate,
  //     context: {
  //       refPath: node.metadata.kernelspec.name,
  //     },
  //   });
  // });
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`{
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {exclude: {ne: 1}}}
      limit: 1000
    ) {
      edges {
        node {
          html
          id
          timeToRead
          fileAbsolutePath
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            title
            foldnum
            exclude
            featuredImage {
              childImageSharp{
                  fluid(maxWidth: 750) {
                    src
                      srcSet
                      aspectRatio
                      sizes
                      base64
                  }
              }
            }
          }
        }
      }
    }
  }`);
  return generateContent(createPage, result);
};
