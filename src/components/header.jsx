/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { Link, A, Aicon, AiconLink, AiconLabel } from './header-footer-anchor';
import { FaTwitterSquare, FaMedium, FaLinkedin, 
  FaHeadphonesAlt,FaGithubSquare,FaEdit, FaFolder,FaBookOpen,
  FaUserSecret } from 'react-icons/fa';


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
    height: '70px',
    lineHeight: '30px',
    paddingBottom: '15px',
    paddingLeft: '25px',
    paddingRight: '25px',
    
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
    fontSize: '1.0rem',
    
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
  // [theme.smallMedia]: {
  //   paddingLeft: 50,
  //   paddingRight: 50,
  // },
  a: {
    marginLeft: theme.spacing,
    alignText: 'center',
    [theme.smallMedia]: {
      margin:0,
    },
    
    // verticalAlign:'middle',
    lineHeight:1,
  },
}));





const SiteHeader = () => (
  <Header>
    <H1>
      <Small>Shaham</Small>
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

      {/* <Aicon inline href="https://twitter.com/randomscraphs">
      <FaTwitterSquare /><AiconLabel>Subscribe</AiconLabel>
        </Aicon> */}

        {/* <Aicon inline href="https://medium.com/@shahamfarooq">
          <FaMedium /><AiconLabel>Medium</AiconLabel>
        </Aicon> */}

        {/* <Aicon inline href="https://www.linkedin.com/in/syed-shaham-farooq-1b851a64/">
          <FaLinkedin /><AiconLabel>Linkedin</AiconLabel>
        </Aicon> */}

        <Aicon inline href="https://www.instagram.com/randomscraphs/">
          <FaEdit /><AiconLabel>Scraphs</AiconLabel>
        </Aicon>

        <Aicon inline href="#footer">
      <FaUserSecret /><AiconLabel>About</AiconLabel>
        </Aicon>

    </Nav>
  </Header>
);

export default SiteHeader;
