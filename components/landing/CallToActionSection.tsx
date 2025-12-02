import React from 'react';

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Wrestling Journey?</h2>
        <p className="text-xl mb-8 text-red-100">
          Book your free first session today and experience what KWC has to offer.
        </p>
        <button className="bg-white text-red-600 hover:bg-slate-100 text-lg px-8 py-4 rounded-lg font-bold shadow-lg transition-transform hover:scale-105">
          Book First Session
        </button>
      </div>
    </section>
  );
}

