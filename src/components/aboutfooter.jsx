/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { A, HR, Aicon2 } from './header-footer-anchor';
import { Link as GatsbyLink } from 'gatsby';
import ProfilePic from '../images/profilepic.jpeg'; 

import { FaTwitterSquare, FaMedium, FaLinkedin } from 'react-icons/fa';


const AboutFooter = styled.footer(({ theme }) => ({
  ...theme.centerPadding,
  paddingTop:'15px',
  paddingBottom:"15px",
  backgroundColor: theme.aboutfooterBgColor,
  // borderTop: '1px {theme.hoverSpaceColor} solid',
  // marginTop: '15px',
  // color: theme.headerTextColor,
  color: theme.textColor,
  height: '${theme.headerHeight / 2}',
  // textAlign: 'left',
  opacity: 1.0,
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'left',
  alignItems: 'flex-start',
}));

const profilediv = {
  borderRadius: '50px',
  // border: '1px solid black',
  backgroundImage: 'url('+ ProfilePic + ')',
  backgroundSize: 'cover',
  width: '4.0rem',
  height: '4.0rem',
  marginRight: '15px', 
};

const P = styled.p(({ theme }) => ({
  // margin: `${theme.spacingPx / 2}px 0`,
  opacity: 0.85,
  fontSize:"1.1em",
  lineHeight: '1.0em',
  margin:0,
  padding:0,
}));

const Img = styled.img(({ theme }) => ({
  width: '50px',
  height: '50px'
}));

const H3 = styled.h3(({ theme }) => ({
  margin:0,
  padding:0,
  opacity:0.9,
}));

const H4 = styled.h4(({ theme }) => ({
  textTransform: 'uppercase',
  opacity:0.6,
  fontSize:'0.7rem',
  margin:0,
  padding:0,
}));

const SiteFooter = () => (

  <AboutFooter>
  <HR />
  
  <div
      style={{
        margin: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
      }}
    > 
    <GatsbyLink to="/">
    <div style={{flex: 1}}>
        <div style={profilediv} />
      </div>
      </GatsbyLink>
    <div style={{flex: 7}}>
      
      
        <small>
        <H3>Shaham Farooq</H3>
          <H4>Data Scientist - Toronto</H4> 
          <P>
            Writes on thinking, reading, and creativity for the <i>amateur</i> (*from the Latin <i>amare</i> which means <i>to love</i>)..
            most of the time. Sometimes, writes about data science, sometimes about something else.
            </P>
            <Aicon2 inline href="#header"><H4 style={{opacity:1.0}}>Return to Top</H4></Aicon2>
          </small>
      </div>
      
      
      </div>
      
        
    

    
  </AboutFooter>
);

export default SiteFooter;
