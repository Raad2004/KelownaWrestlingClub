import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">THE GRIND</h2>
          <div className="h-2 w-24 bg-red-600 mt-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Image Card */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-slate-200 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-900">
               <Image 
                 src="/images/wrestling_suplex_training_throw.jpg" 
                 alt="KWC Team Training" 
                 fill
                 className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent w-full">
                 <div className="border-l-2 border-red-600 pl-4">
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Established</p>
                    <p className="text-white text-2xl font-black tracking-wide">KELOWNA, BC</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="pt-4">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">More Than Just a Sport.</h3>
            
            <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed">
              <p>
                Freestyle wrestling is the ultimate test of will. Unlike Greco-Roman, we use the entire body. It's fast, explosive, and technical.
              </p>
              <p>
                No submissions. No guard pulling. Just pure dominance. Pin or be pinned.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-slate-900">Olympic Style Wrestling</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-slate-900">Build Explosive Power</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-slate-900">Mental Toughness</span>
              </li>
            </ul>
            
            {/* Spotify Button */}
            <a href="https://open.spotify.com/playlist/4SmrYcoGfbU1n1dDSZOHRH?si=69560611ecb54b58&pt=a1d056cab579ca2e5a4ee42ed99e158e" target="_blank" rel="noopener noreferrer" className="inline-flex bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-xl items-center gap-4 transition-all hover:shadow-xl group w-full sm:w-auto">
              <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3H9c-1.1 0-2 .9-2 2v12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.57 0 1.08.12 1.55.32L5 6c0-2.21 1.79-4 4-4h12c1.1 0 2 .9 2 2v12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.57 0 1.08.12 1.55.32V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Vibe Check</span>
                <span className="text-sm font-bold">Listen to Team Playlist</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

