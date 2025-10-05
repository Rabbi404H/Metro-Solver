// components/ClientLogos.jsx
import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: 'Luminus', id: 1 },
    { name: 'brembo', id: 2 },
    { name: 'motorola', id: 3 },
    { name: 'Luminus', id: 4 },
    { name: 'brembo', id: 5 }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-5">
        

        <div className=" grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className="border-b-gray-600 rounded-2xl flex items-center justify-center p-4 group"
            >
              <div className="text-2xl font-bold text-gray-600 group-hover:text-purple-400 transition-all duration-500 transform group-hover:scale-110 group-hover:animate-pulse">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;