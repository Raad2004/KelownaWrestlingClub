import React from 'react';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Us</h2>
          <p className="text-slate-600">Visit our training facility in Kelowna</p>
        </div>
        {/* Map placeholder - can be replaced with Google Maps embed */}
        <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
          <p className="text-slate-500">Map will be embedded here</p>
        </div>
      </div>
    </section>
  );
}

