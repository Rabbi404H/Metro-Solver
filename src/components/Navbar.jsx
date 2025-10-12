import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "White label", href: "/white-label" },
    { name: "Contact us", href: "/contact" },
  ];

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const isActiveLink = (href) => window.location.pathname === href;

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      {/* Main Nav Container */}
      <div className="mx-auto max-w-fit bg-gradient-to-r from-[#0B0B0F]/90 to-[#1a0b2e]/90 backdrop-blur-xl border border-purple-500/30 px-10 py-3 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.25)] flex items-center justify-center space-x-10">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigateTo(item.href)}
              className={`relative text-base font-medium px-4 py-1 rounded-full transition-all duration-300 focus:outline-none ${
                isActiveLink(item.href)
                  ? "text-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  : "text-gray-300 hover:text-purple-400 hover:bg-white/10"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-7 h-7"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-lg w-fit mx-auto py-4 px-5 space-y-2 transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigateTo(item.href);
                setIsMobileMenuOpen(false);
              }}
              className={`block text-center w-full py-2 rounded-lg text-sm transition-all duration-300 ${
                isActiveLink(item.href)
                  ? "text-purple-400 bg-purple-500/10"
                  : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
