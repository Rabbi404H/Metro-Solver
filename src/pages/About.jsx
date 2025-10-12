import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaGithub, FaUsers, FaProjectDiagram, FaCode, } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import TopBarAbout from '../components/TopBarAbout';
import OurAgentsSection from '../components/OurAgentsSection';
import NewsletterSection from '../components/NewsletterSection';


const AboutPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('GBP');

  // Team data
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Web Developer", image: "/team/john.jpg" },
    { id: 2, name: "Sarah Smith", role: "UI/UX Designer", image: "/team/sarah.jpg" },
    { id: 3, name: "Mike Johnson", role: "Project Manager", image: "/team/mike.jpg" },
    { id: 4, name: "Emily Brown", role: "Digital Marketer", image: "/team/emily.jpg" },
    { id: 5, name: "David Wilson", role: "Software Engineer", image: "/team/david.jpg" },
    { id: 6, name: "Lisa Davis", role: "Content Strategist", image: "/team/lisa.jpg" }
  ];

  const services = [
    'Digital Marketing',
    'Creative Writing Solution',
    'Web & Software Development',
    'E-Commerce Setup',
    'Graphic Design',
    'Multimedia & Video Editing'
  ];

  const partners = [
    'Meta', 'Google Marketing Platform', 'Microsoft Partner', 'AWS Partner', 
    'Fiverr Pro', 'Amazon SPN', 'TikTok'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0a001a] via-[#110228] to-[#1a0044] text-white">
      <Navbar/>
      <TopBarAbout/>

 <section className="relative  top-50 py-20 px-6 overflow-hidden">
  <div className="absolute  inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"></div>
  <div className="container mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div 
        className="space-y-8"
        {...fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Unveiling the Essence Of Our Metro Solver
        </h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to Metro Solver, where creativity meets strategy, and brands come to life. We are not just a branding agency; 
            we are architects of identity, storytellers of success, and partners in your brand's journey. Metro Solver is a hub 
            of innovative minds, passionate about turning concepts into captivating brand experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            At our overarching goal is to redefine industry standards by providing a dynamic and adaptive HR and CRM SaaS platform. 
            We aim to empower businesses of all sizes to optimise their operations, foster employee growth, and cultivate enduring 
            customer relationships.
          </p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
          Book Now
        </button>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400 text-sm">Current Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">25k+</div>
            <div className="text-gray-400 text-sm">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">90+</div>
            <div className="text-gray-400 text-sm">Metro Solver Teams</div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image Placeholder */}
      <motion.div 
        className="relative"
        {...fadeInUp}
      >
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-1 shadow-2xl shadow-purple-500/20">
          <div className="bg-gray-800 rounded-2xl h-[500px] flex items-center justify-center overflow-hidden">
            <img 
              src="image1.png" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>



      Company Stats Section
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <motion.div 
              className="bg-gradient-to-b from-[#0a0118] to-[#110228] rounded-2xl p-8 text-center border border-gray-800 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-xl font-semibold text-gray-300">Current Clients</div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div 
              className="bg-gradient-to-b from-[#0a0118] to-[#110228] rounded-2xl p-8 text-center border border-gray-800 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaProjectDiagram className="text-2xl" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">25k+</div>
              <div className="text-xl font-semibold text-gray-300">Completed Projects</div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div 
              className="bg-gradient-to-b from-[#0a0118] to-[#110228] rounded-2xl p-8 text-center border border-gray-800 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-2xl" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">90+</div>
              <div className="text-xl font-semibold text-gray-300">Metro Solver Teamers</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section - Fixed with Images */}
<section className="py-20 px-6">
  <div className="container mx-auto space-y-20">
    {/* Mission Section */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-12 items-center"
      {...fadeInUp}
    >
      <div className="space-y-6">
        <div className='bg-[#221233] rounded-2xl'>
        <h2 className="text-4xl font-bold text-white">Metro Solver Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our mission is to cover all your digital needs by providing innovative, comprehensive, and affordable 
          solutions that meet your specific requirements and exceed your expectations. We are dedicated to 
          delivering top-quality services that empower businesses to succeed in a competitive digital landscape.
        </p>
        </div>

        
         <div className="bg-[#221233] rounded-2xl">
        <h2 className="text-4xl font-bold text-white">Metro Solver Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Our mission is to cover all your digital needs by providing innovative, comprehensive, and affordable 
          solutions that meet your specific requirements and exceed your expectations. We are dedicated to 
          delivering top-quality services that empower businesses to succeed in a competitive digital landscape.
        </p>
      </div>

      </div>
      <div className="w-[50vh] h-[60vh] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-1 shadow-2xl shadow-purple-500/20">
        <div className="bg-gray-800 rounded-2xl w-[50vh] h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
            src="image1.png" 
            alt="Metro Solver Mission" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>

    {/* Story Section */}

    {/* Global Reach and Vision Section */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-12 items-center"
      {...fadeInUp}
    >
      <div className="w-[50vh] h-[60vh] bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-2xl p-1 shadow-2xl shadow-green-500/20">
        <div className=" w-[50vh] h-[60vh] bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
          <img 
            src="image1.png" 
            alt="Global Reach and Vision" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div className='bg-[#221233] rounded-2xl '>
        <h2 className="text-4xl font-bold text-white">Global Reach and Vision</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Today, Metro Solver is striving to extend its services worldwide, aiming to meet all digital needs 
          from logo creation and branding to comprehensive marketing solutions. The firm's dedicated team of 
          over 100 employees across various sectors ensures continuous improvement in quality and customer 
          satisfaction.
        </p>
        </div>
          
          <div className='bg-[#221233] rounded-2xl '>
        <h2 className="text-4xl font-bold text-white">Global Reach and Vision</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Today, Metro Solver is striving to extend its services worldwide, aiming to meet all digital needs 
          from logo creation and branding to comprehensive marketing solutions. The firm's dedicated team of 
          over 100 employees across various sectors ensures continuous improvement in quality and customer 
          satisfaction.
        </p>
      </div>


      </div>
    </motion.div>
  </div>
</section>


meet our agent
  
      <section >
        <OurAgentsSection/>
      </section>

      {/* Newsletter Section */}
      <section >
        <NewsletterSection/>
       
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-[#0a001a] to-black py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          {/* Contact Info & Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 mb-6">
             
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300">Head Office: Metro Solver Limited, Cranbrook Road, London E12 SLX, United Kingdom</p>
                <p className="text-gray-300">+44 7934 465446</p>
                <p className="text-blue-400">official@metrosolver.com</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Country Currency</label>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="GBP">GBP - British Pound</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['Home', 'About us', 'Our Team', 'User Profile', 'White Labeling'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2">
                {['Our Stories', 'Career', 'Send Message', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Services */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms and Conditions', 'Start Earning'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  {services.slice(0, 5).map((service) => (
                    <li key={service}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-300 text-sm font-medium">{partner}</span>
                </div>
              ))}
            </div>

            {/* Bottom Strip */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © Metro Solver. All Rights Reserved 2024
              </p>
              <p className="text-gray-400 text-sm">
                Metro Solver Ltd incorporated in England & Wales Registration No: 97238179
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;