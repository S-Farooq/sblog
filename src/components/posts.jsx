import React from 'react';
import dateformat from 'dateformat';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import groupBy from 'lodash/groupBy';
import last from 'lodash/last';
import { Link as GatsbyLink } from 'gatsby';
import TagsList from './tags-list';
import getPreFoldContent from '../util/getPreFoldContent';
import removeTags from '../util/removeTags';
import getPreviewHtml from '../util/getPreviewHtml';
import prune from 'underscore.string/prune';
import Img from "gatsby-image";
import { AiconLink, AiconLabel } from './header-footer-anchor';
import { FaBars, FaImages } from 'react-icons/fa';

const groupPosts = posts => groupBy(posts, p => 
  (
  'Latest'
    )
    );

const Header = styled.header(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.smallMedia]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
}));

const H3 = styled.h3(({ theme }) => ({
  marginBottom: theme.spacing,
  color: theme.accentColor,
}));

const Article = styled.article(({ theme }) => ({
  
  borderRadius: '00px',
  padding: '15px',
  borderTop: `1px solid #D6D6D6`,
  WebkitBackgroundClip: 'padding-box', 
  backgroundClip: 'padding-box',
  transition: 'color 100ms linear',
  // ':hover': {
  //   backgroundColor: 'rgba(39, 38, 34)',
  //   backgroundColor: 'rgba(39, 38, 34, .05)',
  // },
}));

const CoverImage = styled.div(({ theme }) => ({
  margin: '15px',
  marginLeft:'40px',
  marginRight:'40px',
  alignItems: 'center',
  [theme.smallMedia]: {
    margin: '0px',
    marginTop: '10px',
    marginBottom: '10px',
  },

}));

const H4 = styled.div(({ theme }) => ({
  margin: 0,
  letterSpacing: "-0.08rem",
  [theme.smallMedia]: {
    fontSize:'0.9em',
    fontWeight: '400',
  },

}));

const Time = styled.time(({ theme }) => ({
  fontSize: '0.90rem',
  letterSpacing: "-0.04rem",
  color: theme.datetimeColor,
}));

const Link = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  fontSize:'1.8rem',
  color: theme.textColor,
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

const ReadLink = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  letterSpacing: '-0.05rem',
  padding: '15px',
  fontSize:'1.2rem',
  color: theme.accentColor,
  textAlign:'right',
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.textColor,
  },
  borderBottom: '10px',
  [theme.smallMedia]: {
    padding: '0px',
  },
}));

const ReadLinkA = styled.a(({ theme }) => ({
  textDecoration: 'none',
  padding: '15px',
  fontSize:'1.2rem',
  color: theme.accentColor,
  textAlign:'right',
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.textColor,
  },
  borderBottom: '10px',
  [theme.smallMedia]: {
    padding: '0px',
  },
}));

const TextPreview = styled.div(({ theme }) => ({
  padding: '15px',
  paddingLeft:'40px',
  paddingRight:'40px',
  [theme.smallMedia]: {
    padding: '0px',
  },
  opacity:1.0,
  color: theme.textColor,
  '>p': {
    fontSize:'1.1rem',
    lineHeight: '1.6rem',
  },
  'blockquote > p': {
    margin:0,
    paddingLeft:0,
    paddingRight:0,
    fontSize:'1.0rem',
    lineHeight: '1.4rem',
  },
}));

const TopView = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom:10,

  // display: 'flex',
  // justifyContent: 'flex-end',
  // '> a' : {
  //   marginRight:15,
  // },
}));

const QuickViewDiv = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems:'center',
  '> a' : {
    marginRight:15,
    alignText: 'center',
    // verticalAlign:'middle',
    lineHeight:1,
  },
}));

const QuickViewLink = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.datetimeColor,
  fontSize: '40px',
  transition: 'color 100ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));



class Posts extends React.Component {

  state = { quickView: 'block', imgShow: 'block' }

  toggleMenu = (event) => {
  event.preventDefault();
  this.setState({
    quickView: (this.state.quickView=='block' ? 'none':'block')
  })
  }

