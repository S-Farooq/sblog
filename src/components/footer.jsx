/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { A } from './header-footer-anchor';
import { FaTwitterSquare, FaMedium, FaLinkedin, FaInstagram,
  FaHeadphonesAlt,FaGithubSquare,FaEdit, FaFolder,FaBook } from 'react-icons/fa';


const Footer = styled.footer(({ theme }) => ({
  backgroundColor: theme.footerBgColor,
  color: theme.headerTextColor,
  height: '${theme.headerHeight / 2}',
  textAlign: 'center',
  opacity: 1.0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.8rem'
}));

const P = styled.p(({ theme }) => ({
  margin: `${theme.spacingPx / 2}px 0`,
  opacity: 0.35,
}));

const SiteFooter = () => (

  <Footer>
    <div style={{fontSize:'30px'}}>
        <A inline href="https://twitter.com/shahamfarooq">
          <FaTwitterSquare />
        </A>

        <A inline href="https://medium.com/@shahamfarooq">
          <FaMedium />
        </A>

        <A inline href="https://www.linkedin.com/in/syed-shaham-farooq-1b851a64/">
          <FaLinkedin />
        </A>

        <A inline href="https://github.com/S-Farooq">
          <FaGithubSquare />
        </A>

        <A inline href="https://www.instagram.com/shahamfarooq/">
          <FaInstagram />
        </A>
        
          </div>

    <P>&copy; 2019 Shaham Farooq
    
    </P>


    
  </Footer>
);

export default SiteFooter;

/*
{' - '}
    <A inline href="https://twitter.com/shahamfarooq">Get in Touch?</A>
<P>
      <small>
        This site is built with
        {' '}
        <A inline href="https://www.gatsbyjs.org/">GatsbyJS</A>
        . Modified from
        {' '}
        <A inline href="https://github.com/knpwrs/knpw.rs">this</A>
        .
      </small>
      
    </P>
    */