import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Lottie from "lottie-react";

const TopBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // ✅ Lottie JSON load from public folder
    fetch("/LottieFile/Logo.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load error:", err));
  }, []);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[90vw] flex items-center justify-between px-10 z-[60] pointer-events-none">
      
      {/* 🔹 Logo Section */}
      <div className="flex items-center pointer-events-auto">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 150, height: 150 }}
          />
        )}
      </div>

      {/* 🔹 Right Side Icons */}
      <div className="flex items-center space-x-6 relative pointer-events-auto">
        
        {/* 🛒 Cart */}
        <div className="relative">
          <button
            onClick={() => {
              setShowCart(!showCart);
              setShowProfile(false);
            }}
            className="relative bg-[#1c1c1c]/80 hover:bg-[#2c1c3c]/90 p-3 rounded-full border border-purple-500/30 hover:scale-105 transition"
          >
            <ShoppingCart className="w-8 h-8 text-purple-400" />
          </button>

          {showCart && (
            <div className="absolute right-0 mt-4 w-80 bg-[#12091f] border border-purple-600/30 rounded-2xl shadow-xl p-5 backdrop-blur-xl z-[70]">
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

        {/* 👤 Profile */}
        <div className="relative">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.yrGFlyHk8gxNcUd6EpjozwAAAA?cb=12&w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Profile"
            className="w-14 h-14 rounded-full border-2 border-purple-500 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowCart(false);
            }}
          />

          {showProfile && (
            <div className="absolute right-0 mt-4 w-80 bg-[#12091f] border border-purple-600/30 rounded-2xl shadow-xl p-6 backdrop-blur-xl text-white z-[70]">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.yrGFlyHk8gxNcUd6EpjozwAAAA?cb=12&w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-purple-500 mb-3"
                />
                <h4 className="text-lg font-semibold">Albert Flores</h4>
                <p className="text-gray-400 text-sm mb-4">baker@example.com</p>
                <div className="flex space-x-3 mb-4 bg-[#1b1128] rounded-full p-1">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Website
                  </button>
                  <button className="text-gray-300 px-4 py-1 text-sm font-medium">
                    Dashboard
                  </button>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-white transition">User Profile</li>
                <li className="text-gray-300 hover:text-white transition">Referrals</li>
                <li className="flex items-center justify-between text-gray-300 hover:text-white transition">
                  <span>Rewards</span>
                  <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full font-semibold">
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
