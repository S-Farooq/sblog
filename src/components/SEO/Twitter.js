import React from 'react';
import Helmet from 'react-helmet';

export default ({
  cardType = null,
  username = null,
  title = null,
  description = null,
  image = null,
}) => (
  <Helmet>
    <meta name="twitter:card" content={cardType || "summary_large_image"} />
    {username && <meta name="twitter:creator" content={username} />}
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);