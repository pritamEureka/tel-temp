
import { ArrowRight, Play, Star, Users, Sparkles, Zap } from "lucide-react";

// Ultra-modern animation styles with glassmorphism
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
    33% { transform: translateY(-20px) rotate(5deg) scale(1.05); }
    66% { transform: translateY(10px) rotate(-3deg) scale(0.95); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
    33% { transform: translateY(15px) rotate(-5deg) scale(1.02); }
    66% { transform: translateY(-25px) rotate(3deg) scale(0.98); }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.3); }
  }
  
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 10s ease-in-out infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  
  .animate-gradient {
    background-size: 400% 400%;
    animation: gradient-shift 6s ease infinite;
  }
  
  .glass-effect {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .glass-dark {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-400 { animation-delay: 400ms; }
  .animation-delay-600 { animation-delay: 600ms; }
  .animation-delay-800 { animation-delay: 800ms; }
`;

const ArtistsPageComponent = () => {
  return (
     <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Ultra-modern sophisticated background */}
        <div className="fixed inset-0 z-0">
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-pink-600/20 animate-gradient"></div>
          
          {/* Enhanced floating shapes with glassmorphism */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-tr from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-bl from-cyan-400/30 to-blue-400/30 rounded-full blur-lg animate-bounce delay-1000"></div>
          
          {/* Modern mesh pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:50px_50px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(147,51,234,0.1)_1px,transparent_0)] bg-[size:80px_80px]"></div>
          </div>
        </div>
        
        <div className="relative z-10">


          {/* Next-gen Hero Section */}
          <section className="px-8 pt-32 pb-40 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24 relative">
                {/* Ultra-modern floating badge */}
                <div className="inline-flex items-center px-8 py-4 glass-effect rounded-full text-cyan-300 text-sm font-bold mb-12 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 backdrop-blur-sm group animate-pulse-glow">
                  <Zap className="w-5 h-5 mr-3 fill-current group-hover:rotate-12 transition-transform duration-300 text-yellow-400" />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">AI-Powered Talent Matching</span>
                  <div className="ml-3 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                  <span className="ml-2 text-emerald-300 font-bold">LIVE</span>
                </div>
                
                {/* Next-level typography */}
                <h1 className="text-7xl lg:text-9xl font-black leading-[0.85] mb-16 tracking-tight">
                  <span className="block animate-fade-in-up bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Discover</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-200 animate-gradient">
                    Extraordinary
                  </span>
                  <span className="block text-gray-300 text-6xl lg:text-7xl font-light mt-4 animate-fade-in-up animation-delay-400">
                    Artists & Creators
                  </span>
                </h1>
                
                {/* Enhanced subtitle with glassmorphism */}
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-20 leading-relaxed font-light animate-fade-in-up animation-delay-600">
                  Connect with world-class musicians, performers, and creatives.
                  <br />
                  <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Experience the future of talent booking.
                  </span>
                </p>
                
                {/* Ultra-modern CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up animation-delay-800">
                  <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-3xl font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-700 flex items-center gap-4 hover:scale-110 overflow-hidden animate-gradient">
                    <span className="relative z-10">Browse Artists</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </button>
                  
                  <button className="group px-12 py-6 glass-effect text-cyan-300 rounded-3xl font-black text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-500 flex items-center gap-4 hover:scale-105 border border-cyan-400/30">
                    <Play className="w-6 h-6 group-hover:scale-125 transition-transform duration-500 text-cyan-400" />
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Watch Demo</span>
                  </button>
                </div>
                
                {/* Ultra-modern floating stats */}
                <div className="grid grid-cols-3 gap-10 max-w-3xl mx-auto mt-24">
                  <div className="text-center group">
                    <div className="glass-effect rounded-2xl p-6 hover:scale-110 transition-all duration-500">
                      <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                        10K+
                      </div>
                      <div className="text-sm text-gray-400 font-bold mt-2">Elite Artists</div>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="glass-effect rounded-2xl p-6 hover:scale-110 transition-all duration-500">
                      <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                        50K+
                      </div>
                      <div className="text-sm text-gray-400 font-bold mt-2">Live Events</div>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="glass-effect rounded-2xl p-6 hover:scale-110 transition-all duration-500">
                      <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                        100+
                      </div>
                      <div className="text-sm text-gray-400 font-bold mt-2">Global Cities</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating decorative elements */}
              <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce opacity-80 shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-300 opacity-80 shadow-lg shadow-purple-400/50"></div>
              <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-700 opacity-80 shadow-lg shadow-blue-400/50"></div>
            </div>
          </section>

          {/* Ultra-modern Talent Section */}
          <section className="px-8 py-40 relative bg-gradient-to-b from-slate-900/50 to-indigo-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full text-emerald-300 text-sm font-bold mb-10 group">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 text-emerald-400" />
                  <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Our Creative Network</span>
                </div>
                
                <h2 className="text-6xl lg:text-8xl font-black mb-10 tracking-tight">
                  <span className="text-white">Featured </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">Artists</span>
                </h2>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                  Discover exceptional talent from our 
                  <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> curated network</span> of 
                  world-class artists, musicians, and creators.
                </p>
              </div>
              
              {/* Next-gen Card Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Hero Artist Card */}
                <div className="lg:col-span-2 group">
                  <div className="relative bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl shadow-xl border border-blue-300/50 overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] backdrop-blur-sm">
                    <div className="relative h-[500px] bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Status indicators */}
                      <div className="absolute top-6 right-6 flex gap-2">
                        <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                          FEATURED
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold rounded-full shadow-lg">
                          LIVE
                        </div>
                      </div>
                      
                      {/* Modern placeholder */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-gray-700 text-xl font-semibold bg-gradient-to-r from-emerald-100 to-cyan-100 px-10 py-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-300/50 group-hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                            <span>Tom Salary</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Artist Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                          <h3 className="text-4xl font-black text-white mb-2 tracking-tight">TOM SALARY</h3>
                          <p className="text-blue-200 text-lg font-semibold mb-4">Electronic Music Producer</p>
                          
                          {/* Modern achievement badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/40 rounded-full text-blue-200 text-sm font-semibold backdrop-blur-sm">
                              Grammy Nominated
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/40 rounded-full text-purple-200 text-sm font-semibold backdrop-blur-sm">
                              Billboard Top 10
                            </span>
                          </div>
                          
                          {/* Stats with icons */}
                          <div className="flex gap-6 text-white">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="font-semibold text-sm">50M+ Streams</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                              <span className="font-semibold text-sm">12 Countries</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Side Cards */}
                <div className="space-y-8">
                  <div className="group bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 shadow-lg border border-blue-400/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-10 h-10 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-gray-900 text-xl mb-1">Sarah Chen</h4>
                        <p className="text-gray-600 font-medium">Vocal Artist</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-semibold">Available Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl p-8 shadow-lg border border-purple-400/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-10 h-10 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-gray-900 text-xl mb-1">Alex Rodriguez</h4>
                        <p className="text-gray-600 font-medium">Visual Artist</p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                          <span className="text-sm text-orange-600 font-semibold">In High Demand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 rounded-3xl p-10 text-center border border-emerald-300/50 hover:border-emerald-400 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-black text-emerald-600">+</span>
                    </div>
                    <h4 className="font-black text-gray-900 mb-3 text-xl">Discover More Artists</h4>
                    <p className="text-gray-600 text-base mb-6 font-medium">Explore our complete roster of exceptional talent</p>
                    <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Browse All Artists
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ultra-modern Booking Section - Full Width */}
          <section className="py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
              {/* Modern animated marquee */}
              <div className="text-center mb-20">
                <div className="flex items-center justify-center gap-12 text-5xl lg:text-7xl font-black text-white/20 mb-12 select-none">
                  <span className="animate-pulse">BOOK</span>
                  <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white/30 rounded-full animate-bounce"></div>
                  <span className="text-white">TALENT</span>
                  <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white/30 rounded-full animate-bounce delay-300"></div>
                  <span className="animate-pulse">TODAY</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                  Ready to <span className="text-yellow-300">Book?</span>
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Experience our streamlined booking process designed for modern event planning.
                  <br />
                  <span className="font-semibold text-yellow-300">Professional. Fast. Transparent.</span>
                </p>
              </div>
            </div>
            
            {/* Enhanced background decorative elements */}
            <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </section>

          {/* Next-gen Booking Form */}
          <section className="px-8 py-32 relative bg-gradient-to-b from-slate-900/80 to-indigo-900/80">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full text-cyan-300 text-sm font-bold mb-10">
                  <Zap className="w-5 h-5 mr-2 animate-pulse text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Instant Booking Available</span>
                </div>
                
                <h2 className="text-6xl lg:text-7xl font-black mb-10 text-white tracking-tight">
                  Start Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Tell us about your vision and we'll connect you with the perfect talent for your event.
                </p>
              </div>
              
              {/* Ultra-modern form container */}
              <div className="glass-dark rounded-3xl shadow-2xl border border-white/10 p-8 lg:p-12 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
                
                <form className="relative z-10 space-y-16">
                  {/* Step 1: Contact Information */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-black text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Contact Information</h3>
                        <p className="text-gray-300 font-medium">Let's start with the basics</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Select Artist</label>
                        <select className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 appearance-none">
                          <option value="" className="bg-slate-800">Choose an artist</option>
                          <option value="tom-salary" className="bg-slate-800">Tom Salary</option>
                          <option value="sarah-chen" className="bg-slate-800">Sarah Chen</option>
                          <option value="alex-rodriguez" className="bg-slate-800">Alex Rodriguez</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Event Details */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-black text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Event Details</h3>
                        <p className="text-gray-300 font-medium">Tell us about your event</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Organisation Name</label>
                        <input
                          type="text"
                          placeholder="Your company or organization"
                          className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Organisation Website</label>
                        <input
                          type="url"
                          placeholder="https://yourwebsite.com"
                          className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Event Type & Date</label>
                        <input
                          type="text"
                          placeholder="Concert, Festival, Private Event..."
                          className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Expected Audience</label>
                        <input
                          type="text"
                          placeholder="Number of attendees"
                          className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Project Details */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-black text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">Project Details</h3>
                        <p className="text-gray-300 font-medium">Share your vision and budget</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-200 text-sm font-bold mb-3">Social Media</label>
                        <input
                          type="url"
                          placeholder="Instagram, Twitter, LinkedIn..."
                          className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>
                      <div className="flex items-end gap-4">
                        <div className="flex-1">
                          <label className="block text-gray-200 text-sm font-bold mb-3">Budget Range</label>
                          <input
                            type="text"
                            placeholder="$10,000 - $50,000"
                            className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                          />
                        </div>
                        <button
                          type="button"
                          className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors shadow-lg hover:shadow-cyan-500/25"
                        >
                          ADD LINK
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-gray-200 text-sm font-bold mb-3">Additional Details</label>
                      <textarea
                        placeholder="Tell us more about your event, special requirements, timeline..."
                        rows={4}
                        className="w-full glass-effect border border-white/20 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white py-6 rounded-2xl text-xl font-black hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-cyan-500/25 hover:scale-[1.02] animate-gradient"
                    >
                      SUBMIT REQUEST
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <p className="text-gray-300 text-center mt-6 text-sm">
                      ⚡ We'll get back to you within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default ArtistsPageComponent
