// sections/ContactFAQSection.jsx
import React, { useState } from 'react';

const ContactFAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const socialIcons = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '🎥', url: '#' }
  ];

  const supportTypes = [
    'General Inquiry',
    'Technical Support',
    'Sales Question',
    'Partnership',
    'Other'
  ];

  const services = [
    'Web & Software Development',
    'Graphic Design & Logo',
    'Multimedia & Video Editing',
    'Creative Writing Solutions',
    'E-Commerce Solutions',
    'Refund/Earn/Cancel Policies',
    'Getting Started & General Info',
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
      question: 'Do you offer local SEO services?',
      answer: 'Yes, we specialize in local SEO to help businesses appear in local search results, Google My Business optimization, local directory listings, and location-based marketing strategies.'
    },
    {
      id: 4,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. Typically, web development projects take 4-8 weeks, while digital marketing campaigns show results within 3-6 months of consistent implementation.'
    },
    {
      id: 5,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive ongoing support packages including maintenance, updates, performance monitoring, and regular strategy adjustments to ensure long-term success.'
    },
    {
      id: 6,
      question: 'What industries do you specialize in?',
      answer: 'We have experience across multiple industries including e-commerce, healthcare, finance, education, technology, real estate, and professional services.'
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
        {/* Top Section - Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-25 h-25">
                  <img src="/public/Frame.gif" alt="img" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Still Have A Questions?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Get in touch with our team. We're here to help you with any questions about our services, pricing, or how we can help grow your business.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 bg-[#141420] border border-[#2a2a3d] rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_#a855f7] transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <span>📧</span>
                <span>contact@metrosolver.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span>🕒</span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#141420] border border-[#2a2a3d] rounded-2xl p-8">
            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#0a0a0f] border border-[#2a2a3d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#0a0a0f] border border-[#2a2a3d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone & Support Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    WhatsApp/Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-[#0a0a0f] border border-[#2a2a3d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Type of Support *
                  </label>
                  <select
                    required
                    className="w-full bg-[#0a0a0f] border border-[#2a2a3d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition-all duration-300"
                  >
                    <option value="">Select support type</option>
                    {supportTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3d] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#141420] border border-[#2a2a3d] rounded-2xl p-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Got Questions? We've got Answers
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Services List */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#0a0a0f] hover:border hover:border-purple-500/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-[#2a2a3d] rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-medium hover:bg-[#0a0a0f] transition-colors duration-300"
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
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
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Can't find what you're looking for?</p>
          <button className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#a855f7]">
            Contact Support Directly
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQSection;