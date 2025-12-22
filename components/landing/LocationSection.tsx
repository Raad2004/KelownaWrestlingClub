import React from 'react';

export default function LocationSection() {
  return (
    <section id="location" className="pb-24 pt-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Find Us</h2>
          <p className="text-slate-500">Visit our training facility in Kelowna</p>
        </div>
        
        {/* Google Map Embed */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[400px] md:h-[500px] relative bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.835372433435!2d-119.39893592353842!3d49.88331827148943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8d267878696d%3A0x627341577977465!2s2333%20Hunter%20Rd%20%23101%2C%20Kelowna%2C%20BC%20V1X%207C5!5e0!3m2!1sen!2sca!4v1703200000000!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="KWC Location"
            className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}

