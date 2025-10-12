import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Lottie from "lottie-react";

const TopBarAbout = () => {
  const [showCart, setShowCart] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(null);

  // Load Lottie animation from public folder
  useEffect(() => {
    fetch("/LottieFile/Logo.json")
      .then((res) => res.json())
      .then((data) => setLogoAnimation(data))
      .catch((err) => console.error("Failed to load Lottie file:", err));
  }, []);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 w-[95vw] md:w-[80vw] flex items-center justify-between px-4 md:px-10 z-[60] pointer-events-none">

      {/* 🔹 Logo */}
      <div className="flex items-center pointer-events-auto">
        {logoAnimation ? (
          <Lottie
            animationData={logoAnimation}
            loop={true}
            className="w-20 h-20 md:w-28 md:h-28 cursor-pointer hover:scale-105 transition"
          />
        ) : (
          <p className="text-purple-300 text-sm md:text-base">Loading...</p>
        )}
      </div>

      {/* 🔹 Right Side */}
      <div className="flex items-center space-x-3 md:space-x-6 relative pointer-events-auto">

        {/* 🛒 Cart */}
        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative bg-[#1c1c1c]/80 hover:bg-[#2c1c3c]/90 p-2 md:p-3 rounded-full border border-purple-500/30 hover:scale-105 transition"
          >
            <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
          </button>

          {/* 🧾 Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 mt-3 w-64 sm:w-72 md:w-80 bg-[#12091f] border border-purple-600/30 rounded-2xl shadow-xl p-4 md:p-5 backdrop-blur-xl pointer-events-auto z-[70]">
              <h3 className="text-base md:text-lg font-semibold mb-3 text-purple-300">
                Shopping Cart
              </h3>
              <div className="space-y-3 md:space-y-4 max-h-52 md:max-h-60 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm md:text-base font-medium text-white">UI Design Package</p>
                    <p className="text-xs md:text-sm text-gray-400">$49.99</p>
                  </div>
                  <button className="text-xs md:text-sm text-red-400 hover:text-red-500 transition">Remove</button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm md:text-base font-medium text-white">Branding Toolkit</p>
                    <p className="text-xs md:text-sm text-gray-400">$29.99</p>
                  </div>
                  <button className="text-xs md:text-sm text-red-400 hover:text-red-500 transition">Remove</button>
                </div>
              </div>

              <div className="border-t border-purple-600/30 mt-3 md:mt-4 pt-3 md:pt-4">
                <div className="flex justify-between text-gray-300 text-xs md:text-sm mb-2">
                  <span>Subtotal</span>
                  <span>$79.98</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-1.5 md:py-2 rounded-full text-sm md:text-base hover:scale-105 transition">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 🔹 Sign In Button */}
        <button className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-semibold px-3 md:px-6 py-2 md:py-2.5 rounded-full hover:scale-105 shadow-lg transition flex items-center space-x-1 md:space-x-2 text-xs md:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m2 4v-4m-4 4v-4m0 4H8m8 0h-1v-4h-1m2 4v-4m-4 4v-4m0 4H8m12 4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
            />
          </svg>
          <span>Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default TopBarAbout;
