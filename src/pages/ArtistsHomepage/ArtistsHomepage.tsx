
import { ArrowRight } from "lucide-react";

const ArtistsHomepage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 via-red-500/10 to-orange-500/10"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-500/20 via-orange-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Navigation */}
    

        {/* Hero Section */}
        <section className="px-8 pt-16 pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">
                We back today's<br />
                <span className="text-white font-normal">Creatives</span> before they're<br />
                <span className="text-gray-500">Tomorrow's icons</span>
              </h1>
              
              {/* Circular badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-orange-500 rounded-full mt-16 mb-16">
                <span className="text-orange-500 text-xs font-bold transform -rotate-12">APPLY NOW</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Talent Section */}
        <section className="px-8 py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-500 mb-16">
              Our <span className="text-white">Talent</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mb-16">
              We work closely with a highly curated network of exceptional talent across music, arts and culture. 
              Our roster connects emerging and established artists.
            </p>
            
            {/* Talent Card */}
            <div className="relative max-w-sm">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-80 bg-gray-200 relative">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 text-lg">Tom Salary Photo</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">TOM SALARY</h3>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated BOOKING Section */}
        <section className="px-8 py-16 overflow-hidden">
          <div className="max-w-full">
            <div className="flex items-center space-x-8 text-6xl lg:text-8xl font-bold text-gray-800">
              <span>BOOKING</span>
              <ArrowRight className="w-16 h-16 text-gray-600" />
              <span>BOOKING</span>
              <ArrowRight className="w-16 h-16 text-gray-600" />
              <span className="text-red-500">BOOK</span>
            </div>
          </div>
        </section>

        {/* Talent Booking Request Form */}
        <section className="px-8 py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-500">Talent</span> <span className="text-white">Booking</span><br />
              <span className="text-white">Request</span>
            </h2>
            
            <form className="mt-16 space-y-8">
              {/* Your Details */}
              <div>
                <h3 className="text-orange-500 text-lg font-bold mb-6">Your Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:border-orange-500 focus:outline-none appearance-none">
                      <option value="">Select Artist</option>
                      <option value="tom-salary">Tom Salary</option>
                    </select>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                        <span className="text-xs">⌄</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Event */}
              <div>
                <h3 className="text-orange-500 text-lg font-bold mb-6">Your Event</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Organisation Name"
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Organisation Website"
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Proposed Booking"
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Your Offer */}
              <div>
                <h3 className="text-orange-500 text-lg font-bold mb-6">Your Offer</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Organisation Social Media Link"
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-bold hover:bg-orange-600 transition-colors"
                    >
                      ADD LINK
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-colors mt-12"
              >
                NEXT
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ArtistsHomepage;
