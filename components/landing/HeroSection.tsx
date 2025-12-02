import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-slate-800 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        {/* Replace with a photo of the club/wrestling mat */}
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Wrestling Mat" 
          fill
          className="object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          KELOWNA <span className="text-red-600">WRESTLING</span> CLUB
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Forging champions in the Okanagan. Join us for elite freestyle wrestling training. 
          Beginners welcome.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* First session is free */}
          <button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg transition-transform hover:scale-105">
            Start Your Free Trial
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white text-lg px-8 py-4 rounded-lg font-bold transition-all">
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
}

