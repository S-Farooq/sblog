import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';
import ProfilePic from '../../images/profilepic.jpeg'; 

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  article = false,
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
            facebookAppID
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          facebookAppID,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || ProfilePic}`,
        url: `${siteUrl}${pathname || '/'}`,
      };

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
          </Helmet>
          <Facebook
            pageUrl={seo.url}
            type={article ? 'article' : null}
            title={seo.title}
            description={seo.description}
            image={seo.image}
            appID={facebookAppID}
          />
          <Twitter
            username={twitterUsername}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

export default SEO;