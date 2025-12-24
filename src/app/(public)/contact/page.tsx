import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
          Contact Us
        </h1>

        <p className="text-slate-600 max-w-2xl mb-12">
          Whether you are a healthcare facility, supplier, or partner, our team
          is available to assist you with onboarding, procurement, logistics,
          and platform-related inquiries.
        </p>

        <div className="bg-white rounded-3xl border border-slate-100 p-10 shadow-sm space-y-10">

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              General Support
            </h3>
            <p className="text-lg font-semibold text-slate-900">
              support@vyntracare.com
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Available Monday to Friday, 9:00 AM – 6:00 PM (PST)
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Business & Partnerships
            </h3>
            <p className="text-lg font-semibold text-slate-900">
              partnerships@vyntracare.com
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Supplier onboarding, enterprise integrations, and collaborations
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Headquarters
            </h3>
            <p className="text-lg font-semibold text-slate-900">
              123 Healthcare Way, San Francisco, CA
            </p>
            <p className="text-sm text-slate-500 mt-1">
              United States
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
