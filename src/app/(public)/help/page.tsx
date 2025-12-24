import React from 'react';

export default function HelpPage() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
          Help Center
        </h1>

        <p className="text-slate-600 max-w-2xl mb-12">
          Find answers to common questions, learn how to use the platform
          effectively, and get guidance on orders, facilities, and compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-slate-900">
              Order Tracking & Fulfillment
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Track your orders in real time, view shipment statuses, and
              receive updates on delivery timelines for medical supplies.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-slate-900">
              Facility Onboarding
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Step-by-step guidance on setting up your healthcare facility,
              managing users, and configuring inventory workflows.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-slate-900">
              Inventory & Procurement
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Learn how to optimize inventory levels, place procurement orders,
              and leverage data insights for operational efficiency.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-slate-900">
              Compliance & Security
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Understand how Vyntra Care supports healthcare compliance,
              supplier verification, and secure data handling.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
