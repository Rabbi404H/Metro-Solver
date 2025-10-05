// sections/ContactServicesFAQSection.jsx
import React, { useState } from 'react';

const ContactServicesFAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const services = [
    'Digital Marketing',
    'Web & Software Development',
    'Graphic Design & Logo',
    'Multimedia & Video Editing',
    'Creative Writing Solutions',
    'E-Commerce Solutions',
    'Refund, Earn & Cancel Policies',
    'General Rules & Ethical Information',
    'General Policies & Customer Support'
  ];

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer in digital marketing?',
      answer: 'We offer comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, and analytics tracking to help your business grow online.'
    },
    {
      id: 2,
      question: 'How can digital marketing help my business?',
      answer: 'Digital marketing increases your online visibility, drives targeted traffic to your website, generates qualified leads, builds brand awareness, and provides measurable ROI through data-driven strategies.'
    },
    {
      id: 3,
      question: 'How do you measure campaign success?',
      answer: 'We track key performance indicators (KPIs) including website traffic, conversion rates, lead generation, customer acquisition cost, return on investment, and engagement metrics across all platforms.'
    },
    {
      id: 4,
      question: 'Do you offer local SEO?',
      answer: 'Yes, we specialize in local SEO to help businesses appear in local search results, Google My Business optimization, local directory listings, and location-based marketing strategies.'
    }
  ];

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0a0f] to-[#141420] overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Got Questions? We've got Answers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our services and how we can help your business grow
          </p>
        </div>

        {/* Services + FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Services List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-4 rounded-xl border border-[#2a2a3d] hover:border-purple-500 hover:shadow-[0_0_15px_#a855f7] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-white group-hover:text-purple-400 transition-colors duration-300 text-lg">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-[#141420] border border-[#2a2a3d] rounded-xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_10px_#a855f7] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-semibold hover:bg-[#0a0a0f] transition-colors duration-300"
                  >
                    <span className="text-lg pr-4">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                        activeFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFAQ === faq.id && (
                    <div className="px-6 py-4 bg-[#0a0a0f] border-t border-[#2a2a3d]">
                      <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map + Contact Info Section */}
        <div className="relative mb-20 rounded-2xl overflow-hidden border border-[#2a2a3d]">
          {/* Map Placeholder */}
          <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 relative">
            {/* Map Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.it/1200/600?random=map')] bg-cover bg-center opacity-40" />
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Contact Info Box */}
            <div className="absolute top-6 left-6 bg-[#141420] border border-[#2a2a3d] rounded-xl p-6 max-w-sm hover:border-purple-500 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Metro Solver</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">📍</span>
                  <div>
                    <div className="text-white font-semibold">United Kingdom</div>
                    <div className="text-gray-300 text-sm">
                      Metro Solver Limited, Grapham Road, London E8 1BX, United Kingdom
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">📞</span>
                  <div className="space-y-1">
                    <div className="text-white text-sm">+442045 465546</div>
                    <div className="text-white text-sm">+442045 465505</div>
                    <div className="text-white text-sm">020946 465505</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-2xl shadow-purple-500/50 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#141420] border border-[#2a2a3d] rounded-2xl p-8 md:p-12 text-center hover:border-purple-500/50 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            METRO SOLVER – YOUR PARTNER
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-gray-300 text-lg mb-8">
            Join the 25000+ client in our network
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#0a0a0f] border border-[#2a2a3d] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition-all duration-300"
            />
            <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#a855f7] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Need immediate assistance? Contact our support team 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactServicesFAQSection;