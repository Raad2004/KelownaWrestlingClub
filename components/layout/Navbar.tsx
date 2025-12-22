import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="relative h-10 w-10 bg-white rounded-full overflow-hidden border-2 border-red-600">
              <Image 
                src="/images/KWC_Logo.png" 
                alt="KWC Logo" 
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <span className="font-extrabold text-xl tracking-wider italic">KWC</span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center font-medium text-sm tracking-wide">
            <Link href="#about" className="hover:text-red-500 transition-colors uppercase">About</Link>
            <Link href="#schedule" className="hover:text-red-500 transition-colors uppercase">Schedule</Link>
            <Link href="#coaches" className="hover:text-red-500 transition-colors uppercase">Coaches</Link>
            <Link href="#news" className="hover:text-red-500 transition-colors uppercase">News</Link>
            <Link href="/admin/login" className="hover:text-red-500 transition-colors uppercase">Admin</Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
             <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition-all shadow-md text-sm tracking-wider uppercase">
              Book Trial
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

