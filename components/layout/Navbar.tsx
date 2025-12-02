import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="relative h-12 w-12 bg-white rounded-full overflow-hidden border-2 border-red-600">
              {/* Replace with actual Logo */}
              <Image 
                src="/images/logo.svg" 
                alt="KWC Logo" 
                width={48}
                height={48}
                className="p-1 object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl tracking-wider">KWC</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className="hover:text-red-500 transition-colors">About</Link>
            <Link href="#schedule" className="hover:text-red-500 transition-colors">Schedule</Link>
            <Link href="#coaches" className="hover:text-red-500 transition-colors">Coaches</Link>
            <Link href="#news" className="hover:text-red-500 transition-colors">News</Link>
            {/* Login for Admin */}
            <Link href="/admin/login" className="text-slate-400 hover:text-white text-sm">Admin Login</Link>
            
            {/* CTA Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition-all shadow-md">
              Book First Session
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-red-500">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

