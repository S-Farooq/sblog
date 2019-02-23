import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import CenterWrap from '../components/center-wrap';
import Posts from '../components/posts';
import postShape from '../shapes/post';
import SEO from '../components/SEO/SEO';

const Index = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <Layout>
  <SEO twitterCardType='summary'/>
    <CenterWrap>
      <h2>Blog Posts</h2>
      <Posts posts={posts.map(post => post.node)} />
    </CenterWrap>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(postShape),
    }),
  }).isRequired,
};

export default Index;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { 
        frontmatter: {exclude: {ne: 1}}, 
        fileAbsolutePath: {regex: "/(\/blog)/.*\\.md$/"}
        }
    ) {
      edges {
        node {
          id
          html
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            foldnum
            exclude
            readmore
            featuredImage {
                childImageSharp{
                    fluid(maxWidth: 750) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        }
      }
    }
  }
`;
