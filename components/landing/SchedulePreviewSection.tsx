import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function SchedulePreviewSection() {
  return (
    <section id="schedule" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            WHERE WE <span className="text-red-600">TRAIN</span>
          </h2>
          <p className="mt-4 text-slate-400 font-medium">Show up. Put in the work. Results will follow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Main Facility Card */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative shadow-2xl flex flex-col">
            <div className="absolute top-6 right-6 bg-green-900/30 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full border border-green-500/20 tracking-wider">
              ACTIVE HQ
            </div>
            
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
              <MapPin className="h-6 w-6 text-red-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Main Facility</h3>
            <p className="text-slate-400 mb-8 max-w-xs">2333 Hunter Rd #101, Kelowna, BC V1X 7C5</p>

            <div className="mt-auto border-t border-slate-800 pt-8">
              <p className="flex items-center text-slate-500 mb-6 text-sm font-medium">
                <Phone className="h-4 w-4 mr-2" /> (604) 363-0641
              </p>
              <a href="https://maps.google.com" target="_blank" className="block w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 rounded-xl text-center transition-colors shadow-lg shadow-white/5">
                Get Directions →
              </a>
            </div>
          </div>

          {/* Schedule Card - Red */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col border-t border-red-400">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Clock className="h-6 w-6 text-red-100" />
              <h3 className="text-xl font-bold">Weekly Schedule</h3>
            </div>

            <div className="space-y-3 relative z-10 flex-grow">
              {/* Row 1 */}
              <div className="bg-red-900/20 p-4 rounded-xl flex justify-between items-center border border-red-500/30 backdrop-blur-sm hover:bg-red-900/30 transition-colors">
                <span className="font-bold text-sm md:text-base">Monday</span>
                <div className="text-right">
                  <span className="block font-mono font-bold text-sm md:text-base">7:00 PM - 8:30 PM</span>
                  <span className="text-[10px] text-red-200 uppercase tracking-wider">Mat A</span>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="bg-red-900/20 p-4 rounded-xl flex justify-between items-center border border-red-500/30 backdrop-blur-sm hover:bg-red-900/30 transition-colors">
                <span className="font-bold text-sm md:text-base">Wednesday</span>
                <div className="text-right">
                  <span className="block font-mono font-bold text-sm md:text-base">7:00 PM - 8:30 PM</span>
                  <span className="text-[10px] text-red-200 uppercase tracking-wider">Mat A</span>
                </div>
              </div>

              {/* Row 3 - Friday */}
              <div className="bg-red-900/20 p-4 rounded-xl flex justify-between items-center border border-red-500/30 backdrop-blur-sm hover:bg-red-900/30 transition-colors">
                <div>
                  <span className="font-bold block text-sm md:text-base">Friday</span>
                  <span className="text-[10px] text-red-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" /> At 165 Hwy 33 E, Kelowna, BC V1X 2A1
                  </span>
                </div>
                <div className="text-right">
                  <span className="block font-mono font-bold text-sm md:text-base">7:00 PM - 8:30 PM</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 border border-white/20 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-semibold transition-colors relative z-10">
              Directions to Toshido (Friday)
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

