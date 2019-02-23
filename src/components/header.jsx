/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { Link, A, Aicon, AiconLink } from './header-footer-anchor';
import { FaTwitterSquare, FaMedium, FaLinkedin, 
  FaHeadphonesAlt,FaGithubSquare,FaEdit, FaFolder,FaBookOpen } from 'react-icons/fa';


const Header = styled.header(({ theme }) => ({
  // borderBottom: '4px solid #333',
  width: '100vw',
  backgroundColor: theme.headerBgColor,
  padding: `0 ${theme.spacing}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: theme.headerHeight,
  lineHeight: theme.headerHeight,
  color: theme.headerTextColor,
  [theme.smallMedia]: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    height: '50px',
    lineHeight: '20px',
    paddingBottom: '15px',
    
  },
  [theme.largeMedia]: {
    ...theme.centerPadding,
    position: 'fixed',
  },

  zIndex: 99,
  
}));

const H1 = styled.h1(({ theme }) => ({
  fontSize: '1.25rem',
  margin: 0,
  [theme.smallMedia]: {
    fontSize: '1rem',
    visibility: 'hidden',
  },
}));

const Small = styled.small({
  fontSize: '85%',
  opacity: 0.65,
});

const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: 'space-between',
  [theme.smallMedia]: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  a: {
    marginLeft: theme.spacing,
    alignText: 'center',
    // verticalAlign:'middle',
    lineHeight:1,
  },
}));


const AiconLabel = styled.span(({ theme }) => ({
  fontSize: '30%',
  margin:0,
  padding:0,
  display:'block',
  // verticalAlign:'middle',
  // lineHeight:0,
  // position:'relative',
  // top:'-3.7em',
  // [theme.smallMedia]: {
  //   top:'-0.8em',
  // },
}));


const SiteHeader = () => (
  <Header>
    <H1>
      <Small>Shaham's</Small>
    </H1>
    <Nav>

    <AiconLink to="/">
      <FaBookOpen /><AiconLabel>Blog</AiconLabel>
        </AiconLink>

        {/* <AiconLink to="/music/">
      <FaHeadphonesAlt /><AiconLabel>Music</AiconLabel>
        </AiconLink> */}

        <AiconLink to="/projects/">
      <FaFolder /><AiconLabel>Projects</AiconLabel>
        </AiconLink>

      {/* <Aicon inline href="https://shaham.me">
      <FaFolder /><AiconLabel>Projects</AiconLabel>
        </Aicon> */}

      <Aicon inline href="https://twitter.com/shahamfarooq">
      <FaTwitterSquare /><AiconLabel>Twitter</AiconLabel>
        </Aicon>

        {/* <Aicon inline href="https://medium.com/@shahamfarooq">
          <FaMedium /><AiconLabel>Medium</AiconLabel>
        </Aicon> */}

        {/* <Aicon inline href="https://www.linkedin.com/in/syed-shaham-farooq-1b851a64/">
          <FaLinkedin /><AiconLabel>Linkedin</AiconLabel>
        </Aicon> */}

        <Aicon inline href="https://www.instagram.com/randomscraphs/">
          <FaEdit /><AiconLabel>Scraphs</AiconLabel>
        </Aicon>
    </Nav>
  </Header>
);

export default SiteHeader;
