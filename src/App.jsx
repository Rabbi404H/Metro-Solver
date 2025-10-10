import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HeroSection from './section/HeroSection.jsx';
import ClientLogos from './components/ClientLogos';
import PromotionalBanner from './components/PromotionalBanner';
import ChatBot from './components/ChatBot';
import ServicesSection from './section/ServicesSection.jsx';
import LatestWorksSection from './section/LatestWorksSection.jsx';
import WhyChooseSection from './section/WhyChooseSection.jsx';
import WhyChooseStudioSection from './section/WhyChooseStudioSection.jsx';
import StoriesAndPodcastSection from './section/StoriesAndPodcastSection.jsx';
import ContactFAQSection from './section/ContactFAQSection.jsx';
import FooterSection from './section/FooterSection.jsx';
import About from './pages/About.jsx';

function HomePage() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden px-4 sm:px-6 md:px-8 bg-black text-white">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <PromotionalBanner />
      <ChatBot />
      <ServicesSection />
      <LatestWorksSection />
      <WhyChooseSection />
      <WhyChooseStudioSection />
      <StoriesAndPodcastSection />
      <ContactFAQSection />
      <FooterSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/about.jsx" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
