module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: 'Shaham Farooq',
    title: 'Blog.Shaham',
    siteUrl: 'https://blog.shaham.me',
    description: "Shaham's Blog",
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
          },
        }, {
          resolve: 'gatsby-remark-images',
          maxWidth: 750,
        }, {
          resolve: 'gatsby-remark-responsive-image',
          maxWidth: 750,
        }],
      },
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-110962916-3',
      },
    }, {
      resolve: 'gatsby-plugin-sitemap',
    }, {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://knpw.rs',
      },
    }, {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }`,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map(
            edge => Object.assign({}, edge.node.frontmatter, {
              description: edge.node.html,
              url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
              guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
              custom_elements: [{ 'content:encoded': edge.node.html }],
            }),
          ),
          query: `{
            allMarkdownRemark(
              limit: 1000,
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  html
                  frontmatter {
                    title
                    date
                    path
                  }
                }
              }
            }
          }`,
          output: '/rss.xml',
        }],
      },
    }],
};
