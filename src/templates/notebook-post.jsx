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
import postShape from '../shapes/notebook';
import getPreFoldContent from '../util/getPreFoldContent';
import removeTags from '../util/removeTags';
import getPreviewHtml from '../util/getPreviewHtml';
import prune from 'underscore.string/prune';
import { Link as GatsbyLink } from 'gatsby';
import { withPrefix } from 'gatsby'
// import jsb from '../../static/portland_unemployment'
import SEO from '../components/SEO/SEO';
import { HR } from '../components/header-footer-anchor';
import Img from "gatsby-image";

// try {
//     jsb = require('../images/portland_unemployment')
//   } catch (e) {
//     console.log(e)
//   }

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
  '> *': {
    width: '100vw',
    wordWrap: 'break-word',
    ':not(.gatsby-highlight)': {
    //   ...theme.centerPadding,
    padding: 20,
    
    paddingLeft:100,
    paddingRight:100,
    [theme.smallMedia]: {
        padding: 10,
        paddingLeft:10,
        paddingRight:10,
      },
    },
  },
  '.sc-bwzfXH': {
      display:'none',
  },
  ' img': {
    width: '100%',
    // height: '100%',
    // wordWrap: 'break-word',
    // ':not(.gatsby-highlight)': {
    //   ...theme.centerPadding,
    // },
  },
  '.sc-gzVnrw': {
      marginTop:50,
  },
  '> .gatsby-highlight > pre': {
    // ...theme.centerPadding,
    // paddingTop: theme.spacing,
    // paddingBottom: theme.spacing,
  },
  '>ul,>ol': {
    marginLeft: `${theme.spacingPx * 4}px`,
    width: `calc(100% - ${theme.spacingPx * 4}px)`,
    [theme.smallMedia]: {
      marginLeft: `${theme.spacingPx * 0}px`,
      width: `calc(100% - ${theme.spacingPx * 2}px)`,
    },
  },
}));

const PostNavWrap = styled.div(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: theme.spacing,

}));


class NotebookPost extends React.Component {


    componentDidMount () {
        const tripadvisorLeft = document.createElement("script");
        tripadvisorLeft.id = "10b8081a-1350-4b67-9e70-ef14e10d59e3";
        tripadvisorLeft.async = true;
        document.getElementById('bokehmap').appendChild(tripadvisorLeft);
        require('../images/portland_unemployment');
        // this.setState({
        //     mounted: !this.state.mounted
        //   })
    }

    togglePics = (event) => {
        event.preventDefault();
        window.location.reload();
        }

    

  
    render() {
        const { data, pageContext } = this.props;
  const { jupyterNotebook: post } = data;

//   require('../images/portland_unemployment');

  const { title, siteUrl } = data.site.siteMetadata;
//   const { next, prev } = pageContext;

//   const isProduction = process.env.NODE_ENV === 'production';
//   const fullUrl = `${siteUrl}${post.frontmatter.path}`;
//   const cardImage = post.frontmatter.cardImage ?
//         post.frontmatter.cardImage: post.frontmatter.featuredImage
    // const jssrc = withPrefix('portland_unemployment.js');
  return (
    <Layout>
      <CodeStyle />
      <Main>
        {/* <SEO
          title={post.frontmatter.title}
          image={cardImage ?
            cardImage.childImageSharp.sizes.src: '' }
          description={post.frontmatter.description || removeTags(getPreviewHtml(post.html,'</p>',post.frontmatter.foldnum > 2 ? 2: post.frontmatter.foldnum)) || 'nothin’'}
          pathname={fullUrl}
          article
        /> */}
        <article>
            {/* <a onClick={this.togglePics}>ref</a> */}
        
          {/* <Header>
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
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} style={{border: "0.1rem solid #333"}} />
            </CoverImage>: '' } */}
    
 <PostWrap id ="bokehmap"></PostWrap>
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
        {/* <PostNavWrap>
        
          <PostNav prev post={prev} />
          <PostNav next post={next} />
        </PostNavWrap> */}
      </Main>
    </Layout>
  );
};
};

NotebookPost.propTypes = {
  data: PropTypes.shape({
    site,
    jupyterNotebook: postShape,
  }).isRequired,
  pageContext: pageContextShape.isRequired,
};

export default NotebookPost;

export const query = graphql`
  query NotebookPostByPath($refPath: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    jupyterNotebook(metadata: {kernelspec: {name: { eq: $refPath }} }) {
        id
        metadata {
            kernelspec {
                name
                language
                display_name
            }
        }
        html
        json {
            nbformat
            nbformat_minor
            cells {
                cell_type
                execution_count
            }
        }
        internal {
            content
        }
    }
      
  }
`;
