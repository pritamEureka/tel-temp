import { Check } from "lucide-react";

const ArtistsPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-cyan-400/30 shadow-lg">
                <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Live Platform
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
                SELL TICKETS.<br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SIMPLE.</span><br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">POWERFUL.</span>
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-2xl">
                CASA makes ticketing simple for event organisers through its powerful 
                and intuitive platform. Whether it's a festival, club night, or corporate 
                event, CASA has the tools to help you sell tickets and manage your events. 
                We're here for event organisers, and customers know exactly what 
                they're paying for with no hidden fees, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden border border-cyan-400/20">
                  <span className="relative z-10">GET STARTED</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/30 to-purple-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </button>
                <button className="group border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/30 text-white px-10 py-5 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 backdrop-blur-sm relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105">
                  <span className="relative z-10">WATCH DEMO</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" style={{background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'exclude'}}></div>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 transform rotate-3 translate-x-8 translate-y-4 hover:rotate-6 transition-transform duration-700">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-3 shadow-2xl max-w-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
                  <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 px-4 py-3 flex items-center space-x-2 backdrop-blur-sm">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-gray-700/50 rounded mx-4 px-3 py-1.5 text-xs text-gray-300">
                        industry.casa.fm
                      </div>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-gray-900/95 to-indigo-900/30 backdrop-blur-sm">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-8">
                          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-xl px-3 py-1 rounded-lg shadow-lg">CASA</div>
                          <div className="text-xs text-gray-300 bg-gray-800/60 px-2 py-1 rounded backdrop-blur-sm">Dashboard</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                            <div className="text-white text-sm font-bold">Events</div>
                            <div className="text-gray-300 text-xs">Manage your events</div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-600/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <div className="w-6 h-6 bg-white rounded"></div>
                            </div>
                            <div className="text-white text-sm font-bold">Analytics</div>
                            <div className="text-gray-300 text-xs">View insights</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full w-3/4 shadow-lg"></div>
                          <div className="h-2 bg-gray-700/50 rounded-full w-full"></div>
                          <div className="h-2 bg-gray-700/50 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 right-5 w-80 h-80 border-2 border-cyan-500/20 rounded-full opacity-50 animate-spin-slow"></div>
              <div className="absolute -bottom-20 -left-10 w-60 h-60 border-2 border-purple-500/20 rounded-full opacity-40 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-sm font-medium mb-12 tracking-wider">TRUSTED BY LEADING EVENT ORGANIZERS</p>
          <div className="flex justify-center items-center space-x-16 opacity-80">
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">PALOMA</div>
            <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">MIRAGE</div>
            <div className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">206</div>
            <div className="text-2xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">TML.</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-2 animate-pulse"></span>
              Why Choose CASA
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-4 tracking-tight">
              FAST, EFFICIENT AND<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SECURE.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <div className="w-8 h-8 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide">CLEAR, TRANSPARENT PRICING</h3>
              <p className="text-gray-300 leading-relaxed">
                Simple and transparent pricing with no hidden fees. You know exactly what 
                you pay and. That's it! With CASA, there are no confusing pricing 
                structures or surprise charges. We believe in being upfront about our 
                pricing and your charges.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide">EFFORTLESS TICKETING PROCESS</h3>
              <p className="text-gray-300 leading-relaxed">
                Create and manage your events with ease. Our intuitive event creation 
                platform is designed, letting you set up your event quickly ticket 
                types, and start selling in minutes. No technical expertise required.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide">INSIGHTFUL ANALYTICS AT YOUR FINGERTIPS</h3>
              <p className="text-gray-300 leading-relaxed">
                Make smarter decisions with real-time analytics. CASA provides 
                comprehensive insights into your ticket sales, helping you track 
                performance and understand your audience better. Get detailed reports and 
                analytics and see how they interact with your events.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide">BUILT TO SCALE WITH YOU</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're organizing a small gathering or a large festival, CASA 
                scales with your needs. Our platform is built to handle events of all 
                sizes, and our infrastructure is ready to handle all unlimited ticketing 
                and payment processing, so you can focus on creating memorable experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Mobile App Section */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-cyan-950/30"></div>
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative z-10 group">
                {/* Enhanced Phone Mockup */}
                <div className="relative transform hover:scale-105 transition-all duration-700 hover:rotate-2">
                  <div className="w-[340px] h-[680px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-[3.5rem] p-2 shadow-2xl hover:shadow-purple-500/25 transition-shadow duration-500">
                    <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
                      {/* Enhanced Phone Screen */}
                      <div className="absolute inset-3 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden">
                        {/* Modern Status Bar */}
                        <div className="h-14 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 flex items-center justify-between px-8">
                          <div className="text-white text-sm font-semibold">9:41</div>
                          <div className="flex items-center space-x-1.5">
                            <div className="w-5 h-2.5 bg-white rounded-sm opacity-80"></div>
                            <div className="w-5 h-2.5 bg-white rounded-sm opacity-60"></div>
                            <div className="w-7 h-3.5 bg-white rounded-md"></div>
                          </div>
                        </div>
                        
                        {/* Enhanced App Content */}
                        <div className="p-8 space-y-8">
                          {/* Modern Header */}
                          <div className="text-center">
                            <div className="text-4xl font-black mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">CASA</div>
                            <div className="text-gray-400 text-base font-medium">Discover Amazing Events</div>
                          </div>
                          
                          {/* Premium Event Cards */}
                          <div className="space-y-5">
                            <div className="bg-gradient-to-br from-purple-600/50 to-purple-800/50 backdrop-blur-xl rounded-3xl p-5 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 group/card">
                              <div className="flex items-start space-x-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover/card:scale-110 transition-transform duration-300"></div>
                                <div className="flex-1">
                                  <div className="text-xs text-emerald-400 font-bold mb-2 tracking-wider">EARLY BIRD SALE</div>
                                  <div className="text-white font-bold text-base mb-1">Music Festival 2024</div>
                                  <div className="text-gray-300 text-sm">Dec 15-17, 2024</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-orange-600/50 to-red-600/50 backdrop-blur-xl rounded-3xl p-5 border border-orange-400/30 hover:border-orange-300/50 transition-all duration-300 group/card">
                              <div className="flex items-start space-x-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg group-hover/card:scale-110 transition-transform duration-300"></div>
                                <div className="flex-1">
                                  <div className="text-xs text-orange-400 font-bold mb-2 tracking-wider">LIVE NOW</div>
                                  <div className="text-white font-bold text-base mb-1">Tech Conference</div>
                                  <div className="text-gray-300 text-sm">Jan 20, 2025</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-cyan-600/50 to-blue-600/50 backdrop-blur-xl rounded-3xl p-5 border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 group/card">
                              <div className="flex items-start space-x-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg group-hover/card:scale-110 transition-transform duration-300"></div>
                                <div className="flex-1">
                                  <div className="text-xs text-cyan-400 font-bold mb-2 tracking-wider">COMING SOON</div>
                                  <div className="text-white font-bold text-base mb-1">Art Gallery Opening</div>
                                  <div className="text-gray-300 text-sm">Feb 5, 2025</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Home Indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Modern Floating Elements */}
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 -left-16 w-72 h-72 border-2 border-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-16 order-1 lg:order-2">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-10 border border-purple-400/30 shadow-lg">
                <span className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                Premium Features
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-black mb-20 tracking-tight leading-tight">
                YOUR <span className="font-light bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">EVENT,</span><br />
                YOUR <span className="font-light bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">STYLE.</span>
              </h2>
              
              <div className="space-y-10">
                <div className="group flex items-start space-x-6 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-gray-900/30 hover:to-gray-800/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-emerald-300 transition-colors duration-300">Customizable Event Pages</h3>
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Create stunning, fully customizable event pages that reflect your brand and style. CASA's advanced templates let you add images, text, and branding details to showcase your event and give it a professional look that stands out.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-gray-900/30 hover:to-gray-800/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-blue-300 transition-colors duration-300">Flexible Ticket Types</h3>
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Offer multiple ticket types and pricing options. With CASA, you can set up general admission, VIP, early bird, and any other ticket type you need. Create flexible pricing using tiers and discounts to maximize your event's appeal.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-gray-900/30 hover:to-gray-800/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-purple-300 transition-colors duration-300">Secure and Reliable Payments</h3>
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Process payments securely with multiple payment options. Whether using a credit card, debit card, or digital wallet, CASA can offer secure payment processing and fraud protection to keep both you and your customers safe.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-gray-900/30 hover:to-gray-800/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-orange-300 transition-colors duration-300">Lightning Fast Payouts</h3>
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Get paid quickly with our fast payout system. CASA's rapid payout system ensures you get your event revenue fast. Receive funds directly into your bank account within 24 hours of your event.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-gray-900/30 hover:to-gray-800/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-cyan-300 transition-colors duration-300">24/7 Support When You Need It</h3>
                    <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                      Get help when you need it most. Our support team is available 24/7 to help you with any questions or issues you might have. Whether you need help setting up your event or troubleshooting a problem, our dedicated support team is just a message away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-cyan-400/30 shadow-lg">
            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-2 animate-pulse"></span>
            Ready to Launch
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">
            WHAT ARE YOU <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">WAITING FOR?</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Connect your account and create your first event in as little as 5
            minutes. Say goodbye to complicated ticketing platforms. With CASA,
            you can focus on what matters most - creating amazing events that
            your audience will love.
          </p>
          <div className="mb-16">
            <p className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to go?</p>
            <button className="group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 text-white px-12 py-5 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">GET STARTED</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl">
              <div className="text-left">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent text-sm font-black mb-6 tracking-wider">
                  EVENTS DASHBOARD
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover:bg-gray-800/50 p-4 rounded-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <div>
                      <div className="text-white font-bold text-lg">Music Festival</div>
                      <div className="text-gray-400 text-sm">Dec 15-17, 2024</div>
                      <div className="text-emerald-400 text-sm font-semibold">1,234 tickets sold</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group hover:bg-gray-800/50 p-4 rounded-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <div>
                      <div className="text-white font-bold text-lg">Tech Conference</div>
                      <div className="text-gray-400 text-sm">Jan 20, 2025</div>
                      <div className="text-orange-400 text-sm font-semibold">567 tickets sold</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-sm font-medium mb-12 tracking-wider">POWERING EVENTS WORLDWIDE</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="group cursor-pointer hover:opacity-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600/50 to-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-600/30 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg"></div>
            </div>
            <div className="group cursor-pointer hover:opacity-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600/50 to-gray-700/50 rounded-full backdrop-blur-sm border border-gray-600/30 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg"></div>
            </div>
            <div className="group cursor-pointer hover:opacity-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 group-hover:border-pink-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg"></div>
            </div>
            <div className="group cursor-pointer hover:opacity-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600/50 to-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-600/30 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg"></div>
            </div>
            <div className="text-lg font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">ESCAPISM</div>
            <div className="group cursor-pointer hover:opacity-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600/50 to-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-600/30 group-hover:border-orange-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg"></div>
            </div>
            <div className="text-lg font-black bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">Matchstick</div>
          </div>
        </div>
      </section>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.4); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
    </div>
  )
}

export default ArtistsPage
