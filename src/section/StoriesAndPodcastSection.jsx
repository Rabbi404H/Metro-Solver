// sections/StoriesAndPodcastSection.jsx
import React, { useState } from 'react';

const StoriesAndPodcastSection = () => {
  const [activeTab, setActiveTab] = useState('success-stories');

  const tabs = [
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog-news', label: 'Blog and News' }
  ];

  const successStories = [
    {
      id: 1,
      title: "E-commerce Transformation Success",
      description: "How we helped a retail brand achieve remarkable growth through digital transformation",
      metrics: "$25M+ Sales Generated",
      image: "https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$",
      author: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.it/60/60?random=41"
      }
    },
    {
      id: 2,
      title: "SaaS Platform Scaling",
      description: "Strategic growth initiatives that propelled a B2B platform to market leadership",
      metrics: "$1M+ Lower CPA",
      image: "https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$",
      author: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.it/60/60?random=42"
      }
    },
    {
      id: 3,
      title: "Mobile App Launch Success",
      description: "From concept to #1 in App Store - the complete mobile strategy breakdown",
      metrics: "500K+ Downloads",
      image: "https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.it/60/60?random=43"
      }
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Digital Revolution",
      description: "Implementing AI-powered solutions that transformed patient care delivery",
      metrics: "40% Efficiency Gain",
      image: "https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$",
      author: {
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.it/60/60?random=44"
      }
    },
    {
      id: 2,
      title: "FinTech Security Innovation",
      description: "Building next-generation secure banking infrastructure for digital finance",
      metrics: "$50M+ Processed",
      image: "https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$",
      author: {
        name: "Michael Roberts",
        avatar: "https://images.unsplash.it/60/60?random=45"
      }
    },
    {
      id: 3,
      title: "EdTech Learning Platform",
      description: "Creating engaging digital learning experiences for modern education",
      metrics: "10K+ Students",
      image: "https://image.benq.com/is/image/benqco/five-reasons-you-need-wireless-screen-mirroring-for-an-effective-business-meeting%201200x700?$ResponsivePreset$",
      author: {
        name: "Emily Wilson",
        avatar: "https://images.unsplash.it/60/60?random=46"
      }
    }
  ];

  const blogNews = [
    {
      id: 1,
      title: "AI in Digital Marketing 2024",
      description: "Exploring the latest trends and tools shaping the future of marketing automation",
      metrics: "5 Min Read",
      image: "https://images.unsplash.it/400/250?random=37",
      author: {
        name: "Tech Insights Team",
        avatar: "https://images.unsplash.it/60/60?random=47"
      }
    },
    {
      id: 2,
      title: "Web3 Business Models Explained",
      description: "How blockchain technology is creating revolutionary new revenue streams",
      metrics: "8 Min Read",
      image: "https://images.unsplash.it/400/250?random=38",
      author: {
        name: "Blockchain Daily",
        avatar: "https://images.unsplash.it/60/60?random=48"
      }
    },
    {
      id: 3,
      title: "Remote Team Productivity Guide",
      description: "Best practices and tools for managing distributed teams effectively",
      metrics: "6 Min Read",
      image: "https://images.unsplash.it/400/250?random=39",
      author: {
        name: "Workplace Future",
        avatar: "https://images.unsplash.it/60/60?random=49"
      }
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "The Future of E-commerce & AI",
      description: "Deep dive into how artificial intelligence is revolutionizing online shopping experiences",
      date: "December 15, 2024",
      duration: "45 min",
      image: "https://images.ctfassets.net/pdf29us7flmy/okuqQysTug1NAtUNkcaMd/6d6bc76bd5741ca19fb69ae1569986ef/Group_of_employees.jpeg"
    },
    {
      id: 2,
      title: "Building Scalable Tech Startups",
      description: "Lessons from scaling multiple companies to million-dollar revenues",
      date: "December 8, 2024",
      duration: "52 min",
      image: "https://images.ctfassets.net/pdf29us7flmy/okuqQysTug1NAtUNkcaMd/6d6bc76bd5741ca19fb69ae1569986ef/Group_of_employees.jpeg"
    }
  ];

  const getActiveContent = () => {
    switch (activeTab) {
      case 'success-stories':
        return successStories;
      case 'case-studies':
        return caseStudies;
      case 'blog-news':
        return blogNews;
      default:
        return successStories;
    }
  };

  const ContentCard = ({ item }) => (
    <div className="group bg-[#141420] border border-[#2a2a3d] rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metrics */}
        <div className="text-purple-400 font-bold text-sm mb-3">
          {item.metrics}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Author */}
        <div className="flex items-center space-x-3 pt-4 border-t border-[#2a2a3d]">
          <img
            src={item.author.avatar}
            alt={item.author.name}
            className="w-8 h-8 rounded-full border border-purple-500/30"
          />
          <span className="text-gray-400 text-sm">{item.author.name}</span>
        </div>
      </div>
    </div>
  );

  const PodcastCard = ({ podcast }) => (
    <div className="group bg-[#141420] border border-[#2a2a3d] rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300 cursor-pointer">
      {/* Image with Play Button */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_30px_#a855f7]">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-white text-xs font-medium">{podcast.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {podcast.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
          {podcast.description}
        </p>
        <div className="text-gray-400 text-xs">
          {podcast.date}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#0a0a0f] to-[#141420] overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Success Stories, Case Studies & Blog
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how businesses are achieving remarkable results with Metro Solver solutions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#141420] border border-[#2a2a3d] rounded-xl p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {getActiveContent().map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>

        {/* Podcast Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Did You Hear about Our Podcast?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tune in to our podcast for insights, interviews, and industry trends
          </p>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold text-base hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Explore All Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesAndPodcastSection;