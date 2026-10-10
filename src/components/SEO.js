import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = "Shubham Singh | Quantitative Finance Researcher & Machine Learning Expert",
  description = "Shubham Singh - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies. Founder of Exituity (Agentic Platform for Small Business M&A).",
  keywords = "quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, published researcher, Exituity founder, founder advisor",
  image = "https://shubhamcodez.github.io/img_nvidia.png",
  type = "website",
  author = "Shubham Singh",
  canonicalUrl = null,
  noindex = false,
  nofollow = false,
  structuredData = null
}) => {
  const location = useLocation();
  const baseUrl = "https://shubhamcodez.github.io";
  // Handle hash routes for GitHub Pages
  const path = location.pathname === '/' ? '' : location.pathname;
  const hash = location.hash || '';
  const currentUrl = canonicalUrl || `${baseUrl}${path}${hash}`;
  
  // Default structured data for Person schema
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shubham Singh",
    "alternateName": [
      "Shubham Singh NYU",
      "Shubham Singh DAV Kharghar",
      "Shubham Singh Bharati Vidyapeeth",
      "Shubham Singh Kharghar"
    ],
    "url": baseUrl,
    "image": `${baseUrl}/img_nvidia.png`,
    "jobTitle": "Quantitative Researcher & Founder",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Exituity",
        "url": baseUrl
      }
    ],
    "founderOf": [
      {
        "@type": "Organization",
        "name": "Exituity"
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "New York University",
        "department": "Computer Engineering",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        }
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Bharati Vidyapeeth University",
        "department": "Computer Science",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "School",
        "name": "DAV Kharghar",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kharghar",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    ],
    "email": "shubham.singh@nyu.edu",
    "sameAs": [
      "https://www.linkedin.com/in/therealshubham",
      "https://github.com/shubhamcodez",
      "https://www.kaggle.com/shubhamcodez",
      "https://www.youtube.com/ShubhamSinghYoutube"
    ],
    "knowsAbout": [
      "Multiplanetary Expansion",
      "Space",
      "Biolongetivity",
      "Posthumanism",
      "AI",
      "Economic Systems and Financial Markets"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Quantitative Researcher",
      "occupationLocation": {
        "@type": "City",
        "name": "New York"
      }
    }
  };

  // Additional structured data for WebSite and Organization
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shubham Singh NYU - Quantitative Research Portfolio",
    "url": baseUrl,
    "author": {
      "@type": "Person",
      "name": "Shubham Singh",
      "alternateName": "Shubham Singh NYU"
    },
    "publisher": {
      "@type": "Person",
      "name": "Shubham Singh",
      "alternateName": "Shubham Singh NYU"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Exituity",
      "description": "Agentic Platform for Small Business M&A",
      "founder": {
        "@type": "Person",
        "name": "Shubham Singh",
        "alternateName": "Shubham Singh NYU"
      },
      "url": baseUrl
    },
  ];

  const finalStructuredData = structuredData || defaultStructuredData;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel, href, attributes = {}) => {
      let element = document.querySelector(`link[rel="${rel}"]${attributes.hreflang ? `[hreflang="${attributes.hreflang}"]` : ''}`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (attributes.hreflang) {
          element.setAttribute('hreflang', attributes.hreflang);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // BreadcrumbList structured data
    const getBreadcrumbData = () => {
      const breadcrumbs = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        }
      ];

      if (location.pathname === '/quant') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Quantitative Finance Resources",
          "item": `${baseUrl}/quant`
        });
      } else if (location.pathname.startsWith('/quant/')) {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Quantitative Finance Resources",
          "item": `${baseUrl}/quant`
        });
        const pageName = location.pathname.split('/').pop();
        const pageNames = {
          'coding': 'Coding Challenges',
          'resources': 'Learning Resources',
          'puzzles': 'Puzzles'
        };
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 3,
          "name": pageNames[pageName] || pageName,
          "item": `${baseUrl}${location.pathname}`
        });
      } else if (location.pathname === '/research') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Research",
          "item": `${baseUrl}/research`
        });
      } else if (location.pathname === '/blog') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${baseUrl}/blog`
        });
      } else if (location.pathname === '/resume') {
        breadcrumbs.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Resume",
          "item": `${baseUrl}/resume`
        });
      }

      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs
      };
    };

    // Helper function to update or create script tag for JSON-LD
    const updateStructuredData = () => {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Add Person schema (always)
      const personScript = document.createElement('script');
      personScript.setAttribute('type', 'application/ld+json');
      personScript.textContent = JSON.stringify(finalStructuredData);
      document.head.appendChild(personScript);

      // Add BreadcrumbList schema (always)
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.textContent = JSON.stringify(getBreadcrumbData());
      document.head.appendChild(breadcrumbScript);

      // Add WebSite and Organization schema (only on home page)
      if (location.pathname === '/') {
        const websiteScript = document.createElement('script');
        websiteScript.setAttribute('type', 'application/ld+json');
        websiteScript.textContent = JSON.stringify(websiteStructuredData);
        document.head.appendChild(websiteScript);

        // Add Organization schemas for all founded companies
        organizationStructuredData.forEach(org => {
          const orgScript = document.createElement('script');
          orgScript.setAttribute('type', 'application/ld+json');
          orgScript.textContent = JSON.stringify(org);
          document.head.appendChild(orgScript);
        });

        // Add FAQ schema for home page
        const faqData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Shubham Singh NYU?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shubham Singh NYU is a Quantitative Researcher and Machine Learning Expert who graduated from New York University with a Master's in Computer Engineering. He is also an alumnus of Bharati Vidyapeeth University and DAV Kharghar."
              }
            },
            {
              "@type": "Question",
              "name": "What does Shubham Singh do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shubham Singh is the founder of Exituity, an Agentic Platform for Small Business M&A, and previously worked on PostTraining & Human Data at xAI. He specializes in quantitative finance, machine learning, and algorithmic trading. He has published multiple research papers on AI alignment, LLM finetuning, and quantitative finance."
              }
            },
            {
              "@type": "Question",
              "name": "Where did Shubham Singh study?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Shubham Singh completed his Master's in Computer Engineering at New York University (NYU) and his Bachelor's in Computer Science at Bharati Vidyapeeth University. He also attended DAV Kharghar for high school."
              }
            },
          ]
        };
        const faqScript = document.createElement('script');
        faqScript.setAttribute('type', 'application/ld+json');
        faqScript.textContent = JSON.stringify(faqData);
        document.head.appendChild(faqScript);
      }
    };

    // Primary Meta Tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', robotsContent);
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('geo.region', 'US-NY');
    updateMetaTag('geo.placename', 'New York');
    updateMetaTag('geo.position', '40.7128;-74.0060');
    updateMetaTag('ICBM', '40.7128, -74.0060');

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Open Graph / Facebook
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    updateMetaTag('og:site_name', 'Shubham Singh NYU - Quantitative Research Portfolio', 'property');
    updateMetaTag('og:profile:first_name', 'Shubham', 'property');
    updateMetaTag('og:profile:last_name', 'Singh', 'property');
    updateMetaTag('og:profile:username', 'shubhamsinghnyu', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', currentUrl);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', title);
    updateMetaTag('twitter:site', '@shubhamsingh');
    updateMetaTag('twitter:creator', '@shubhamsingh');

    // Structured Data
    updateStructuredData();

    // Cleanup function (optional, but good practice)
    return () => {
      // Meta tags will persist, which is fine for SEO
      // We don't need to clean them up as they'll be replaced on next render
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, image, type, author, currentUrl, robotsContent, finalStructuredData, location.pathname]);

  // This component doesn't render anything
  return null;
};

export default SEO;
