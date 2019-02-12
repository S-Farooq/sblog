/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { Link, A, Aicon } from './header-footer-anchor';
import { FaTwitterSquare, FaMedium, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

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
  },
}));

const Small = styled.small({
  fontSize: '85%',
  opacity: 0.65,
});

const Nav = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  a: {
    marginLeft: theme.spacing,
  },
}));

const SiteHeader = () => (
  <Header>
    <H1>
      <Small>Shaham's</Small>
    </H1>
    <Nav>
      <Link to="/">Blog</Link>
      <A href="https://shaham.me">Projects</A>

      <Aicon inline href="https://twitter.com/shahamfarooq">
          <FaTwitterSquare />
        </Aicon>

        <Aicon inline href="https://medium.com/@shahamfarooq">
          <FaMedium />
        </Aicon>

        <Aicon inline href="https://www.linkedin.com/in/syed-shaham-farooq-1b851a64/">
          <FaLinkedin />
        </Aicon>

        <Aicon inline href="https://github.com/S-Farooq">
          <FaGithubSquare />
        </Aicon>
    </Nav>
  </Header>
);

export default SiteHeader;
