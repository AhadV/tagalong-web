import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = 'TagAlong - Curated Travel Recommendations From Your Favorite Creators',
  description = 'Discover and book handpicked hotels, restaurants, and experiences recommended by trusted travel creators. Join TagAlong to explore authentic travel destinations.',
  keywords = 'travel, recommendations, curated travel, travel creators, hotels, restaurants, experiences, travel influencers, destination guides',
  image = 'https://tagalong.me/og-image.jpg',
  type = 'website'
}) => {
  const location = useLocation();
  const url = `https://tagalong.me${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'TagAlong', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');
    updateMetaTag('twitter:site', '@tagalong', 'name');

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow', 'name');
    updateMetaTag('author', 'TagAlong', 'name');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1', 'name');
    updateMetaTag('theme-color', '#1A1A1A', 'name');

    // Canonical URL
    updateLinkTag('canonical', url);

    // Structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'TagAlong',
      description: 'Curated travel recommendations from your favorite creators',
      url: 'https://tagalong.me',
      logo: 'https://tagalong.me/official_favicon.png',
      sameAs: [
        'https://twitter.com/tagalong',
        'https://instagram.com/tagalong',
        'https://facebook.com/tagalong'
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, image, url, type]);

  const updateMetaTag = (name, content, attributeName = 'name') => {
    let element = document.querySelector(`meta[${attributeName}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateLinkTag = (rel, href) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  return null;
};

export default SEO;