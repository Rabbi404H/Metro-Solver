// sections/ServicesSection.jsx
import React from 'react';
import { FaPaintBrush, FaCode, FaVideo, FaBullhorn, FaPenNib, FaSearch, FaCube, FaShoppingCart, FaUsers, FaGift, FaGlobe, FaServer, FaTshirt, FaUniversity } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    { title: "Graphic Design", icon: <FaPaintBrush />, description: "Designing logos, banners, and social media posts." },
    { title: "Web & Software Development", icon: <FaCode />, description: "Creating websites, software, and mobile apps." },
    { title: "Multimedia & Video Editing", icon: <FaVideo />, description: "Editing videos and creating animations." },
    { title: "Digital Marketing", icon: <FaBullhorn />, description: "Promoting businesses online through various strategies." },
    { title: "Creative Writing Solution", icon: <FaPenNib />, description: "Providing content writing services." },
    { title: "SEO", icon: <FaSearch />, description: "Optimizing websites for search engines." },
    { title: "3D Animation & Visualization", icon: <FaCube />, description: "Creating 3D models and animations." },
    { title: "E-Commerce Solution", icon: <FaShoppingCart />, description: "Developing online stores and e-commerce platforms." },
    { title: "Accesshiring", icon: <FaUsers />, description: "Managing recruitment and access solutions." },
    { title: "Special Combo", icon: <FaGift />, description: "Offering a combination of services at a discounted rate." },
    { title: "Premium Website", icon: <FaGlobe />, description: "Building high-quality, professional websites." },
    { title: "Premium Domains", icon: <FaServer />, description: "Selling premium domain names." },
    { title: "Proxy", icon: <FaServer />, description: "Providing proxy services for secure browsing." },
    { title: "Merchandise", icon: <FaTshirt />, description: "Selling branded merchandise." },
    { title: "Academy", icon: <FaUniversity />, description: "Offering educational courses and training." },
  ];

  return (
    <section className="py-16 bg-black/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the wide range of digital solutions we provide to grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-purple-400 text-3xl mb-4">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Read More Button */}
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-md transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Latest Works Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Latest Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of our recent projects and collaborations that helped businesses grow digitally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
