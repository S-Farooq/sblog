/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from '@emotion/styled';
import { A } from './header-footer-anchor';
import ProfilePic from '../images/profilepic.jpeg'; 

import { FaTwitterSquare, FaMedium, FaLinkedin } from 'react-icons/fa';


const AboutFooter = styled.footer(({ theme }) => ({
  backgroundColor: 'rgba(39, 38, 34)',
  backgroundColor: 'rgba(39, 38, 34, .05)',
  borderTop: '1px black solid',
  marginTop: '15px',
  color: theme.textColor,
  height: '${theme.headerHeight / 2}',
  textAlign: 'center',
  opacity: 1.0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.0rem'
}));

const profilediv = {
  borderRadius: '50px',
  border: '1px solid black',
  backgroundImage: 'url('+ ProfilePic + ')',
  backgroundSize: 'cover',
  width: '50px',
  height: '50px',
  marginRight: '5px', 
};

const P = styled.p(({ theme }) => ({
  margin: `${theme.spacingPx / 2}px 0`,
  opacity: 0.75,
}));

const Img = styled.img(({ theme }) => ({
  width: '50px',
  height: '50px'
}));

const SiteFooter = () => (

  <AboutFooter>
  <div
      style={{
        margin: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
      }}
    > 
    <div style={{flex: 1}}>
        <div style={profilediv} />
      </div>

    <div style={{flex: 4}}>
      <h3>About the Author</h3>
      </div>
    
      
      </div>
        <P>
        <small>
          Shaham Farooq works as a Data Scientist in Toronto, Canada. 
          He writes on what he's reading.
          </small>
          
        </P>
        
    

    
  </AboutFooter>
);

export default SiteFooter;
