// sections/WhyChooseSection.jsx
import React from 'react';

const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      title: "Cancel Anytime",
      rotation: "-rotate-2",
      delay: "delay-0"
    },
    {
      id: 2,
      title: "24/7 Customer Service",
      rotation: "rotate-3",
      delay: "delay-75"
    },
    {
      id: 3,
      title: "Refers & Earn",
      rotation: "-rotate-1",
      delay: "delay-150"
    },
    {
      id: 4,
      title: "Money Back Guarantee",
      rotation: "rotate-2",
      delay: "delay-300"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why You Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Metro Solver?
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Transform your real estate journey with AI-powered solutions that accelerate business growth, 
              streamline property management, and maximize your investment potential through cutting-edge technology.
            </p>

            {/* Book Now Button */}
            <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="flex items-center space-x-3">
                <span>Book Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            </button>
          </div>

          {/* Right Content - Floating Pills */}
          <div className="relative h-64 lg:h-80">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`absolute bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 hover:scale-110 hover:shadow-[0_0_30px_#6366f1] transition-all duration-500 ${feature.rotation} ${feature.delay} animate-float`}
                style={{
                  top: `${20 + (feature.id - 1) * 25}%`,
                  left: `${10 + (feature.id - 1) * 20}%`,
                  animationDelay: `${feature.id * 0.5}s`
                }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold text-sm whitespace-nowrap">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Preview Section */}
        <div className="relative group">
          {/* Video Thumbnail */}
          <div className="relative bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 h-64 md:h-80 lg:h-96">
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-900/70 flex items-center justify-center">
              {/* Mock Meeting Scene */}
              <div className="absolute inset-0  bg-[url('https://st5.depositphotos.com/9999814/65939/i/1600/depositphotos_659394882-stock-photo-business-people-celebrate-successful-presentation.jpg')] bg-cover bg-center" />
              
              {/* Laptop Mockup */}
              <div className="relative w-64 h-40 bg-gray-900 rounded-lg border border-gray-600 shadow-2xl">
                <div className="absolute inset-2 bg-gray-800 rounded border border-gray-600 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/20 flex items-center justify-center">
                    <div className="text-white text-xs font-medium">Metro Solver Dashboard</div>
                  </div>
                </div>
                {/* Laptop Bottom */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-700 rounded-b-lg" />
              </div>

              {/* Floating People Avatars */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
              <div className="absolute bottom-4 left-8 w-8 h-8 bg-green-500 rounded-full border-2 border-white" />
              <div className="absolute bottom-4 right-8 w-8 h-8 bg-orange-500 rounded-full border-2 border-white" />
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-[0_0_50px_#8b5cf6]">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              </button>
            </div>

            {/* Video Title */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-1">Metro Solver Platform Demo</h3>
                <p className="text-gray-300 text-sm">See how our platform transforms real estate management</p>
              </div>
            </div>
          </div>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;