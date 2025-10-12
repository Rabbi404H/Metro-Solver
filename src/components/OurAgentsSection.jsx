import React, { useState } from "react";

const OurAgentsSection = () => {
  const categories = [
    "All",
    "Agency",
    "Creative",
    "Leadership",
    "Grow Marketing",
    "Technology",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const agents = [
    {
      name: "Ayesha Siddiqah",
      role: "Co-founder Leader",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
      category: "Leadership",
    },
    {
      name: "Ayesha Siddiqah",
      role: "Co-founder Leader",
      img: "https://images.unsplash.com/photo-1614280936122-41bdb0f83b3f?auto=format&fit=crop&w=600&q=80",
      category: "Agency",
    },
    {
      name: "Ayesha Siddiqah",
      role: "Co-founder Leader",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
      category: "Creative",
    },
    {
      name: "Ayesha Siddiqah",
      role: "Co-founder Leader",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
      category: "Technology",
    },
  ];

  const filteredAgents =
    activeCategory === "All"
      ? agents
      : agents.filter((agent) => agent.category === activeCategory);

  return (
    <section className="w-full bg-gradient-to-b from-[#0a0118] via-[#14092a] to-[#0a0118] py-20 px-6 md:px-16 lg:px-24 text-white">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Our <span className="text-purple-400">Agents</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-500 to-purple-700 border-purple-400 text-white"
                : "bg-[#1b0f2a] border-purple-800/40 text-gray-300 hover:border-purple-400 hover:text-purple-300"
            } transition duration-300`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredAgents.concat(filteredAgents).concat(filteredAgents).map((agent, index) => (
          <div
            key={index}
            className="group relative bg-[#1a1028] rounded-2xl overflow-hidden shadow-lg border border-purple-800/30 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition duration-500"
          >
            <img
              src={agent.img}
              alt={agent.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-sm text-gray-300">{agent.role}</p>
            </div>

            {/* corner badge */}
            <div className="absolute top-3 right-3 bg-[#1b0f2a]/70 rounded-full p-2 border border-purple-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-16">
        <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          View More
        </button>
      </div>
    </section>
  );
};

export default OurAgentsSection;
