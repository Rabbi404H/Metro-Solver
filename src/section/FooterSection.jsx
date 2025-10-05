// sections/FooterSection.jsx
import React from 'react';

const FooterSection = () => {
  const contactInfo = {
    title: "Contact",
    address: "Metro Solver Limited, Grantham Road, London E12 5LY, United Kingdom",
    phone: "+447905453464",
    email: "official@metrosolver.com"
  };

  const companyLinks = [
    "Home",
    "About Us",
    "Our Team",
    "User Profile",
    "White Labeling"
  ];

  const supportLinks = [
    "Our Stories",
    "Career",
    "Start My Own Business",
    "Contact Us",
    "Start Earning"
  ];

  const servicesLinks = [
    "Digital Marketing",
    "Creative Solution Writing",
    "Web & Software Development",
    "E-Commerce Solution",
    "Graphic Designing",
    "Media Production",
    "Merchandise",
    "Premium Website",
    "Premium Domains",
    "Special Combo"
  ];

  const partners = [
    { name: "Meta (Facebook)", icon: "🔵" },
    { name: "Google Marketing Platform", icon: "🔴" },
    { name: "Microsoft Partner", icon: "🟢" },
    { name: "AWS Partner", icon: "🟠" },
    { name: "Amazon SPN", icon: "🟡" },
    { name: "TikTok Marketing Partners", icon: "⚫" }
  ];

  return (
    <footer className="bg-[#0a0a0f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Column 1 - Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">{contactInfo.title}</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                {contactInfo.address}
              </p>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="block text-gray-300 hover:text-[#a855f7] transition-colors duration-300 text-sm"
              >
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="block text-gray-300 hover:text-[#a855f7] transition-colors duration-300 text-sm"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-[#a855f7] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-[#a855f7] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-[#a855f7] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Currency */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Currency</h3>
            <div className="border border-[#2a2a3d] rounded-lg px-4 py-2 hover:border-[#a855f7] transition-colors duration-300">
              <select className="w-full bg-transparent text-gray-300 text-sm focus:outline-none">
                <option value="GBP">GBP - British Pound</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="CAD">CAD - Canadian Dollar</option>
              </select>
            </div>
          </div>

          {/* Column 6 - Partners */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Partners</h3>
            <div className="flex space-y-3">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[#141420] hover:scale-105 hover:shadow-[0_0_10px_#a855f7] transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {partner.icon}
                  </span>
                  <span className="text-gray-300 text-xs group-hover:text-white transition-colors duration-300">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="border-t border-[#2a2a3d] pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © Metro Solver - All Rights Reserved 2024
            </p>
            <p className="text-gray-400 text-xs">
              Metro Solver Ltd Incorporated in England & Wales Registration No: 15229949
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;