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

// Dummy components for routing
function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <PromotionalBanner />
      <ChatBot />
      <ServicesSection/>
      <LatestWorksSection/>
      <WhyChooseSection/>
      <WhyChooseStudioSection/>
      <StoriesAndPodcastSection/>
      <ContactFAQSection/>    
      <FooterSection/>
    </div>
  );
}


export default HomePage