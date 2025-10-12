import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Lottie from "lottie-react";

const TopBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/LottieFile/Logo.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load error:", err));
  }, []);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 w-[95vw] flex items-center justify-between px-5 md:px-10 z-[60] pointer-events-none">

      {/* 🔹 Logo Section */}
      <div className="flex items-center pointer-events-auto">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 100, height: 100 }}
            className="md:w-[150px] md:h-[150px]"
          />
        )}
      </div>

      {/* 🔹 Right Side Icons */}
      <div className="flex items-center space-x-4 md:space-x-6 relative pointer-events-auto">

        {/* 🛒 Cart */}
        <div className="relative">
          <button
            onClick={() => {
              setShowCart(!showCart);
              setShowProfile(false);
            }}
            className="relative bg-[#1c1c1c]/80 hover:bg-[#2c1c3c]/90 p-2 md:p-3 rounded-full border border-purple-500/30 hover:scale-105 transition"
          >
            <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
          </button>

          {showCart && (
            <div className="absolute right-0 mt-3 w-64 sm:w-72 md:w-80 bg-[#12091f] border border-purple-600/30 rounded-2xl shadow-xl p-4 md:p-5 backdrop-blur-xl z-[70]">
              <h3 className="text-base md:text-lg font-semibold mb-3 text-purple-300">
                Shopping Cart
              </h3>
              <div className="space-y-3 md:space-y-4 max-h-52 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      UI Design Package
                    </p>
                    <p className="text-xs text-gray-400">$49.99</p>
                  </div>
                  <button className="text-xs md:text-sm text-red-400 hover:text-red-500 transition">
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
                  <button className="text-xs md:text-sm text-red-400 hover:text-red-500 transition">
                    Remove
                  </button>
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

        {/* 👤 Profile */}
        <div className="relative">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.yrGFlyHk8gxNcUd6EpjozwAAAA?cb=12&w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Profile"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-purple-500 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowCart(false);
            }}
          />

          {showProfile && (
            <div className="absolute right-0 mt-3 w-64 sm:w-72 md:w-80 bg-[#12091f] border border-purple-600/30 rounded-2xl shadow-xl p-4 md:p-6 backdrop-blur-xl text-white z-[70]">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.yrGFlyHk8gxNcUd6EpjozwAAAA?cb=12&w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Profile"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-purple-500 mb-3"
                />
                <h4 className="text-base md:text-lg font-semibold">Albert Flores</h4>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">baker@example.com</p>
                <div className="flex space-x-2 md:space-x-3 mb-3 md:mb-4 bg-[#1b1128] rounded-full p-1">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                    Website
                  </button>
                  <button className="text-gray-300 px-3 md:px-4 py-1 text-xs md:text-sm font-medium">
                    Dashboard
                  </button>
                </div>
              </div>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="text-gray-300 hover:text-white transition">User Profile</li>
                <li className="text-gray-300 hover:text-white transition">Referrals</li>
                <li className="flex items-center justify-between text-gray-300 hover:text-white transition">
                  <span>Rewards</span>
                  <span className="bg-red-500 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-semibold">
                    468 Points
                  </span>
                </li>
                <li className="text-gray-300 hover:text-white transition">Log out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
