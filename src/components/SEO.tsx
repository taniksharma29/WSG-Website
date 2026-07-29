import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'World Sports Group (WSG) — Founder of Asian Legends League',
  description = 'World Sports Group (WSG) is the founder of Asian Legends League. Premier sports group specializing in Events Management, Players Management, PR, TV Production, and Sponsorship across UAE, India, UK, Australia, and USA.',
  keywords = 'World Sports Group, WSG, Founder of Asian Legends League, Asian Legends League, Events Management, Players Management, PR, TV Production, Sponsorship, Sharjah Media City, UAE, India, UK, Australia, USA, Sports League Management',
  path = '',
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set meta tag
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrValue.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 2. Standard Metas
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);

    // 3. Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:type"]', 'content', 'website');
    setMetaTag('meta[property="og:url"]', 'content', `https://worldsportsgroup.com${path}`);
    setMetaTag('meta[property="og:site_name"]', 'content', 'World Sports Group');

    // 4. Twitter Cards
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:site"]', 'content', '@WorldSportsg');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);

    // 5. Canonical Link
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://worldsportsgroup.com${path}`);

  }, [title, description, keywords, path]);

  return null;
};

