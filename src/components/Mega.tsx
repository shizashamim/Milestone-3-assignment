import React from 'react';
import BlogCard from '../components/BlogCard';
import { title } from 'process';

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "The Essentials of Building a Strong Online Identity",
      description: "Explore the key elements of creating a digital persona that stands out, from branding basics to social media strategies.",
      date: "2025-1-2",
      imageUrl: "../images/strong.jpg",
    },

    {
      id: '2',
      title: "The Power of SEO: How to Get Found Online",
      description: "Learn how search engine optimization works and why it’s critical for increasing visibility and driving traffic to your website.",
      date: "2025-1-2",
      imageUrl: "../images/seo.jpg",
    },

    {
      id: '3',
      title: "Crafting a User-Friendly Website: Tips for Better Engagement",
      descriptipn: "Discover the principles of designing websites that captivate users and deliver seamless experiences.",
      date: "2025-1-2",
      imageUrl: "../images/websites.jpg",
    },

    {
      id: '4',
      title: "The Art of Content Creation: Writing for the Digital World",
      description: "Delve into techniques for creating engaging, high-quality content that resonates with online audiences.",
      date: "2025-1-2",
      imageUrl: "../images/content.jpg",
    },

    {
      id: '5',
      title: "Social Media Marketing: Building Connections That Matter",
      description: "Uncover strategies for leveraging social platforms to grow your brand and foster meaningful relationships with your audience.",
      date: "2025-1-2",
      imageUrl: "../images/social media.jpg",
    },

    {
      id: '6',
      title: "Analytics Decoded: Understanding Your Digital Performance",
      description: "Learn how to interpret web analytics to optimize your online presence and make data-driven decisions.",
      date: "2025-1-2",
      imageUrl: "../images/decoded.jpg",
    },

    {
      id: '7',
      title: "Mobile Optimization: Reaching Users on the Go",
      description: "Explore the importance of mobile-friendly websites and apps in today’s fast-paced, mobile-first world.",
      date: "2025-1-2",
      imageUrl: "../images/mobile.jpg",
    },

    {
      id: '8',
      title: "Trends in Digital Marketing: What to Watch in 2025",
      description: "Stay ahead of the curve by understanding the latest trends and innovations shaping the future of digital marketing.",
      date: "2025-1-2",
      imageUrl: "../images/digital.jpg",
    },

  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-purple-500 animate-color-change">
        {""}
        Mastering Digital Presence in the Modern Age
      </h1>

      <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={{...post,description: post.description || "No description avaiable"}} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
