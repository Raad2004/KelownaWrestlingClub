import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-[#0B1120] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Radial Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-slate-900/60 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start text-left">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-red-500 font-bold text-xs tracking-widest mb-8 uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Kelowna's Premier Wrestling
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          <span className="block text-white">FORGE</span>
          <span className="block text-red-600">YOUR LEGACY</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 font-medium leading-relaxed">
          Join the elite. The Okanagan's top destination for <span className="text-white">Freestyle Wrestling</span> training. From beginners to champions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-red-600 hover:bg-red-700 text-white text-base md:text-lg px-8 py-4 rounded font-bold shadow-lg shadow-red-900/20 transition-all hover:scale-105 uppercase tracking-wide">
            Start Free Trial →
          </button>
          <button className="bg-transparent border border-slate-700 text-white hover:bg-white hover:text-slate-900 text-base md:text-lg px-8 py-4 rounded font-bold transition-all uppercase tracking-wide">
            View Schedule
          </button>
        </div>
      </div>

      {/* Angled Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>
    </section>
  );
}

