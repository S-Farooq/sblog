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

const H4 = styled.h4({
  margin: 0,
  fontWeight: '600',
});

const Time = styled.time(({ theme }) => ({
  fontSize: '0.90rem',
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


const MAX_TEXT_PREVIEW = 550;

const Posts = ({ posts }) => {
  const grouped = groupPosts(posts);
  const years = Object.keys(grouped).sort().reverse();
  return (
    <section>
      {years.map(year => (
        <section key={year}>
          <H3>{year}</H3>
          {grouped[year].map(post => (
            <Article key={post.frontmatter.path}>
              <Header>
                <H4>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </H4>
                <Time dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}>
                  {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
                </Time>
              </Header>
              {post.frontmatter.featuredImage ? <CoverImage>
              {/* <GatsbyLink to={post.frontmatter.path}> */}
                  <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} style={{border: "0.1rem solid #333"}} />
              {/* </GatsbyLink> */}
              </CoverImage>: '' }
              <TextPreview
              dangerouslySetInnerHTML={{ __html: getPreviewHtml(post.html,'</p>',post.frontmatter.foldnum) }} />
              <ReadLink to={post.frontmatter.path}>
                    Read More...
              </ReadLink>
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
};

export default Posts;
