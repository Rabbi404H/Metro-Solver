// sections/LatestWorksSection.jsx
import React from 'react';

const LatestWorksSection = () => {
  const projects = {
    row1: [
      {
        id: 1,
        title: "Finance Pro Dashboard",
        subtitle: "Real-time analytics with interactive charts",
        category: "Web App",
        accent: "purple",
        image: "https://images.unsplash.it/400/180?random=101&gravity=center"
      },
      {
        id: 2,
        title: "HealthTrack Mobile",
        subtitle: "Fitness tracking with AI insights",
        category: "Mobile App",
        accent: "green",
        image: "https://images.unsplash.it/400/180?random=102&gravity=center"
      },
      {
        id: 3,
        title: "MusicFlow Player",
        subtitle: "Streaming service with social features",
        category: "Web App",
        accent: "orange",
        image: "https://images.unsplash.it/400/180?random=103&gravity=center"
      },
      {
        id: 4,
        title: "TaskMaster Pro",
        subtitle: "Team collaboration productivity suite",
        category: "SaaS",
        accent: "purple",
        image: "https://images.unsplash.it/400/180?random=104&gravity=center"
      }
    ],
    row2: [
      {
        id: 5,
        title: "NFT Art Gallery",
        subtitle: "Digital art marketplace with blockchain integration and 3D previews for collectors and creators",
        category: "Blockchain",
        accent: "green",
        image: "https://images.unsplash.it/500/220?random=105&gravity=center"
      },
      {
        id: 6,
        title: "Creative Agency Portal",
        subtitle: "Comprehensive agency management system with client portals and project tracking",
        category: "Web Platform",
        accent: "orange",
        image: "https://images.unsplash.it/500/220?random=106&gravity=center"
      },
      {
        id: 7,
        title: "Crypto Analytics Hub",
        subtitle: "Advanced cryptocurrency dashboard with real-time market data and trading insights",
        category: "FinTech",
        accent: "purple",
        image: "https://images.unsplash.it/500/220?random=107&gravity=center"
      }
    ],
    row3: [
      {
        id: 8,
        title: "E-Shop Platform",
        subtitle: "Modern e-commerce with AR preview",
        category: "E-Commerce",
        accent: "green",
        image: "https://images.unsplash.it/400/180?random=108&gravity=center"
      },
      {
        id: 9,
        title: "Car Rental Pro",
        subtitle: "Vehicle booking with live tracking",
        category: "Mobile App",
        accent: "orange",
        image: "https://images.unsplash.it/400/180?random=109&gravity=center"
      },
      {
        id: 10,
        title: "UI Kit Library",
        subtitle: "Design system component library",
        category: "Design System",
        accent: "purple",
        image: "https://images.unsplash.it/400/180?random=110&gravity=center"
      },
      {
        id: 11,
        title: "AI Assistant",
        subtitle: "Smart productivity companion",
        category: "AI/ML",
        accent: "green",
        image: "https://images.unsplash.it/400/180?random=111&gravity=center"
      }
    ]
  };

  const getAccentColor = (accent) => {
    switch (accent) {
      case 'purple':
        return {
          glow: 'hover:shadow-[0_0_30px_#a855f7]',
          border: 'border-purple-500/30',
          gradient: 'from-purple-500/10 to-purple-600/5',
          text: 'text-purple-400'
        };
      case 'green':
        return {
          glow: 'hover:shadow-[0_0_30px_#10b981]',
          border: 'border-green-500/30',
          gradient: 'from-green-500/10 to-green-600/5',
          text: 'text-green-400'
        };
      case 'orange':
        return {
          glow: 'hover:shadow-[0_0_30px_#f59e0b]',
          border: 'border-orange-500/30',
          gradient: 'from-orange-500/10 to-orange-600/5',
          text: 'text-orange-400'
        };
      default:
        return {
          glow: 'hover:shadow-[0_0_30px_#a855f7]',
          border: 'border-purple-500/30',
          gradient: 'from-purple-500/10 to-purple-600/5',
          text: 'text-purple-400'
        };
    }
  };

  const ProjectCard = ({ project, size }) => {
    const accent = getAccentColor(project.accent);
    const isLarge = size === 'large';

    return (
      <div
        className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg border ${accent.border} rounded-2xl overflow-hidden hover:scale-105 ${accent.glow} transition-all duration-500 cursor-pointer ${
          isLarge ? 'h-80' : 'h-60'
        }`}
      >
        {/* Glassmorphism Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Project Image */}
        <div className={`relative w-full overflow-hidden ${isLarge ? 'h-44' : 'h-32'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        {/* Project Content */}
        <div className={`relative p-5 ${isLarge ? 'h-36' : 'h-28'} flex flex-col justify-between`}>
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 mb-3">
              <span className={`text-xs font-semibold ${accent.text}`}>
                {project.category}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-gray-100 transition-colors">
              {project.title}
            </h3>
            
            {/* Subtitle */}
            <p className={`text-gray-300 leading-relaxed ${
              isLarge ? 'text-sm line-clamp-2' : 'text-xs line-clamp-2'
            }`}>
              {project.subtitle}
            </p>
          </div>

          {/* View Button */}
          <div className="flex items-center justify-between mt-2">
            <button className={`px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 text-white text-xs font-medium hover:bg-black/60 transition-all duration-300 hover:scale-105 ${accent.glow}`}>
              View Case Study
            </button>
            <div className={`w-2 h-2 rounded-full ${accent.text} animate-pulse`} />
          </div>
        </div>

        {/* Glowing Corner Accents */}
        <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${accent.border} rounded-tl-2xl opacity-60`} />
        <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${accent.border} rounded-tr-2xl opacity-60`} />
        <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${accent.border} rounded-bl-2xl opacity-60`} />
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${accent.border} rounded-br-2xl opacity-60`} />
      </div>
    );
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-green-200 bg-clip-text text-transparent">
            Our Latest Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge digital solutions that blend innovative design 
            with powerful functionality to drive business growth and user engagement.
          </p>
        </div>

        {/* Row 1 - 4 Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.row1.map((project) => (
            <ProjectCard key={project.id} project={project} size="small" />
          ))}
        </div>

        {/* Row 2 - 3 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.row2.map((project) => (
            <ProjectCard key={project.id} project={project} size="large" />
          ))}
        </div>

        {/* Row 3 - 4 Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.row3.map((project) => (
            <ProjectCard key={project.id} project={project} size="small" />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-purple-600 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">View Complete Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
          </button>
          <p className="text-gray-400 text-sm mt-4">
            +42 projects delivered to satisfied clients worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestWorksSection;