import React from 'react';
import Link from 'next/link';
import { Users, Shirt, Newspaper, ArrowRight } from 'lucide-react';

export default function CoachesPreviewSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">CLUB FEATURES</h2>
          <div className="h-1.5 w-16 bg-red-600 mt-2" />
          <p className="mt-4 text-slate-500 text-right w-full">Everything you need to succeed on the mat.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Coaching Card */}
          <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">World Class Coaching</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Learn from experienced wrestlers who have competed at the highest levels.
            </p>
            <Link href="#coaches" className="flex items-center text-slate-900 text-sm font-bold group-hover:text-red-600 transition-colors">
              Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Gear Card */}
          <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
              <Shirt className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Gear</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Rep the club with high-quality custom singlets, hoodies, and training gear.
            </p>
            <Link href="#" className="flex items-center text-slate-900 text-sm font-bold group-hover:text-red-600 transition-colors">
              Visit Shop <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* News Card */}
          <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
              <Newspaper className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Club News</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Stay updated on tournament schedules, camp dates, and club events.
            </p>
            <Link href="#news" className="flex items-center text-slate-900 text-sm font-bold group-hover:text-red-600 transition-colors">
              Latest Updates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

