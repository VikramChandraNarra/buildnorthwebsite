"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Tooltip component for hover definitions
const Tooltip = ({ children, definition, isVisible, position }: { 
  children: React.ReactNode; 
  definition: string; 
  isVisible: boolean; 
  position: { x: number; y: number; }
}) => {
  if (!isVisible) return null;
  
  const tooltipContent = (
    <div 
      className="fixed z-50 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xs text-white text-sm shadow-2xl"
      style={{ 
        left: position.x + 10, 
        top: position.y - 10,
        pointerEvents: 'none'
      }}
    >
      {definition}
    </div>
  );

  // Use portal to render tooltip outside the paragraph structure
  return createPortal(tooltipContent, document.body);
};

// Underlined term component
const UnderlinedTerm = ({ children, definition }: { children: React.ReactNode; definition: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    setPosition({ 
      x: e.clientX, 
      y: e.clientY 
    });
    setIsVisible(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ 
      x: e.clientX, 
      y: e.clientY 
    });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <span 
        className="underline decoration-yellow-400 decoration-2 underline-offset-4 cursor-pointer hover:decoration-yellow-300 transition-all duration-200"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      <Tooltip 
        definition={definition} 
        isVisible={isVisible} 
        position={position}
      />
    </>
  );
};

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

        {/* The Letter Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-12 text-center drop-shadow-2xl">
                Why Buildnorth Exists
              </h2>
              
              <div className="space-y-8 text-white/95 text-lg md:text-xl leading-relaxed">
                <p>
                  What happens when you land in <UnderlinedTerm definition="The epicenter of tech innovation, where ambitious students feel they can build the next big thing. Home to Y Combinator, where Dropbox, Airbnb, and Stripe got their start">San Francisco</UnderlinedTerm>?
                </p>
                <p>
                  You feel limitless. Like you could build the next <UnderlinedTerm definition="Founded by Ilya Sutskever (UofT grad) and Sam Altman. Their breakthrough came from a 2017 paper published at UofT that introduced the transformer architecture">OpenAI</UnderlinedTerm>, <UnderlinedTerm definition="Started by Jeff Bezos in his garage. Now worth $1.7T. Shows how a simple idea can become a global empire">Amazon</UnderlinedTerm>, or <UnderlinedTerm definition="Founded by Larry Page and Sergey Brin at Stanford. Their first office was a garage. Now they're building AI that can reason like humans">Google</UnderlinedTerm> — even as a student. That feeling changes everything.
                </p>
                <p>
                  We want to bring that feeling to <UnderlinedTerm definition="Home to Geoffrey Hinton (UofT), who pioneered deep learning. Waterloo has the world's largest co-op program. Canadian students have built companies like Opennote (YC-backed)">Canada</UnderlinedTerm>.
                </p>
                
                <div className="mt-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
                  <p>
                    To give Canadian students <UnderlinedTerm definition="The cultural freedom to try, fail, and build without fear of judgment. In SF, failure is celebrated as learning. In Canada, we're taught to play it safe">cultural permission</UnderlinedTerm> to build.
                  </p>
                  <p>
                    To make building feel <UnderlinedTerm definition="Creating something new and meaningful. The rush of shipping your first feature and seeing users actually use it">exciting</UnderlinedTerm>, <UnderlinedTerm definition="Respected and admired by peers. In SF, being a founder is cool. In Canada, we're taught to be humble">high-status</UnderlinedTerm>, and <UnderlinedTerm definition="Spreads from person to person like a positive virus. When you see your friends building, you want to build too">contagious</UnderlinedTerm>. We believe in:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="group perspective">
                      <div className="relative w-full h-48 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180 group-hover:scale-110 group-hover:h-56">
                        {/* Front of card */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 backface-hidden flex flex-col justify-center items-center text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Social proof</h4>
                          <p className="text-white/90 text-sm leading-relaxed">Everyone around you is building. You want to join.</p>
                        </div>
                        {/* Back of card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 backface-hidden rotate-y-180 flex flex-col justify-center items-center text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Fun Fact</h4>
                          <p className="text-white/90 text-sm leading-relaxed">In 2004, when Facebook launched at Harvard, 1,200 students joined in 24 hours. When your friends are doing something cool, you want in too.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group perspective">
                      <div className="relative w-full h-48 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180 group-hover:scale-110 group-hover:h-56">
                        {/* Front of card */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 backface-hidden flex flex-col justify-center items-center text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Status loops</h4>
                          <p className="text-white/90 text-sm leading-relaxed">You build, people notice, momentum builds.</p>
                        </div>
                        {/* Back of card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 backface-hidden rotate-y-180 flex flex-col justify-center items-center text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Fun Fact</h4>
                          <p className="text-white/90 text-sm leading-relaxed">Dropbox's founder Drew Houston got rejected by YC twice. On his third try, he demoed live and got in. Each failure made him better.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group perspective">
                      <div className="relative w-full h-48 transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180 group-hover:scale-110 group-hover:h-56">
                        {/* Front of card */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 backface-hidden flex flex-col justify-center items-center text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Identity rewards</h4>
                          <p className="text-white/90 text-sm leading-relaxed">You begin to see yourself as a builder.</p>
                        </div>
                        {/* Back of card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 backface-hidden rotate-y-180 flex flex-col justify-center items-center text-center">
                          <h4 className="text-lg font-bold text-white mb-4">Fun Fact</h4>
                          <p className="text-white/90 text-sm leading-relaxed">Airbnb's founders started by renting out air mattresses in their apartment. They didn't call themselves 'founders' - they were just solving a problem.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">The Vision</h3>
                  <p>
                    We imagine a Canada where:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-2 text-xl">•</span>
                      <p>It's normal to say, "I'm building the next <UnderlinedTerm definition="Founded by Tobi Lütke in Ottawa. Started as a snowboard shop website. Now worth $100B+. Shows Canadian founders can build global companies">Shopify</UnderlinedTerm>."</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-2 text-xl">•</span>
                      <p>Students take <UnderlinedTerm definition="Trying new things even when they might fail. Like when Instagram started as a location check-in app before pivoting to photos">risks</UnderlinedTerm> and <UnderlinedTerm definition="Releasing products quickly, even if imperfect. Twitter was built in 2 weeks. WhatsApp was built by 2 people">ship fast</UnderlinedTerm>.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-2 text-xl">•</span>
                      <p><UnderlinedTerm definition="When things don't work out as planned. Instagram's founders had 14 failed apps before Instagram. Failure is just iteration">Failure</UnderlinedTerm> is something to laugh about, not hide.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-400 mr-4 mt-2 text-xl">•</span>
                      <p><UnderlinedTerm definition="Someone who creates and builds things. Like the students who built Facebook in their dorm room, or the team that built Instagram in 8 weeks">Building</UnderlinedTerm> is a <UnderlinedTerm definition="How you see yourself and how others see you. In SF, 'I'm building something' is a normal answer to 'what do you do?'">social identity</UnderlinedTerm>, not a job title.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">This Isn't a Club</h3>
                  <p>
                    This isn't <UnderlinedTerm definition="Shared office spaces for entrepreneurs. We're not about desks and coffee. We're about the spark before you even have an idea">co-working</UnderlinedTerm> or <UnderlinedTerm definition="Guidance from experienced professionals. We're not about advice from people who made it. We're about the energy of people trying to make it">mentorship</UnderlinedTerm>. It's the <UnderlinedTerm definition="The initial moment of inspiration before action. Like when Zuckerberg saw the Harvard face book and thought 'I can build this better'">spark</UnderlinedTerm> before the fire. The space before you call yourself a <UnderlinedTerm definition="Someone who creates and builds things. Not someone with a business card, but someone who can't stop thinking about their next project">builder</UnderlinedTerm>. We exist for the <UnderlinedTerm definition="People who want to learn and explore. The ones who read about new technologies and think 'what if I built something with this?'">curious</UnderlinedTerm> and <UnderlinedTerm definition="People who can't sit still, always seeking more. The ones who see a problem and immediately think 'I could fix that'">restless</UnderlinedTerm> — the ones who know there's more than just a <UnderlinedTerm definition="Job offer after graduation. We're not against good jobs. We're for the people who know they want to build their own thing">return offer</UnderlinedTerm>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-black/30 backdrop-blur-sm">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Main Title with Enhanced Styling */}
            <div className="mb-16">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-none">
                Join the{" "}
                <span className="text-white animate-pulse">
                  Movement
                </span>
              </h2>
              
              {/* Animated Underline */}
              <div className="w-32 h-1 bg-white mx-auto rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Subtitle */}
            <div className="mb-16">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-light leading-relaxed mb-8">
                Canada can be the best place to be a young <UnderlinedTerm definition="Someone who creates and builds things">builder</UnderlinedTerm>. Not just to get a job, but to create something real.
              </p>
              
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                We're here to build that future. Are you in?
              </p>
            </div>
            
            {/* Enhanced Waitlist Form */}
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative flex justify-center">
                  <button className="px-12 py-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-xl transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20 flex items-center gap-3 whitespace-nowrap">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Join 500+ builders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
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