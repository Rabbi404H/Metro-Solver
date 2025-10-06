import React, { useState } from "react";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "about.jsx" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "White label", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  const profileCards = [
    {
      name: "Website",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      name: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      name: "User Profile",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      name: "Referrals",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      name: "Rewards",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
    },
    {
      name: "Log out",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
      isLogout: true,
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - CA */}
          <div className="flex items-center space-x-3">
            <div className="w-30 h-30 ">
              <img src="frame_1.gif" alt="img" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4 inline ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button className="hidden md:flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="font-medium">Cart</span>
          </button>

          {/* Profile Section with Card */}
          <div className="flex items-center space-x-4">
            {/* Desktop Profile Card */}
            <div className="hidden md:flex items-center relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center border-2 border-purple-400/50">
                  <span>
                    {" "}
                    <img
                      className=" rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/JimParsons-byPhilipRomano.jpg/250px-JimParsons-byPhilipRomano.jpg"
                      alt=""
                    />
                  </span>
                </div>
              </button>

              {/* Profile Card Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 top-14 w-80 bg-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-xl shadow-2xl">
                  {/* Profile Header */}
                  <div className="p-6 border-b border-purple-500/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center border-4 border-purple-400/30">
                        <span className="text-white font-bold text-xl">AF</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">
                          Albert Flores
                        </h3>
                        <p className="text-purple-400 text-sm">Admin</p>
                        <p className="text-gray-400 text-sm mt-1">
                          baker@example.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Menu Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {profileCards.map((card, index) => (
                        <a
                          key={index}
                          href="#"
                          className={`rounded-lg p-4 hover:scale-105 transition-all duration-300 group border ${
                            card.isLogout
                              ? "bg-red-500/10 hover:bg-red-500/20 border-red-500/20"
                              : "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${
                              card.isLogout
                                ? "bg-red-500/20 group-hover:bg-red-500/30"
                                : "bg-purple-500/20 group-hover:bg-purple-500/30"
                            }`}
                          >
                            <div
                              className={
                                card.isLogout
                                  ? "text-red-400"
                                  : "text-purple-400"
                              }
                            >
                              {card.icon}
                            </div>
                          </div>
                          <p
                            className={`text-sm font-semibold ${
                              card.isLogout ? "text-red-400" : "text-white"
                            }`}
                          >
                            {card.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Same Border Style */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors border-b border-purple-500/10 last:border-b-0"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4 inline ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
            ))}

            {/* Mobile Profile Cards */}
            <div className="mt-4 pt-4 border-t border-purple-500/20">
              <div className="grid grid-cols-2 gap-3 p-2">
                {profileCards.map((card, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`rounded-lg p-3 text-center hover:scale-105 transition-all duration-300 border ${
                      card.isLogout
                        ? "bg-red-500/10 hover:bg-red-500/20 border-red-500/20"
                        : "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center mb-2 ${
                        card.isLogout ? "bg-red-500/20" : "bg-purple-500/20"
                      }`}
                    >
                      <div
                        className={
                          card.isLogout ? "text-red-400" : "text-purple-400"
                        }
                      >
                        {card.icon}
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        card.isLogout ? "text-red-400" : "text-white"
                      }`}
                    >
                      {card.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {(isProfileOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => {
            setIsProfileOpen(false);
            setIsMobileMenuOpen(false);
          }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
