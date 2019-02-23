import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import 'sanitize.css/sanitize.css';
import 'lato-font/css/lato-font.css';
import Header from './header';
import Footer from './footer';
import AboutFooter from './aboutfooter';

// const minWidthPx = 550;
// const maxWidthPx = 750;
// const spacingPx = 20;
// const centerPadding = `calc((100vw - ${maxWidthPx - (2 * spacingPx)}px) / 2)`;
// const smallMedia = `@media(max-width: ${minWidthPx}px)`;
// const largeMedia = `@media(min-width: ${maxWidthPx}px)`;
// const textColor = '#333';
// const headerTextColor = '#FFFFFF';
// const headerBgColor = '#272722';
// const accentColor = '#ab4642';
// const datetimeColor = '#72726F';


const minWidthPx = 550;
const maxWidthPx = 750;
const spacingPx = 20;
const centerPadding = `calc((100vw - ${maxWidthPx - (6 * spacingPx)}px) / 2)`;
const smallMedia = `@media(max-width: ${minWidthPx}px)`;
const largeMedia = `@media(min-width: ${maxWidthPx}px)`;
const textColor = '#333';
const headerTextColor = '#EEEDD9';
const headerBgColor = '#0B7372';
const footerBgColor = '#0B7372';
// const aboutfooterBgColor = '#09868A';
const aboutfooterBgColor = '#FFF';
const accentColor = '#ffa70f';
const datetimeColor = '#333';
const hoverSpaceColor = "#EEEDD9";

const theme = {
  spacingPx,
  spacing: `${spacingPx}px`,
  headerHeight: '75px',
  underHeaderHeight: '50px',
  contentTopPadding: '75px',
  textColor,
  accentColor,
  maxWidthPx,
  minWidthPx,
  smallMedia,
  largeMedia,
  centerPadding: {
    padding: `0 ${spacingPx}px`,
    [largeMedia]: {
      paddingLeft: centerPadding,
      paddingRight: centerPadding,
    },
  },
  headerTextColor,
  headerBgColor,
  aboutfooterBgColor,
  footerBgColor,
  datetimeColor,
  hoverSpaceColor
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={{
        'html, body': {
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          fontFamily: 'Lato',
          fontSize:'1.1rem',
          fontWeight:'300',
        },
        'p':{
          fontSize:'1.2rem',
          lineHeight: '1.8rem',
          letterSpacing: '-0.01rem',
        },
        'p > img': {
          maxWidth:'100%',
          display:'block',
          margin:'0px !important',

        },
        '::-moz-selection': {
          background: accentColor,
        },
        '::-webkit-selection': {
          background: accentColor,
        },
        '::selection' : {
          background: accentColor,
        },
        'h1,h2,h3,h4': {
          // textTransform: 'uppercase',
          // marginBottom: 0,
        },
        a: {
          textDecoration: 'none',
          fontWeight: '400',
          color: accentColor,
          transition: 'color 100ms linear',
          ':hover': {
            color: textColor,
          },
        },
        
        blockquote: {
          fontFamily: 'Lato',
          // background: '#F9F9F9',
          // background: 'rgba(39, 38, 34)',
          // background: 'rgba(39, 38, 34, .05)',
          background: '#f9f9f9',
          padding: `${spacingPx * 1}px`,
          margin: 0,
          
        },
        'blockquote > p': {
          paddingLeft: `${spacingPx * 1}px`,
          paddingRight: `${spacingPx * 1}px`,
          [theme.largeMedia]: {
            paddingLeft: `${spacingPx * 1}px`,
            paddingRight: `${spacingPx * 1}px`,
          },
          
          fontSize:'1.1rem',
        },
        '.content': {
        [theme.largeMedia]: {
            paddingTop:theme.contentTopPadding,
          },
        },
        '.gatsby-resp-image-image': {
          border: "0.1em solid #333",
        }

          
      }}
    />
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
    >
      {({ site: { siteMetadata: site } }) => (
        <main>
          <Helmet>
            <title>
              {site.title}
              {' '}
              &middot;
              {' '}
              {site.description}
            </title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="description" content={site.description} />
          </Helmet>
          <section id='header'>
          <Header />
          </section>
          <div class='content'>
          
          {children}
          </div>
          <section id='footer'>
          <AboutFooter />
          <Footer />
          </section>
        </main>
      )}
    </StaticQuery>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
