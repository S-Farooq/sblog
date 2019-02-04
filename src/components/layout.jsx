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

const minWidthPx = 550;
const maxWidthPx = 750;
const spacingPx = 20;
const centerPadding = `calc((100vw - ${maxWidthPx - (2 * spacingPx)}px) / 2)`;
const smallMedia = `@media(max-width: ${minWidthPx}px)`;
const largeMedia = `@media(min-width: ${maxWidthPx}px)`;
const textColor = '#333';
const headerTextColor = '#FFFFFF';
const headerBgColor = '#272722';
const accentColor = '#ab4642';
const datetimeColor = '#72726F';

const theme = {
  spacingPx,
  spacing: `${spacingPx}px`,
  headerHeight: '75px',
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
  datetimeColor,
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
          fontFamily: 'Majoram',
          fontSize:'1.1em',
        },
        'p':{
          fontSize:'1.2em',
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
          marginBottom: 0,
        },
        a: {
          textDecoration: 'underline',
          fontWeight: 'bold',
          color: accentColor,
          transition: 'color 100ms linear',
          ':hover': {
            color: textColor,
          },
        },
        blockquote: {
          background: '#F9F9F9',
          backgroundColor: 'rgba(39, 38, 34)',
          backgroundColor: 'rgba(39, 38, 34, .05)',
          padding: `${spacingPx * 2}px`,
          margin: 0,
        },
        '.content': {
        [theme.largeMedia]: {
            paddingTop:'75px',
          },
        },
        '.gatsby-resp-image-image': {
          border: "3px solid black",
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
          <Header />
          <div class='content'>
          {children}
          </div>
          <AboutFooter />
          <Footer />
        </main>
      )}
    </StaticQuery>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
