import { Check } from "lucide-react";

const IndustryHomepage = () => {
  return (
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
                  SELL TICKETS.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    SIMPLE.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                    POWERFUL.
                  </span>
                </h1>
                <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-2xl">
                  EMS makes ticketing simple for event organisers through its
                  powerful and intuitive platform. Whether it's a festival, club
                  night, or corporate event, EMS has the tools to help you sell
                  tickets and manage your events. We're here for event
                  organisers, and customers know exactly what they're paying for
                  with no hidden fees, ever.
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
                    <div
                      className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "exclude",
                      }}
                    ></div>
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
                          industry.ems.fm
                        </div>
                      </div>
                      <div className="p-8 bg-gradient-to-br from-gray-900/95 to-indigo-900/30 backdrop-blur-sm">
                        <div className="space-y-6">
                          <div className="flex items-center space-x-3 mb-8">
                            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-xl px-3 py-1 rounded-lg shadow-lg">
                              EMS
                            </div>
                            <div className="text-xs text-gray-300 bg-gray-800/60 px-2 py-1 rounded backdrop-blur-sm">
                              Dashboard
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="w-6 h-6 bg-white rounded-full"></div>
                              </div>
                              <div className="text-white text-sm font-bold">
                                Events
                              </div>
                              <div className="text-gray-300 text-xs">
                                Manage your events
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600/20 to-pink-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="w-6 h-6 bg-white rounded"></div>
                              </div>
                              <div className="text-white text-sm font-bold">
                                Analytics
                              </div>
                              <div className="text-gray-300 text-xs">
                                View insights
                              </div>
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
            <p className="text-center text-gray-400 text-sm font-medium mb-12 tracking-wider">
              TRUSTED BY LEADING EVENT ORGANIZERS
            </p>
            <div className="flex justify-center items-center space-x-16 opacity-80">
              <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
                PALOMA
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
                MIRAGE
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
                206
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
                TML.
              </div>
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
                Why Choose EMS
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-4 tracking-tight">
                FAST, EFFICIENT AND
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  SECURE.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">
                  CLEAR, TRANSPARENT PRICING
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Simple and transparent pricing with no hidden fees. You know
                  exactly what you pay and. That's it! With EMS, there are no
                  confusing pricing structures or surprise charges. We believe
                  in being upfront about our pricing and your charges.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <div className="w-8 h-8 border-2 border-white rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">
                  EFFORTLESS TICKETING PROCESS
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Create and manage your events with ease. Our intuitive event
                  creation platform is designed, letting you set up your event
                  quickly ticket types, and start selling in minutes. No
                  technical expertise required.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <div className="w-8 h-8 border-2 border-white rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">
                  INSIGHTFUL ANALYTICS AT YOUR FINGERTIPS
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Make smarter decisions with real-time analytics. EMS provides
                  comprehensive insights into your ticket sales, helping you
                  track performance and understand your audience better. Get
                  detailed reports and analytics and see how they interact with
                  your events.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <div className="w-8 h-8 border-2 border-white rounded"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide">
                  BUILT TO SCALE WITH YOU
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're organizing a small gathering or a large
                  festival, EMS scales with your needs. Our platform is built
                  to handle events of all sizes, and our infrastructure is ready
                  to handle all unlimited ticketing and payment processing, so
                  you can focus on creating memorable experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </section>

        {/* Next-Gen Experience Section */}
        <section className="px-6 py-36 relative overflow-hidden">
          {/* Minimalist Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black"></div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%), 
                             linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          {/* Floating Light Orbs */}
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Interactive Dashboard Preview */}
              <div className="lg:col-span-7 relative order-2 lg:order-1">
                <div className="relative group">
                  {/* Main Dashboard Container */}
                  <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-gray-700/50 shadow-[0_40px_100px_rgba(0,0,0,0.8)] hover:shadow-[0_50px_120px_rgba(59,130,246,0.2)] transition-all duration-1000 group-hover:scale-[1.02]">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                          <div className="text-white font-black text-lg">C</div>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">
                            EMS Analytics
                          </h3>
                          <p className="text-gray-400 text-sm">
                            Real-time insights
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="text-green-400 text-sm font-medium">
                          Live
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-10">
                      <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group/stat">
                        <div className="text-blue-400 text-sm font-bold mb-2 tracking-wide">
                          TOTAL SALES
                        </div>
                        <div className="text-white text-3xl font-black mb-1">
                          $247K
                        </div>
                        <div className="text-emerald-400 text-xs font-semibold flex items-center">
                          <span className="mr-1">↗</span> +23% this month
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group/stat">
                        <div className="text-purple-400 text-sm font-bold mb-2 tracking-wide">
                          EVENTS
                        </div>
                        <div className="text-white text-3xl font-black mb-1">
                          1,247
                        </div>
                        <div className="text-emerald-400 text-xs font-semibold flex items-center">
                          <span className="mr-1">↗</span> +15% this month
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-600/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group/stat">
                        <div className="text-emerald-400 text-sm font-bold mb-2 tracking-wide">
                          ATTENDEES
                        </div>
                        <div className="text-white text-3xl font-black mb-1">
                          89.2K
                        </div>
                        <div className="text-emerald-400 text-xs font-semibold flex items-center">
                          <span className="mr-1">↗</span> +31% this month
                        </div>
                      </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-white font-bold text-lg">
                          Revenue Trends
                        </h4>
                        <div className="flex space-x-2">
                          <div className="px-3 py-1 bg-blue-500/20 rounded-lg text-blue-400 text-xs font-bold">
                            7D
                          </div>
                          <div className="px-3 py-1 bg-gray-700/50 rounded-lg text-gray-400 text-xs font-bold">
                            30D
                          </div>
                          <div className="px-3 py-1 bg-gray-700/50 rounded-lg text-gray-400 text-xs font-bold">
                            1Y
                          </div>
                        </div>
                      </div>

                      {/* Simplified Chart Bars */}
                      <div className="flex items-end space-x-3 h-32">
                        <div
                          className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "60%" }}
                        ></div>
                        <div
                          className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "45%" }}
                        ></div>
                        <div
                          className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "80%" }}
                        ></div>
                        <div
                          className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "95%" }}
                        ></div>
                        <div
                          className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "70%" }}
                        ></div>
                        <div
                          className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "85%" }}
                        ></div>
                        <div
                          className="w-8 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg animate-pulse"
                          style={{ height: "100%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                        Create Event
                      </button>
                      <button className="bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500/50">
                        View Reports
                      </button>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-bold border border-blue-400/30 shadow-lg">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-white tracking-wide">
                    ADVANCED ANALYTICS
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  DATA-DRIVEN
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                    DECISIONS.
                  </span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-xl leading-relaxed font-medium">
                  Transform your event management with intelligent analytics and
                  real-time insights. Make informed decisions that drive growth
                  and maximize your event's potential.
                </p>

                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        Real-Time Performance Tracking
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Monitor ticket sales, engagement metrics, and revenue
                        streams as they happen with live dashboards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Predictive Insights Engine
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        AI-powered forecasting helps predict attendance patterns
                        and optimize pricing strategies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                        Custom Report Builder
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        Generate detailed reports tailored to your specific
                        needs with drag-and-drop simplicity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-500 hover:via-purple-500 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                    <span className="relative z-10">Explore Analytics</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ultra-Modern Feature Showcase */}
        <section className="px-6 py-40 relative overflow-hidden">
          {/* Advanced Background System */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
          </div>
          
          {/* Sophisticated Mesh Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
          
          {/* Dynamic Floating Elements */}
          <div className="absolute top-1/4 left-[8%] w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/8 via-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/8 via-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/3 to-fuchsia-500/3 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            
            {/* Premium Header Section */}
            <div className="text-center mb-24">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 backdrop-blur-xl rounded-full text-sm font-black mb-10 border border-indigo-400/30 shadow-2xl hover:shadow-indigo-500/20 transition-shadow duration-500">
                <span className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mr-4 animate-pulse"></span>
                <span className="text-white tracking-[0.2em]">NEXT-GENERATION FEATURES</span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-white mb-8">
                EXPERIENCE THE<br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">FUTURE OF EVENTS.</span>
              </h2>
              
              <p className="text-gray-300 text-2xl leading-relaxed max-w-4xl mx-auto font-medium">
                Revolutionary tools designed for modern event creators. Every feature crafted to perfection, every detail optimized for success.
              </p>
            </div>
            
            {/* Revolutionary Features Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
              
              {/* Feature 1 - Brand Experience Designer */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-gray-700/50 hover:border-indigo-500/60 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(99,102,241,0.1)] group-hover:scale-[1.02] group-hover:-translate-y-2">
                  
                  {/* Premium Feature Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-indigo-500/30">
                      <div className="w-10 h-10 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  
                  <h3 className="text-white font-black text-3xl mb-6 group-hover:text-indigo-300 transition-colors duration-500 tracking-wide">
                    Brand Experience Designer
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-500 mb-8 font-medium">
                    Create immersive brand experiences that captivate and convert. Our AI-powered design system adapts to your brand identity, generating stunning event pages that reflect your unique vision and drive maximum engagement.
                  </p>
                  
                  {/* Interactive Preview */}
                  <div className="relative p-6 bg-gray-800/60 rounded-2xl border border-gray-600/40 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                        <div className="h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex-1"></div>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        <div className="h-12 bg-indigo-500/40 rounded-lg border border-indigo-400/30 group-hover:scale-105 transition-transform duration-300"></div>
                        <div className="h-12 bg-purple-500/40 rounded-lg border border-purple-400/30 group-hover:scale-105 transition-transform duration-300 delay-100"></div>
                        <div className="h-12 bg-pink-500/40 rounded-lg border border-pink-400/30 group-hover:scale-105 transition-transform duration-300 delay-200"></div>
                        <div className="h-12 bg-orange-500/40 rounded-lg border border-orange-400/30 group-hover:scale-105 transition-transform duration-300 delay-300"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-600/60 rounded-full w-full"></div>
                        <div className="h-2 bg-gray-600/60 rounded-full w-4/5"></div>
                        <div className="h-2 bg-gray-600/60 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 - Smart Pricing Engine */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-gray-700/50 hover:border-purple-500/60 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(168,85,247,0.1)] group-hover:scale-[1.02] group-hover:-translate-y-2">
                  
                  {/* Premium Feature Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-purple-500/30">
                      <div className="w-10 h-10 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  
                  <h3 className="text-white font-black text-3xl mb-6 group-hover:text-purple-300 transition-colors duration-500 tracking-wide">
                    Smart Pricing Engine
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-500 mb-8 font-medium">
                    Maximize revenue with AI-driven dynamic pricing. Our intelligent system analyzes market demand, competitor pricing, and historical data to optimize your ticket prices in real-time for maximum profitability.
                  </p>
                  
                  {/* Advanced Ticket Preview */}
                  <div className="space-y-4">
                    <div className="relative overflow-hidden">
                      <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl border border-purple-400/40 group-hover:border-purple-300/60 transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-purple-200 text-lg font-bold tracking-wide">VIP EXPERIENCE</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-400 text-sm line-through">$180</span>
                          <span className="text-white font-black text-xl">$150</span>
                          <div className="px-3 py-1 bg-emerald-500/30 rounded-full text-emerald-300 text-xs font-bold">AI OPTIMIZED</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-2xl border border-emerald-400/40 group-hover:border-emerald-300/60 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-emerald-200 text-lg font-bold tracking-wide">EARLY ACCESS</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-white font-black text-xl">$85</span>
                        <div className="px-3 py-1 bg-orange-500/30 rounded-full text-orange-300 text-xs font-bold">LIMITED TIME</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl border border-blue-400/40 group-hover:border-blue-300/60 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-blue-200 text-lg font-bold tracking-wide">GENERAL ADMISSION</span>
                      </div>
                      <span className="text-white font-black text-xl">$120</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 - Fortress-Grade Security */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-gray-700/50 hover:border-emerald-500/60 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(16,185,129,0.1)] group-hover:scale-[1.02] group-hover:-translate-y-2">
                  
                  {/* Premium Feature Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-emerald-500/30">
                      <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30 backdrop-blur-sm"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-black text-3xl mb-6 group-hover:text-emerald-300 transition-colors duration-500 tracking-wide">
                    Fortress-Grade Security
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-500 mb-8 font-medium">
                    Enterprise-level protection powered by advanced encryption and real-time threat detection. Your attendees' data and transactions are secured with military-grade protocols and continuous monitoring.
                  </p>
                  
                  {/* Security Status Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-emerald-600/20 rounded-2xl border border-emerald-400/40 group-hover:border-emerald-300/60 transition-all duration-300 group-hover:scale-105">
                      <div className="w-8 h-8 bg-emerald-500/30 rounded-xl mx-auto mb-3 flex items-center justify-center border border-emerald-400/40">
                        <div className="w-4 h-4 bg-emerald-400/70 rounded"></div>
                      </div>
                      <div className="text-emerald-300 text-sm font-black tracking-wide">256-BIT SSL</div>
                      <div className="text-gray-400 text-xs mt-1">Bank-level encryption</div>
                    </div>
                    
                    <div className="text-center p-4 bg-blue-600/20 rounded-2xl border border-blue-400/40 group-hover:border-blue-300/60 transition-all duration-300 group-hover:scale-105 delay-100">
                      <div className="w-8 h-8 bg-blue-500/30 rounded-xl mx-auto mb-3 flex items-center justify-center border border-blue-400/40">
                        <div className="w-4 h-4 bg-blue-400/70 rounded-full"></div>
                      </div>
                      <div className="text-blue-300 text-sm font-black tracking-wide">STRIPE SECURE</div>
                      <div className="text-gray-400 text-xs mt-1">Global payment leader</div>
                    </div>
                    
                    <div className="text-center p-4 bg-purple-600/20 rounded-2xl border border-purple-400/40 group-hover:border-purple-300/60 transition-all duration-300 group-hover:scale-105 delay-200">
                      <div className="w-8 h-8 bg-purple-500/30 rounded-xl mx-auto mb-3 flex items-center justify-center border border-purple-400/40">
                        <div className="w-4 h-4 bg-purple-400/70 rounded"></div>
                      </div>
                      <div className="text-purple-300 text-sm font-black tracking-wide">PCI DSS</div>
                      <div className="text-gray-400 text-xs mt-1">Level 1 compliant</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature 4 - Quantum-Speed Payouts */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(251,146,60,0.1)] group-hover:scale-[1.02] group-hover:-translate-y-2">
                  
                  {/* Premium Feature Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-orange-500/30">
                      <div className="w-10 h-10 bg-white/20 rounded-xl border border-white/30 backdrop-blur-sm relative">
                        <div className="absolute top-1 right-1 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg">
                      <div className="absolute inset-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-black text-3xl mb-6 group-hover:text-orange-300 transition-colors duration-500 tracking-wide">
                    Quantum-Speed Payouts
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-500 mb-8 font-medium">
                    Revolutionary instant payment processing that delivers funds at light speed. Advanced treasury management and real-time settlement ensure your cash flow never stops, even before your event begins.
                  </p>
                  
                  {/* Payout Timeline Visualization */}
                  <div className="relative">
                    <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl border border-orange-400/40 backdrop-blur-sm group-hover:border-orange-300/60 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse shadow-lg"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-orange-300 text-lg font-black tracking-wide">INSTANT PROCESSING</div>
                          <div className="text-white font-black text-sm">&lt; 1 SEC</div>
                        </div>
                        <div className="text-gray-300 text-sm font-medium">Funds available immediately after transaction completion</div>
                        <div className="mt-3 w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elite Support Experience - Full Width */}
            <div className="mt-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] p-12 border border-gray-700/50 hover:border-cyan-500/60 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(6,182,212,0.1)] group-hover:scale-[1.01] group-hover:-translate-y-1">
                  
                  <div className="flex items-start space-x-10">
                    {/* Elite Feature Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-cyan-500/30">
                        <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white/30 backdrop-blur-sm relative">
                          <div className="absolute inset-3 border border-white/50 rounded-full"></div>
                          <div className="absolute top-1 right-1 w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-black text-4xl mb-6 group-hover:text-cyan-300 transition-colors duration-500 tracking-wide">
                        Elite Support Experience
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed text-2xl group-hover:text-gray-200 transition-colors duration-500 max-w-5xl mb-10 font-medium">
                        White-glove support from event industry experts who understand your vision. Our dedicated success team provides proactive guidance, technical expertise, and strategic insights to ensure your events exceed expectations.
                      </p>
                      
                      {/* Premium Support Channels */}
                      <div className="grid grid-cols-3 gap-8">
                        <div className="text-center group-hover:scale-105 transition-transform duration-300">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/30 to-cyan-800/30 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-cyan-400/40 backdrop-blur-sm group-hover:border-cyan-300/60 transition-all duration-300">
                            <div className="w-8 h-8 bg-cyan-400/60 rounded-lg"></div>
                          </div>
                          <div className="text-cyan-300 text-lg font-black tracking-wide mb-2">LIVE CONCIERGE</div>
                          <div className="text-gray-400 text-sm font-medium">Instant expert assistance</div>
                          <div className="mt-3 px-4 py-2 bg-cyan-600/20 rounded-lg border border-cyan-400/30">
                            <span className="text-cyan-300 text-xs font-bold">&lt; 30 SEC RESPONSE</span>
                          </div>
                        </div>
                        
                        <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-100">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-blue-400/40 backdrop-blur-sm group-hover:border-blue-300/60 transition-all duration-300">
                            <div className="w-8 h-8 bg-blue-400/60 rounded-full"></div>
                          </div>
                          <div className="text-blue-300 text-lg font-black tracking-wide mb-2">DEDICATED SUCCESS</div>
                          <div className="text-gray-400 text-sm font-medium">Personal account manager</div>
                          <div className="mt-3 px-4 py-2 bg-blue-600/20 rounded-lg border border-blue-400/30">
                            <span className="text-blue-300 text-xs font-bold">STRATEGIC GUIDANCE</span>
                          </div>
                        </div>
                        
                        <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-200">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-purple-400/40 backdrop-blur-sm group-hover:border-purple-300/60 transition-all duration-300">
                            <div className="w-8 h-8 bg-purple-400/60 rounded"></div>
                          </div>
                          <div className="text-purple-300 text-lg font-black tracking-wide mb-2">PRIORITY HOTLINE</div>
                          <div className="text-gray-400 text-sm font-medium">Direct expert connection</div>
                          <div className="mt-3 px-4 py-2 bg-purple-600/20 rounded-lg border border-purple-400/30">
                            <span className="text-purple-300 text-xs font-bold">24/7 AVAILABILITY</span>
                          </div>
                        </div>
                      </div>
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
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                WAITING FOR?
              </span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Connect your account and create your first event in as little as 5
              minutes. Say goodbye to complicated ticketing platforms. With
              EMS, you can focus on what matters most - creating amazing events
              that your audience will love.
            </p>
            <div className="mb-16">
              <p className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to go?
              </p>
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
                        <div className="text-white font-bold text-lg">
                          Music Festival
                        </div>
                        <div className="text-gray-400 text-sm">
                          Dec 15-17, 2024
                        </div>
                        <div className="text-emerald-400 text-sm font-semibold">
                          1,234 tickets sold
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group hover:bg-gray-800/50 p-4 rounded-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                      <div>
                        <div className="text-white font-bold text-lg">
                          Tech Conference
                        </div>
                        <div className="text-gray-400 text-sm">
                          Jan 20, 2025
                        </div>
                        <div className="text-orange-400 text-sm font-semibold">
                          567 tickets sold
                        </div>
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
            <p className="text-center text-gray-400 text-sm font-medium mb-12 tracking-wider">
              POWERING EVENTS WORLDWIDE
            </p>
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
              <div className="text-lg font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
                ESCAPISM
              </div>
              <div className="group cursor-pointer hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600/50 to-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-600/30 group-hover:border-orange-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg"></div>
              </div>
              <div className="text-lg font-black bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer">
                Matchstick
              </div>
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
  );
};

export default IndustryHomepage;
