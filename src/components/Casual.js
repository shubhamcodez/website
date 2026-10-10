import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import JourneyIntoQuantFinance from './blog/JourneyIntoQuantFinance';
import MLInTrading from './blog/MLInTrading';
import FutureOfAlgoTrading from './blog/FutureOfAlgoTrading';
import RiskManagement from './blog/RiskManagement';
import OptionsPricing from './blog/OptionsPricing';
import HighFrequencyTrading from './blog/HighFrequencyTrading';
import PortfolioOptimization from './blog/PortfolioOptimization';
import TimeSeriesAnalysis from './blog/TimeSeriesAnalysis';
import CreditRisk from './blog/CreditRisk';
import RAGApplications from './blog/RAGApplications';
import PeFTMethods from './blog/PeFTMethods';
import MCPDevelopment from './blog/MCPDevelopment';
import FrankensteinReview from './blog/FrankensteinReview';
import RunningManReview from './blog/RunningManReview';
import OneBattleAfterAnotherReview from './blog/OneBattleAfterAnotherReview';
import TwentyEightYearsLaterReview from './blog/TwentyEightYearsLaterReview';
import BoyKillsWorldReview from './blog/BoyKillsWorldReview';
import AnimalFarmBlog from './blog/animal farm';
import Pixel4WatchReview from './blog/pixel4watch';
import CornellCompetition from './blog/CornellCompetition';
import CubistHackathon from './blog/CubistHackathon';
import GHC2024 from './blog/GHC2024';
import QualcommHackathon from './blog/QualcommHackathon';
import AICAF2024 from './blog/AICAF2024';
import CDAO2024 from './blog/CDAO2024';
import BattleOfQuants2024 from './blog/BattleOfQuants2024';
import LucidEquityResearch from './blog/LucidEquityResearch';
import Candidates2026 from './blog/Candidates2026';

// Blog posts data imported from individual files
const allBlogPosts = [
  Pixel4WatchReview,
  FrankensteinReview,
  RunningManReview,
  OneBattleAfterAnotherReview,
  TwentyEightYearsLaterReview,
  BoyKillsWorldReview,
  AnimalFarmBlog,
  CreditRisk,
  TimeSeriesAnalysis,
  PortfolioOptimization,
  HighFrequencyTrading,
  OptionsPricing,
  RAGApplications,
  PeFTMethods,
  MCPDevelopment,
  JourneyIntoQuantFinance,
  MLInTrading,
  FutureOfAlgoTrading,
  RiskManagement,
  CornellCompetition,
  CubistHackathon,
  GHC2024,
  QualcommHackathon,
  AICAF2024,
  CDAO2024,
  BattleOfQuants2024,
  LucidEquityResearch,
  Candidates2026
].map(post => ({
  id: post.id,
  title: post.title,
  date: post.date,
  description: post.description
}));

// Sort blogs by date (newest first)
const sampleBlogPosts = [...allBlogPosts].sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

