// sections/HowItWorksSection.jsx
import React from 'react';

const HowItWorksSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Delivery and Support",
      icon: "🚚",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
    },
    {
      id: 2,
      title: "Book a Call",
      icon: "📞",
      position: "top-1/4 right-0 translate-x-1/2 -translate-y-1/2"
    },
    {
      id: 3,
      title: "Quality Assurance",
      icon: "✅",
      position: "bottom-1/4 right-0 translate-x-1/2 translate-y-1/2"
    },
    {
      id: 4,
      title: "Requirement Analysis",
      icon: "📊",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
    },
    {
      id: 5,
      title: "Implement & Develop",
      icon: "💻",
      position: "bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2"
    },
    {
      id: 6,
      title: "Service Customization",
      icon: "⚙️",
      position: "top-1/4 left-0 -translate-x-1/2 -translate-y-1/2"
    }
  ];

  const stats = [
    {
      number: "150+",
      label: "Current Clients"
    },
    {
      number: "25k+",
      label: "Completed Projects"
    },
    {
      number: "90+",
      label: "Metro Solver Teams"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      review: "Metro Solver transformed our business operations. Their team delivered beyond expectations with exceptional support throughout the process.",
      source: "Google Reviews",
      rating: "★★★★★",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEZoDgB8gHS24QtJCrx40YqPTIg8nKa0Otw&s"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      review: "The circular process flow made project management seamless. Every step was clearly defined and executed perfectly.",
      source: "Trustpilot",
      rating: "★★★★★",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEZoDgB8gHS24QtJCrx40YqPTIg8nKa0Otw&s"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Startup Founder",
      review: "Outstanding service! The team's attention to detail and innovative solutions helped us scale rapidly. Highly recommended!",
      source: "Clutch",
      rating: "★★★★★",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEZoDgB8gHS24QtJCrx40YqPTIg8nKa0Otw&s"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0a0f] to-[#141420] overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our streamlined process ensures seamless project execution from concept to delivery
          </p>
        </div>

        {/* Circular Process Flow */}
        <div className="relative flex justify-center items-center mb-20">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Central Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-full border border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">How it Works?</div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-3" />
                <div className="text-purple-300 text-sm">6 Simple Steps</div>
              </div>
            </div>

            {/* Process Steps */}
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`absolute ${step.position} group cursor-pointer`}
              >
                <div className="flex flex-col items-center space-y-3">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-[#141420] border border-purple-500/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_#a855f7] group-hover:border-purple-400 transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/10">
                    <span className="text-white text-xs font-medium text-center whitespace-nowrap">
                      {step.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <path
                d="M200,50 C280,80 320,120 350,200 C320,280 280,320 200,350 C120,320 80,280 50,200 C80,120 120,80 200,50"
                stroke="url(#purpleGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#141420] border border-[#2a2a3d] rounded-2xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center relative">
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
                )}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People Say
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Metro Solver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-[#141420] border border-[#2a2a3d] rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300 cursor-pointer"
            >
              {/* Rating */}
              <div className="text-yellow-400 text-lg mb-4">
                {testimonial.rating}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                "{testimonial.review}"
              </p>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Source */}
              <div className="mt-4 pt-4 border-t border-[#2a2a3d]">
                <div className="text-purple-400 text-sm font-medium">
                  {testimonial.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;