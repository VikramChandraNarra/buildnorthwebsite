"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const blurElement = document.getElementById('background-blur');
      
      if (blurElement) {
        // Start blur effect after hero section (100vh)
        if (scrollY > windowHeight) {
          const blurOpacity = Math.min((scrollY - windowHeight) / (windowHeight * 0.5), 1);
          blurElement.style.opacity = blurOpacity.toString();
        } else {
          blurElement.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpeg"
          alt="Build North Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Additional blur overlay for content sections */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 transition-opacity duration-500" id="background-blur"></div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          {/* Subtitle - Top Right */}
          <div className="absolute top-8 right-8 z-20 text-right">
            <p className="text-sm md:text-base lg:text-lg text-white font-light leading-relaxed max-w-xs">
              Empowering Canadian students to build the next Silicon Valley
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-white/70 mb-8 tracking-tight leading-none drop-shadow-2xl text-center">
            <span className="block transform transition-all duration-700 hover:scale-105 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 hover:bg-clip-text hover:drop-shadow-none">
              BUILD
            </span>
            <span className="block transform transition-all duration-700 hover:scale-105 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-600 hover:bg-clip-text hover:drop-shadow-none">
              NORTH
            </span>
          </h1>



          {/* Floating Elements for Cinematic Effect */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/60 rounded-full animate-float animate-glow"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400/80 rounded-full animate-float animate-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-float animate-glow" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-orange-400/80 rounded-full animate-float animate-glow" style={{animationDelay: '1.5s'}}></div>
        </section>

        {/* The Problem Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
                      <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-16 drop-shadow-2xl">
                Canada Has <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Incredible Talent</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-16 mt-16">
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">The Talent</h3>
                  <ul className="space-y-6 text-white/90 text-lg leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-1 text-xl">⭐</span>
                      <span>Waterloo has the <strong>largest co-op program</strong> in the world</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-1 text-xl">⭐</span>
                      <span><strong>Geoffrey Hinton</strong> and his students changed AI with AlexNet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-1 text-xl">⭐</span>
                      <span><strong>Ilya Sutskever</strong> and <strong>Andrej Karpathy</strong> co-founded OpenAI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-1 text-xl">⭐</span>
                      <div>
                        <span>Multiple <strong>startups by Canadian students</strong> backed by</span>
                        <div className="inline-flex items-center gap-3 ml-3 mt-2">
                          {/* Y Combinator */}
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-white font-bold text-xs">Y</span>
                          </div>
                          {/* Sequoia */}
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                          </div>
                          {/* Andreessen Horowitz */}
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-white font-bold text-xs">a16z</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">The Problem</h3>
                  <ul className="space-y-6 text-white/90 text-lg leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 mt-1 text-xl">⚠️</span>
                      <span>We <strong>only</strong> grind for internships and return offers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 mt-1 text-xl">⚠️</span>
                      <span>We are afraid of <strong>failure</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 mt-1 text-xl">⚠️</span>
                      <span><strong>Investors</strong> are too cautious with young founders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 mt-1 text-xl">⚠️</span>
                      <span>Culture is too <strong>risk-averse</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </section>

        {/* The Vision Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 drop-shadow-2xl">
              What If We Had <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">Permission to Build</span>?
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-16">
              Could we see the next <strong>Shopify</strong> emerging again in Canada?
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                In <strong>San Francisco</strong>, shipping early, embracing failure, and loud ambition for students is <strong>celebrated</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
                      <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 drop-shadow-2xl">
                Our <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Values</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Loud Ambition",
                  description: "It's okay to say 'I want to build the next Shopify'",
                  icon: (
                    <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Ship Fast",
                  description: "Reward momentum and speed > polish",
                  icon: (
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Permission to Fail",
                  description: "Actively reward attempts, not just outcomes",
                  icon: (
                    <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Imperfect Demos",
                  description: "Celebrate rough, live, unfinished stuff",
                  icon: (
                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Risk-taking as Identity",
                  description: "It's cool to try hard things",
                  icon: (
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  )
                },
                {
                  title: "Velocity > Prestige",
                  description: "We care what you ship, not where you went to school",
                  icon: (
                    <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-sm">
                      <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 drop-shadow-2xl">
                Our <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">Initiatives</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Launch Sundays",
                  description: "Live, messy, raw demo events to normalize imperfections and progress",
                  icon: (
                    <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Ship Club",
                  description: "A micro group of students pushing each other to ship weekly",
                  icon: (
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )
                },
                {
                  title: "Risk Grants",
                  description: "$200 — $1k for 'might fail but trying anyway' ideas",
                  icon: (
                    <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )
                },
                {
                  title: '"Flopped" Wall',
                  description: "Digital feed of 'flopped' projects - making risk visible & funny",
                  icon: (
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12H5a2 2 0 01-2-2V6a2 2 0 012-2h4m0 0h8a2 2 0 012 2v4a2 2 0 01-2 2h-8m0 0v4a2 2 0 002 2h4a2 2 0 002-2v-4m0 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Builder Quests",
                  description: "Weekly 'can you build this' challenges, like bounties but cooler",
                  icon: (
                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((initiative, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover-lift">
                  <div className="mb-6">{initiative.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{initiative.title}</h3>
                  <p className="text-white/90 leading-relaxed text-base">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Main Title with Enhanced Styling */}
            <div className="mb-16">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-none">
                Join the{" "}
                <span className="text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 bg-clip-text animate-pulse">
                  Movement
                </span>
              </h2>
              
              {/* Animated Underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Subtitle */}
            <div className="mb-16">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light leading-relaxed mb-8">
                Canada can become the{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                  best place in the world
                </span>{" "}
                to be a young builder.
              </p>
              
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                The question is,{" "}
                <span className="text-transparent bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text font-bold">
                  will you be a part of this change?
                </span>
              </p>
            </div>
            
            {/* Enhanced Waitlist Form */}
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative flex gap-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full p-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email to join the waitlist"
                    className="flex-1 px-6 py-4 bg-transparent border-none text-white placeholder-white/60 font-medium text-lg transition-all duration-300 focus:outline-none"
                  />
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 whitespace-nowrap group-hover:from-blue-600 group-hover:to-indigo-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Join Waitlist
                  </button>
                </div>
              </div>
              
              <p className="text-white/70 text-sm mt-6 text-center font-medium">
                Be the first to know when we launch 🚀
              </p>
            </div>
            
            {/* Social Proof Element */}
            <div className="flex justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Join 500+ builders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <span>Launching soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm font-light mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}