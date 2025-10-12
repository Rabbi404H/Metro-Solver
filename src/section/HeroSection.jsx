import React from "react";

const HeroSection = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center md:items-start md:pl-20 lg:pl-40 pt-32 md:pt-40 overflow-hidden text-white">
      {/* Background Video / Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Comp_1_4.gif"
          alt="Background Animation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 md:w-72 h-40 md:h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 md:w-96 h-60 md:h-96 bg-purple-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-64 h-40 md:h-64 bg-purple-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert to Digitalise
          <span className="block mt-2">
            <img
              src="/frame_1229.gif"
              alt="Your Growth"
              className="w-48 sm:w-60 md:w-auto inline-block"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-glow hidden">
              Your Growth
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 sm:mb-12 max-w-3xl leading-relaxed mx-auto md:mx-0">
          We are constantly growing or learning and improving. Enter your
          personal real estate sanctuary, where finding the ideal home is just
          the beginning of your journey.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 sm:gap-6 mb-10 md:mb-16">
          <button className="group relative bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40">
            <span className="relative z-10">Explore Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto md:mx-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2 group-hover:animate-pulse">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-purple-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
