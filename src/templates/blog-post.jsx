/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import dateformat from 'dateformat';
import ReactDisqusComments from 'react-disqus-comments';
import styled from '@emotion/styled';
import site from '../shapes/site';
import Layout from '../components/layout';
import TagsList from '../components/tags-list';
import PostNav from '../components/post-nav';
import CodeStyle from '../emotion/code';
import pageContextShape from '../shapes/page-context';
import postShape from '../shapes/post';
import getPreFoldContent from '../util/getPreFoldContent';
import removeTags from '../util/removeTags';
import getPreviewHtml from '../util/getPreviewHtml';
import prune from 'underscore.string/prune';
import { Link as GatsbyLink } from 'gatsby';

import SEO from '../components/SEO/SEO';
import { HR } from '../components/header-footer-anchor';
import Img from "gatsby-image";

const Main = styled.main(({ theme }) => ({
  color: theme.textColor,
}));

const Header = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  [theme.smallMedia]: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
}));

const CoverImage = styled.div(({ theme }) => ({
  // margin:'0.2em',
  [theme.largeMedia]: {
    ...theme.centerPadding,
    alignItems: 'center',
    margin:'1em',
  }

}));

const Image = styled(Img)(({ theme }) => ({
  border: "0.1rem solid #333",
}));

const HeaderTitle = styled.h1(({ theme }) => ({
  width: '85%',
  marginBottom: theme.spacing,
  [theme.smallMedia]: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 0,
  },
}));

const HeaderDate = styled.time(({ theme }) => ({
  width: '15%',
  color: theme.datetimeColor,
  textAlign: 'right',
  [theme.smallMedia]: {
    width: '100%',
    textAlign: 'center',
  },
}));

const Footer = styled.footer(({ theme }) => ({
  ...theme.centerPadding,
}));

const PostWrap = styled.section(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  'h2,h3,h4' : {
    marginBottom:'0.1em',
  },
  '> *': {
    width: '100vw',
    wordWrap: 'break-word',
    ':not(.gatsby-highlight)': {
      ...theme.centerPadding,
    },
  },
  '.gatsby-resp-image-link' : {
    'img': {
      border: "0.1em solid #333",
    },
    
  },

  blockquote: {
    opacity:'0.85',
    fontFamily: 'Roboto, serif',
    
    '> p': {
      borderLeft: `0.2em #ffce7f solid`,
      borderRadius: '0.2em',

      paddingTop:'0.5em',
      paddingBottom:'0.5em',
      paddingLeft:'1.5em',
    //   ':before' :{
    //     content: "open-quote",
    //     position: 'absolute',
    //     left: '2.5em',
    //     // left: '40px',
    //     // top:'10px',
    //     color: '#ffce7f',
    //     fontSize:'4em',
    //     [theme.smallMedia]: {
    //       position: 'absolute',
    //       left: '40px',
    //     // top:'10px',
    //     },
    //  },
    },
    



  },

  // '> .gatsby-highlight > pre': {
  //   ...theme.centerPadding,
  //   paddingTop: theme.spacing,
  //   paddingBottom: theme.spacing,
  // },
  '>ul,>ol': {
    marginLeft: `${theme.spacingPx * 4}px`,
    width: `calc(100% - ${theme.spacingPx * 4}px)`,
    [theme.smallMedia]: {
      marginLeft: `${theme.spacingPx * 0}px`,
      width: `calc(100% - ${theme.spacingPx * 2}px)`,
    },
  },

  '>ul >li >p': {
    marginTop: '2px',
    marginBottom: '2px',
  },
}));

const PostNavWrap = styled.div(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: theme.spacing,

}));


const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { title, siteUrl } = data.site.siteMetadata;
  const { next, prev } = pageContext;

  const isProduction = process.env.NODE_ENV === 'production';
  const fullUrl = `${siteUrl}${post.frontmatter.path}`;
  const cardImage = post.frontmatter.cardImage ?
        post.frontmatter.cardImage: post.frontmatter.featuredImage
        
  return (
    <Layout>
      <CodeStyle />
      <Main>
        <SEO
          title={post.frontmatter.title}
          image={cardImage ?
            cardImage.childImageSharp.sizes.src: '' }
          description={post.frontmatter.description || removeTags(getPreviewHtml(post.html,'</p>',post.frontmatter.foldnum > 2 ? 2: post.frontmatter.foldnum)) || 'nothin’'}
          pathname={fullUrl}
          article
        />
        
        <article>
          
          <Header>
            <HeaderTitle>
              {post.frontmatter.title}
            </HeaderTitle>
            <HeaderDate dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}>
              {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
            </HeaderDate>
            <TagsList tags={post.frontmatter.tags} />
            <HR />
          </Header>
          
          {post.frontmatter.featuredImage ? <CoverImage>
            <Image fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            </CoverImage>: '' }

          
          <PostWrap dangerouslySetInnerHTML={{ __html: post.html }} />
          {/*<Footer>
            {isProduction && (
              <ReactDisqusComments
                shortname="shahamfarooq"
                identifier={post.frontmatter.path}
                title={post.frontmatter.title}
                url={fullUrl}
              />
            )}
          </Footer>*/}
          
        </article>
        <PostNavWrap>
        
          <PostNav prev post={prev} />
          <PostNav next post={next} />
        </PostNavWrap>
      </Main>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    site,
    markdownRemark: postShape,
  }).isRequired,
  pageContext: pageContextShape.isRequired,
};

export default BlogPost;

export const query = graphql`
  query BlogPostByPath($refPath: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $refPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        foldnum
        title
        description
        cardImage {
          childImageSharp{
            sizes(maxWidth: 750) {
                ...GatsbyImageSharpSizes
            }
          }
        }
        featuredImage {
                childImageSharp{
                    sizes(maxWidth: 750) {
                        ...GatsbyImageSharpSizes
                    }
                    fluid(maxWidth: 750) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
      }
    }
  }
`;
