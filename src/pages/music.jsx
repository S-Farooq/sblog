import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import CenterWrap from '../components/center-wrap';
import Posts from '../components/posts';
import postShape from '../shapes/post';
import SEO from '../components/SEO/SEO';

const Music = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <Layout>
  <SEO twitterCardType='summary'/>
    <CenterWrap>
      <h2>Music Posts</h2>
      <p><i>
          I post album recommendations here along with what my interpretaions.
          (Check my Music Primer for how I interpret an album.)
        </i></p>
      <Posts posts={posts.map(post => post.node)} />
    </CenterWrap>
  </Layout>
);

Music.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(postShape),
    }),
  }).isRequired,
};

export default Music;

export const query = graphql`
  query MusicQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { 
        frontmatter: {exclude: {ne: 1}}, 
        fileAbsolutePath: {regex: "/(\/music)/.*\\.md$/"}
        }
    ) {
      edges {
        node {
          id
          html
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
