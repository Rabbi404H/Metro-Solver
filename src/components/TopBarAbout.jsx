import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Lottie from "lottie-react";

const TopBarAbout = () => {
  const [showCart, setShowCart] = useState(false);

  // ✅ Public folder থেকে logo.json load করব fetch এর মাধ্যমে
  const [logoAnimation, setLogoAnimation] = useState(null);

  // animation file load
  import("/public/LottieFile/Logo.json")
    .then((module) => setLogoAnimation(module.default))
    .catch((err) => console.error("Failed to load Lottie file:", err));

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[80vw] flex items-center justify-between px-10 z-[60] pointer-events-none">
      {/* 🔹 Logo */}
      <div className="flex items-center pointer-events-auto">
        {logoAnimation ? (
          <Lottie
            animationData={logoAnimation}
            loop={true}
            className="w-28 h-28 cursor-pointer hover:scale-105 transition"
          />
        ) : (
          <p className="text-purple-300">Loading...</p>
        )}
      </div>

      {/* 🔹 Right Side */}
      <div className="flex items-center space-x-6 relative pointer-events-auto">
        {/* 🛒 Cart */}
        <div className="relative">
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative bg-[#1c1c1c]/80 hover:bg-[#2c1c3c]/90 p-3 rounded-full border border-purple-500/30 hover:scale-105 transition"
          >
            <ShoppingCart className="items-center relative w-7 h-7 text-purple-400" />
          </button>

          {/* 🧾 Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 mt-4 w-80 bg-[#12091f] border border-purple-600/30 rounded-2xl shadow-xl p-5 backdrop-blur-xl pointer-events-auto z-[70]">
              <h3 className="text-lg font-semibold mb-3 text-purple-300">
                Shopping Cart
              </h3>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      UI Design Package
                    </p>
                    <p className="text-xs text-gray-400">$49.99</p>
                  </div>
                  <button className="text-sm text-red-400 hover:text-red-500 transition">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Branding Toolkit
                    </p>
                    <p className="text-xs text-gray-400">$29.99</p>
                  </div>
                  <button className="text-sm text-red-400 hover:text-red-500 transition">
                    Remove
                  </button>
                </div>
              </div>

              <div className="border-t border-purple-600/30 mt-4 pt-4">
                <div className="flex justify-between text-gray-300 text-sm mb-2">
                  <span>Subtotal</span>
                  <span>$79.98</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full hover:scale-105 transition">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 🔹 Sign In Button */}
        <button className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-semibold px-6 py-2.5 rounded-full hover:scale-105 shadow-lg transition flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