  togglePics = (event) => {
    event.preventDefault();
    this.setState({
      imgShow: (this.state.imgShow=='block' ? 'none':'block')
    })
    }

  render() {
		// const quickViewActive = this.state.quickView ? 'is-active' : '';
    const { posts, title } = this.props;
    const grouped = groupPosts(posts);
  const years = Object.keys(grouped).sort().reverse();
  return (
    <section>
      <TopView>
        <h2>{title}</h2>
        <QuickViewDiv>
          <QuickViewLink onClick={this.togglePics}>
          <FaImages /><AiconLabel>Toggle</AiconLabel><AiconLabel>Images</AiconLabel>
          </QuickViewLink>
          <QuickViewLink  onClick={this.toggleMenu}>
          <FaBars /><AiconLabel>Toggle</AiconLabel>
          <AiconLabel>Preview</AiconLabel>
          </QuickViewLink>
        </QuickViewDiv>
      </TopView>
      {years.map(year => (
        <section key={year}>
          {/* <H3>{year}</H3> */}
          {grouped[year].map(post => (
            <Article key={post.frontmatter.path}>
              <Header>
                
                <Link to={post.frontmatter.path}>
                  <H4>
                    {post.frontmatter.title}
                  </H4>
                </Link>
                <Time dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}>
                  {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
                </Time>
              </Header>
              {post.frontmatter.featuredImage ? <CoverImage 
              style={{display: this.state.imgShow}}
              >
              {/* <GatsbyLink to={post.frontmatter.path}> */}
                  <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} style={{border: "0.1rem solid #333"}} />
              {/* </GatsbyLink> */}
              </CoverImage>: '' }
              <TextPreview style={{display: this.state.quickView}}
              dangerouslySetInnerHTML={{ __html: getPreviewHtml(post.html,'</p>',post.frontmatter.foldnum) }} />
              
              <div style={{display: this.state.quickView}}>
              {post.frontmatter.readmore ? 
                <ReadLinkA inline href={post.frontmatter.readmore}>Read More...</ReadLinkA> : 
              <ReadLink to={post.frontmatter.path}>Read More...</ReadLink> }
              </div>
              <footer style={{marginTop:"10px"}}>
                <TagsList tags={post.frontmatter.tags} />
              </footer>
            </Article>
          ))}
        </section>
      ))}
    </section>
  );
  };
};

// const Posts = ({ posts }) => {
//   const grouped = groupPosts(posts);
//   const years = Object.keys(grouped).sort().reverse();
//   return (
//     <section>
//       <btn>Quick View</btn>
//       {years.map(year => (
//         <section key={year}>
//           {/* <H3>{year}</H3> */}
//           {grouped[year].map(post => (
//             <Article key={post.frontmatter.path}>
//               <Header>
//                 <H4>
//                   <Link to={post.frontmatter.path}>
//                     {post.frontmatter.title}
//                   </Link>
//                 </H4>
//                 <Time dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}>
//                   {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
//                 </Time>
//               </Header>
//               {post.frontmatter.featuredImage ? <CoverImage>
//               {/* <GatsbyLink to={post.frontmatter.path}> */}
//                   <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} style={{border: "0.1rem solid #333"}} />
//               {/* </GatsbyLink> */}
//               </CoverImage>: '' }
//               <TextPreview
//               dangerouslySetInnerHTML={{ __html: getPreviewHtml(post.html,'</p>',post.frontmatter.foldnum) }} />
              
//               {post.frontmatter.readmore ? 
//                 <ReadLinkA inline href={post.frontmatter.readmore}>Read More...</ReadLinkA> : 
//               <ReadLink to={post.frontmatter.path}>Read More...</ReadLink> }
//               <footer style={{marginTop:"10px"}}>
//                 <TagsList tags={post.frontmatter.tags} />
//               </footer>
//             </Article>
//           ))}
//         </section>
//       ))}
//     </section>
//   );
// };

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        foldnum: PropTypes.string.isRequired,
      }).isRequired,
    }),
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default Posts;
