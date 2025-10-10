import Navbar from '../components/Navbar';
import FooterSection from '../section/FooterSection';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
              About Metro Solver
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where creativity meets strategy, and brands come to life. We are architects of identity, 
              storytellers of success, and partners in your brand's journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to Metro Solver, where creativity meets strategy, and brands come to life. 
                We are not just a branding agency; we are architects of identity, storytellers of 
                success, and partners in your brand's journey.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Metro Solver is a hub of innovative minds, passionate about turning human concepts 
                into captivating brand experiences. Our overarching goal is to redefine industry 
                standards by providing dynamic and adaptive solutions.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">150+</div>
                  <div className="text-gray-400 mt-2">Current Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">25k+</div>
                  <div className="text-gray-400 mt-2">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">90+</div>
                  <div className="text-gray-400 mt-2">Expert Teams</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border">
                  <img className=' rounded-2xl border relative object-fill h-[57vh] w-[70vh]' src="https://th.bing.com/th/id/R.0c91b6a2f5b1277570285c55f4cff17a?rik=irmWX8GQnXJP0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmeeting-hd-png-business-people-clapping-after-meeting-with-manager-in-conference-room-stock-video-footage-videoblocks-1920.png&ehk=tGKBAckrgLlhbdBt8on6uiz%2fOOcQEUuY%2b8PgiPNLr2w%3d&risl=&pid=ImgRaw&r=0" alt="image" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses of all sizes with innovative digital solutions that 
                drive growth, foster employee development, and cultivate lasting customer relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading digital transformation partner, recognized for our creativity, 
                technical excellence, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-300 text-lg">
              Dedicated professionals committed to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-1" >
                
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                 <img className='w-full h-full rounded-full' src="https://media.licdn.com/dms/image/C4E03AQH9J1CnCl9GoA/profile-displayphoto-shrink_800_800/0/1581696902021?e=2147483647&v=beta&t=s9pbwh6B7Ju8As9HqaUwjxbFBVdGj4xAAJr968d8PH4" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Albert Flores</h3>
              <p className="text-purple-400 mb-2">CEO & Founder</p>
              <p className="text-gray-400 text-sm">
                Visionary leader with 15+ years of experience in digital transformation.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                   <img className='w-full h-full rounded-full' src="https://media.licdn.com/dms/image/C4E03AQH9J1CnCl9GoA/profile-displayphoto-shrink_800_800/0/1581696902021?e=2147483647&v=beta&t=s9pbwh6B7Ju8As9HqaUwjxbFBVdGj4xAAJr968d8PH4" alt="" />
                  
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Jane Doe</h3>
              <p className="text-purple-400 mb-2">Creative Director</p>
              <p className="text-gray-400 text-sm">
                Award-winning designer with a passion for brand storytelling.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img className='w-full h-full rounded-full' src="https://media.licdn.com/dms/image/C4E03AQH9J1CnCl9GoA/profile-displayphoto-shrink_800_800/0/1581696902021?e=2147483647&v=beta&t=s9pbwh6B7Ju8As9HqaUwjxbFBVdGj4xAAJr968d8PH4" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Mike Smith</h3>
              <p className="text-purple-400 mb-2">Tech Lead</p>
              <p className="text-gray-400 text-sm">
                Full-stack developer specializing in scalable web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;