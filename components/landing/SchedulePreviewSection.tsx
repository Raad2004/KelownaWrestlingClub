import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export default function SchedulePreviewSection() {
  return (
    <section id="schedule" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Training Schedule & Location</h2>
          <p className="mt-4 text-slate-600">Join us on the mat at the following times.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-slate-900 flex flex-col items-center text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-6">
              <MapPin className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-slate-600 mb-4">
              1234 Wrestling Way<br />
              Kelowna, BC, V1Y 1Y1
            </p>
            <button className="text-blue-600 font-semibold hover:underline">Get Directions</button>
          </div>
          {/* Schedule Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-600 flex flex-col items-center text-center">
            <div className="bg-red-50 p-4 rounded-full mb-6">
              <Calendar className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Practice Times</h3>
            <ul className="text-slate-600 space-y-2 mb-4">
              <li><strong>Mon / Wed / Fri:</strong> 6:00 PM - 8:00 PM</li>
              <li><strong>Saturday:</strong> 10:00 AM - 12:00 PM</li>
              <li><strong>Sunday:</strong> Rest Day</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

