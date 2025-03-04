import React, { useState, useEffect } from 'react';

function Casual() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlogContent, setSelectedBlogContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This is a placeholder for the blog fetching functionality
    // In a real implementation, you would fetch from an API or use a CMS
    const mockBlogPosts = [
      {
        id: 1,
        title: "My Thoughts on Quantum Computing",
        content: "<p>Quantum computing is an exciting field that leverages quantum mechanics to process information in ways that classical computers cannot. The potential applications range from cryptography to drug discovery.</p><p>I've been following recent developments in quantum algorithms and their potential impact on financial modeling.</p>"
      },
      {
        id: 2,
        title: "Book Review: Thinking, Fast and Slow",
        content: "<p>Daniel Kahneman's 'Thinking, Fast and Slow' offers profound insights into how our minds work. The book explores the two systems that drive the way we think—System 1 (fast, intuitive) and System 2 (slow, deliberate).</p><p>I found the sections on cognitive biases particularly relevant to decision-making in finance.</p>"
      },
      {
        id: 3,
        title: "My Journey into Machine Learning",
        content: "<p>My journey into machine learning began during my undergraduate studies when I first encountered neural networks. Since then, I've been fascinated by how these algorithms can learn patterns from data.</p><p>In this post, I share some key lessons I've learned along the way and resources that helped me.</p>"
      }
    ];

    setBlogPosts(mockBlogPosts);
    setLoading(false);
  }, []);

  const handleBlogClick = (blogId) => {
    const selectedBlog = blogPosts.find(blog => blog.id === blogId);
    if (selectedBlog) {
      setSelectedBlogContent(selectedBlog.content);
    }
  };

  if (loading) return <div>Loading blog posts...</div>;
  if (error) return <div>Error loading blog posts: {error}</div>;

  return (
    <div>
      <h1>Casual Blog</h1>
      
      <section id="about" className="my-4">
        <p>This is my personal blog where I share insights on various topics. Feel free to explore!</p>
      </section>

      <section id="blogs" className="my-4">
        <h2 className="title">Recent Blog Posts</h2>
        <ul id="blog-list" className="list">
          {blogPosts.length === 0 ? (
            <li>No blog posts available.</li>
          ) : (
            blogPosts.map(blog => (
              <li key={blog.id}>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleBlogClick(blog.id);
                  }}
                >
                  {blog.title}
                </a>
              </li>
            ))
          )}
        </ul>
        <div 
          id="blog-content" 
          className="content mt-4"
          dangerouslySetInnerHTML={{ __html: selectedBlogContent }}
        />
      </section>
    </div>
  );
}

export default Casual; 