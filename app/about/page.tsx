import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-primary-100">
              Your trusted partner in real estate
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2010, RealEstate has been helping thousands of clients find their perfect homes. 
                We started with a simple mission: to make real estate transactions transparent, easy, and stress-free.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we've built a reputation for excellence, integrity, and personalized service. 
                Our team of experienced agents is dedicated to understanding your unique needs and helping you 
                make informed decisions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to provide exceptional real estate services that exceed our clients' expectations. 
                We believe that finding the right property should be an exciting journey, not a stressful experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to maintaining the highest standards of professionalism, ethics, and customer service 
                in everything we do.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
                <p className="text-gray-600">
                  Over 15 years of experience in the real estate market
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Professional agents dedicated to your success
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  We're committed to your complete satisfaction
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-primary-600 mb-2">Senior Real Estate Agent</p>
                <p className="text-gray-600 text-sm">
                  With over 10 years of experience, John specializes in luxury properties.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-primary-600 mb-2">Property Consultant</p>
                <p className="text-gray-600 text-sm">
                  Sarah helps clients find their perfect home with personalized service.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
                <p className="text-primary-600 mb-2">Investment Specialist</p>
                <p className="text-gray-600 text-sm">
                  Michael focuses on helping investors find profitable opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

