'use client'
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
    {
      id: '1',
      title: "The Essentials of Building a Strong Online Identity",
      description: "Explore the key elements of creating a digital persona that stands out, from branding basics to social media strategies.",
      image: "../images/strong.jpg",
    },

    {
      id: '2',
      title: "The Power of SEO: How to Get Found Online",
      description: "Learn how search engine optimization works and why it’s critical for increasing visibility and driving traffic to your website.",
      image: "../images/seo.jpg",
    },

    {
      id: '3',
      title: "Crafting a User-Friendly Website: Tips for Better Engagement",
      description: "Discover the principles of designing websites that captivate users and deliver seamless experiences.",
      image: "../images/website.jpg",
    },

    {
      id: '4',
      title: "The Art of Content Creation: Writing for the Digital World",
      description: "Delve into techniques for creating engaging, high-quality content that resonates with online audiences.",
      image: "../images/content.jpg",
    },

    {
      id: '5',
      title: "Social Media Marketing: Building Connections That Matter",
      description: "Uncover strategies for leveraging social platforms to grow your brand and foster meaningful relationships with your audience.",
      image: "../images/social media.jpg",
    },

    {
      id: '6',
      title: "Analytics Decoded: Understanding Your Digital Performance",
      description: "Learn how to interpret web analytics to optimize your online presence and make data-driven decisions.",
      image: "../images/decoded.jpg",
    },

    {
      id: '7',
      title: "Mobile Optimization: Reaching Users on the Go",
      description: "Explore the importance of mobile-friendly websites and apps in today’s fast-paced, mobile-first world.",
      image: "../images/mobile.jpg",
    },

    {
      id: '8',
      title: "Trends in Digital Marketing: What to Watch in 2025",
      description: "Stay ahead of the curve by understanding the latest trends and innovations shaping the future of digital marketing.",
      image: "../images/digital.jpg",
    },

  ];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post not found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>
        {""}
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4' />
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}

      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
