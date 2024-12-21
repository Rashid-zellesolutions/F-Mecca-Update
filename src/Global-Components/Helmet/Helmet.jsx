import React from 'react';
import { Helmet } from 'react-helmet';

const DynamicMetaTags = ({ title, description, image, url }) => {
  return (
    <div>
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Basic Meta Tags */}
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>

      {/* Your Page Content */}
      <h1 style={{display:"none"}} >{title}</h1>
      <p style={{display:"none"}}>{description}</p>
      <img style={{display:"none"}} src={image} alt={title} />
    </div>
  );
};

export default DynamicMetaTags;
