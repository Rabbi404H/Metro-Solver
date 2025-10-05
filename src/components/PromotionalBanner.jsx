// components/PromotionalBanner.jsx
import React from 'react';

const PromotionalBanner = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 animate-bounce hover:animate-none">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">%</span>
            </div>
            <div>
              <div className="font-bold text-lg">Get 15% OFF</div>
              <div className="text-sm text-purple-200">Limited Time Offer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;