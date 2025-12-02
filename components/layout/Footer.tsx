import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="font-bold text-2xl text-white tracking-wider">KWC</span>
            <p className="mt-2 text-sm">© {new Date().getFullYear()} Kelowna Wrestling Club.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-center">
            <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
            {/* Liability Waiver Link */}
            <Link href="#" className="hover:text-white transition-colors flex items-center justify-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              Liability Waiver
            </Link>
            {/* Feedback Form Link */}
            <Link href="#" className="hover:text-white transition-colors">Anonymous Feedback</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

