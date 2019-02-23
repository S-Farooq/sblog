import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import CenterWrap from '../components/center-wrap';
import Posts from '../components/posts';
import postShape from '../shapes/post';
import SEO from '../components/SEO/SEO';
import styled from '@emotion/styled';

const P = styled.p(() => ({
  lineHeight: '1.5em',
  fontWeight: 400,
  fontSize:'0.8em',
  opacity:0.7,
}));

const Projects = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <Layout>
  <SEO twitterCardType='summary'/>
    <CenterWrap>
      <h2>Projects</h2>
      <P>
      You can read about 'all these things that I've done'. I generally do side projects around 
      Data Science and its potential usage for non-technical things 
      (fiction literary analysis, song recommendations, philosophy readings, etc.). 
      Occasionally, I'll write an essay.
        </P>
      <Posts posts={posts.map(post => post.node)} />
    </CenterWrap>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(postShape),
    }),
  }).isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { 
        frontmatter: {exclude: {ne: 1}}, 
        fileAbsolutePath: {regex: "/(\/projects)/.*\\.md$/"}
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