const Casual = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');
  const hasInitialized = useRef(false);

  // Use useMemo to prevent unnecessary re-renders
  const memoizedBlogPosts = useMemo(() => sampleBlogPosts, []);

  const getBlogContent = useCallback((blog) => {
    const blogMap = {
      1: JourneyIntoQuantFinance,
      2: MLInTrading,
      3: FutureOfAlgoTrading,
      4: RiskManagement,
      5: OptionsPricing,
      6: HighFrequencyTrading,
      7: PortfolioOptimization,
      8: TimeSeriesAnalysis,
      9: CreditRisk,
      10: RAGApplications,
      11: PeFTMethods,
      12: MCPDevelopment,
      13: FrankensteinReview,
      14: Pixel4WatchReview,
      15: AnimalFarmBlog,
      16: CornellCompetition,
      17: CubistHackathon,
      18: GHC2024,
      19: QualcommHackathon,
      20: AICAF2024,
      21: CDAO2024,
      22: BattleOfQuants2024,
      23: LucidEquityResearch,
      24: RunningManReview,
      25: OneBattleAfterAnotherReview,
      26: TwentyEightYearsLaterReview,
      27: BoyKillsWorldReview,
      28: Candidates2026
    };

    const blogPost = blogMap[blog.id];
    return blogPost ? blogPost.content : `
      <h2>${blog.title}</h2>
      <p><em>Published on ${blog.date}</em></p>
      <p>${blog.description}</p>
    `;
  }, []);

  const handleBlogClick = useCallback((blog) => {
    setSelectedBlog(blog);
    setBlogContent(getBlogContent(blog));
  }, [getBlogContent]);

  // Add SEO meta tags and Article schema for blog posts
  useEffect(() => {
    if (selectedBlog) {
      const baseUrl = "https://shubhamcodez.github.io";

      // Update document title
      document.title = `${selectedBlog.title} | Casual Inference | Shubham Singh NYU`;

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

      // Update meta description
      updateMetaTag('description', `${selectedBlog.description} - Blog post by Shubham Singh NYU on Casual Inference.`);

      // Update author meta tag
      updateMetaTag('author', 'Shubham Singh');

      // Update keywords with blog-specific terms
      const keywords = `Shubham Singh, Shubham Singh NYU, ${selectedBlog.title}, Casual Inference, blog, ${selectedBlog.description.split(' ').slice(0, 5).join(', ')}, quantitative finance, machine learning`;
      updateMetaTag('keywords', keywords);

      // Update Open Graph tags
      updateMetaTag('og:title', `${selectedBlog.title} | Casual Inference | Shubham Singh NYU`, 'property');
      updateMetaTag('og:description', selectedBlog.description, 'property');
      updateMetaTag('og:type', 'article', 'property');
      updateMetaTag('og:url', `${baseUrl}/blog`, 'property');
      updateMetaTag('og:image', `${baseUrl}/img_nvidia.png`, 'property');

      // Update Twitter Card tags
      updateMetaTag('twitter:title', `${selectedBlog.title} | Shubham Singh NYU`);
      updateMetaTag('twitter:description', selectedBlog.description);
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:image', `${baseUrl}/img_nvidia.png`);

      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `${baseUrl}/blog`);

      // Add article meta tags
      updateMetaTag('article:published_time', selectedBlog.date, 'property');
      updateMetaTag('article:author', 'Shubham Singh NYU', 'property');
      updateMetaTag('article:section', 'Blog', 'property');
      updateMetaTag('article:tag', 'Quantitative Finance', 'property');
      updateMetaTag('article:tag', 'Machine Learning', 'property');

      // Enhanced Article schema
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": selectedBlog.title,
        "description": selectedBlog.description,
        "datePublished": selectedBlog.date,
        "dateModified": selectedBlog.date,
        "author": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": [
            "Shubham Singh NYU",
            "Shubham Singh DAV Kharghar",
            "Shubham Singh Bharati Vidyapeeth"
          ],
          "url": baseUrl,
          "sameAs": [
            "https://www.linkedin.com/in/therealshubham",
            "https://github.com/shubhamcodez",
            "https://www.kaggle.com/shubhamcodez"
          ]
        },
        "publisher": {
          "@type": "Person",
          "name": "Shubham Singh",
          "alternateName": "Shubham Singh NYU",
          "url": baseUrl
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/blog`
        },
        "url": `${baseUrl}/blog`,
        "image": `${baseUrl}/img_nvidia.png`,
        "keywords": keywords
      };

      // Remove existing article schema
      const existingScripts = document.querySelectorAll('script[data-article-schema="true"]');
      existingScripts.forEach(script => script.remove());

      // Add new article schema
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-article-schema', 'true');
      script.textContent = JSON.stringify(articleSchema);
      document.head.appendChild(script);
    }
  }, [selectedBlog]);

  // Initialize blog posts and select the first one on mount
  useEffect(() => {
    setBlogPosts(memoizedBlogPosts);
    // Automatically select the latest blog post (first in the array) on initial load
    // Use ref to ensure this only runs once
    if (!hasInitialized.current && memoizedBlogPosts.length > 0) {
      hasInitialized.current = true;
      const latestBlog = memoizedBlogPosts[0];
      setSelectedBlog(latestBlog);
      setBlogContent(getBlogContent(latestBlog));
    }
  }, [memoizedBlogPosts, getBlogContent]);

  return (
    <div className="container blog-page">
      <header className="page-header">
        <h1>Casual Inference</h1>
      </header>

      <div className="blog-layout">
        <aside className="blog-sidebar">
          <h3>Blog Posts</h3>
          <ul className="blog-post-list">
            {blogPosts.map(blog => (
              <li key={blog.id} className={selectedBlog?.id === blog.id ? 'active' : ''}>
                <button
                  onClick={() => handleBlogClick(blog)}
                  className="blog-post-link"
                >
                  <span className="blog-post-title">{blog.title}</span>
                  <span className="blog-post-date">{blog.date}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="blog-content">
          {blogContent && selectedBlog ? (
            <article itemScope itemType="https://schema.org/BlogPosting">
              <meta itemProp="headline" content={selectedBlog.title} />
              <meta itemProp="datePublished" content={selectedBlog.date} />
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Shubham Singh" />
                <meta itemProp="alternateName" content="Shubham Singh NYU" />
              </div>
              <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blogContent }} />
            </article>
          ) : (
            <div className="blog-placeholder">
              <p>Select a blog post from the sidebar to read it.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Casual; 