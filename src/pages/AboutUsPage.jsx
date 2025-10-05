import Navbar from '../components/Navbar.jsx';
import FooterSection from '../section/FooterSection.jsx';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-400 mb-6">
          Unveiling the Essence Of Our Metro Solver
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          Welcome to Metro Solver, where creativity meets strategy, and brands come to life. 
          We are not just a branding agency; we are architects of identity, storytellers of success, 
          and partners in your brand’s journey. Metro Solver is a hub of inventive minds, passionate 
          about bringing top-notch insights into exciting brand experiences. Our goal is to redefine 
          industry standards by providing a dynamic and adaptive HR and CRM SaaS platform.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-400">150+</h2>
            <p className="text-gray-400">Current Clients</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-400">25k+</h2>
            <p className="text-gray-400">Completed Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-400">90+</h2>
            <p className="text-gray-400">Metro Solver Teams</p>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
