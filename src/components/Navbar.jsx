import { useState } from "react";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/About" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "White label", href: "/white-label" },
    { name: "Contact us", href: "/contact" },
    
  ];

  const profileCards = [
    {
      name: "Website",
      href: "/website",
      icon: "🌐",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "📊",
    },
    {
      name: "User Profile",
      href: "/profile",
      icon: "👤",
    },
    {
      name: "Referrals",
      href: "/referrals",
      icon: "👥",
    },
    {
      name: "Rewards",
      href: "/rewards",
      icon: "🎁",
    },
    {
      name: "Log out",
      href: "/logout",
      icon: "🚪",
      isLogout: true,
    },
  ];

  // Simple navigation function
  const navigateTo = (path) => {
    window.location.href = path;
  };

  // Simple active link check
  const isActiveLink = (href) => {
    return window.location.pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigateTo("/")} 
              className="w-32 h-30 focus:outline-none"
            >
              <img src="/frame_1.gif" alt="Logo" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.href)}
                className={`transition-all duration-300 hover:scale-105 relative group focus:outline-none ${
                  isActiveLink(item.href)
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 inline ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-purple-400 transition-all ${
                  isActiveLink(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => navigateTo("/cart")}
            className="hidden md:flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 focus:outline-none"
          >
            <span>🛒</span>
            <span className="font-medium">Cart</span>
          </button>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop Profile Card */}
            <div className="hidden md:flex items-center relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-500/10 transition-all duration-300 focus:outline-none"
              >
                <div className="w-15 h-15 rounded-full flex items-center justify-center border-2 border-purple-400/50">
                  <img
                    className="w-17 h-15 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/JimParsons-byPhilipRomano.jpg/250px-JimParsons-byPhilipRomano.jpg"
                    alt="Profile"
                  />
                </div>
              </button>

              {/* Profile Card Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 top-14 w-80 bg-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-xl shadow-2xl">
                  <div className="p-6 border-b border-purple-500/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center border-4 border-purple-400/30">
                        <span className="text-white font-bold text-xl">AF</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">Albert Flores</h3>
                        <p className="text-purple-400 text-sm">Admin</p>
                        <p className="text-gray-400 text-sm mt-1">baker@example.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {profileCards.map((card, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            navigateTo(card.href);
                            setIsProfileOpen(false);
                          }}
                          className={`rounded-lg p-4 hover:scale-105 transition-all duration-300 group border focus:outline-none ${
                            card.isLogout
                              ? "bg-red-500/10 hover:bg-red-500/20 border-red-500/20"
                              : "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${
                            card.isLogout
                              ? "bg-red-500/20 group-hover:bg-red-500/30"
                              : "bg-purple-500/20 group-hover:bg-purple-500/30"
                          }`}>
                            <div className={`text-lg ${card.isLogout ? "text-red-400" : "text-purple-400"}`}>
                              {card.icon}
                            </div>
                          </div>
                          <p className={`text-sm font-semibold ${
                            card.isLogout ? "text-red-400" : "text-white"
                          }`}>
                            {card.name}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigateTo(item.href);
                  setIsMobileMenuOpen(true);
                }}
                className={`block w-full text-left py-3 px-4 hover:bg-purple-500/10 rounded-lg transition-colors border-b border-purple-500/10 last:border-b-0 focus:outline-none ${
                  isActiveLink(item.href) ? "text-purple-400 bg-purple-500/10" : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className="w-4 h-4 inline ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
               ))}


            {/* Mobile Profile Cards */}
            <div className="mt-4 pt-4 border-t border-purple-500/20">
              <div className="grid grid-cols-2 gap-3 p-2">
                {profileCards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigateTo(card.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`rounded-lg p-3 text-center hover:scale-105 transition-all duration-300 border focus:outline-none ${
                      card.isLogout
                        ? "bg-red-500/10 hover:bg-red-500/20 border-red-500/20"
                        : "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20"
                    }`}
                  >
                    <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center mb-2 text-lg ${
                      card.isLogout ? "bg-red-500/20" : "bg-purple-500/20"
                    }`}>
                      <span className={card.isLogout ? "text-red-400" : "text-purple-400"}>
                        {card.icon}
                      </span>
                    </div>
                    <span className={`text-xs font-semibold ${
                      card.isLogout ? "text-red-400" : "text-white"
                    }`}>
                      {card.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {(isProfileOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
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