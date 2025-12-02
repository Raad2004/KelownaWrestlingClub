import React from 'react';
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';

export default function CoachesPreviewSection() {
  return (
    <section id="coaches" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Coaches Teaser */}
          <div className="p-6 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors group">
            <Users className="h-10 w-10 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Expert Coaching</h3>
            <p className="text-slate-400 mb-4">
              Led by experienced coaches dedicated to your development on and off the mat.
            </p>
            <Link href="#" className="flex items-center text-red-400 font-semibold hover:text-red-300">
              Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {/* Merch Teaser */}
          <div className="p-6 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors group">
            <div className="h-10 w-10 text-red-500 mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">👕</div>
            <h3 className="text-xl font-bold mb-2">Club Gear</h3>
            <p className="text-slate-400 mb-4">
              Get your custom KWC hoodies, sweatshirts, and competition gear.
            </p>
            <Link href="#" className="flex items-center text-red-400 font-semibold hover:text-red-300">
              Visit Shop <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {/* News Teaser */}
          <div className="p-6 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors group">
            <div className="h-10 w-10 text-red-500 mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">📢</div>
            <h3 className="text-xl font-bold mb-2">Announcements</h3>
            <p className="text-slate-400 mb-4">
              Stay updated on practice cancellations, tournaments, and events.
            </p>
            <Link href="#" className="flex items-center text-red-400 font-semibold hover:text-red-300">
              View News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

