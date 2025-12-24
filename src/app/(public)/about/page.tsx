import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-10">
          About Vyntra Care
        </h1>

        {/* Content Card */}
        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              Vyntra Care is a next-generation healthcare supply chain platform
              designed to modernize how medical institutions, facilities, and
              healthcare professionals procure, manage, and distribute essential
              medical supplies.
            </p>

            <p>
              In an industry where inefficiencies, stock shortages, and lack of
              transparency directly impact patient outcomes, Vyntra Care
              provides a technology-driven solution focused on reliability,
              intelligence, and trust.
            </p>

            {/* Heading with side border */}
            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Our Mission
            </h2>
            <p>
              Our mission is to eliminate friction from healthcare procurement
              by combining intelligent inventory management, AI-powered demand
              forecasting, and a secure logistics ecosystem. We aim to ensure
              that critical medical supplies are available when and where they
              are needed most.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              What We Do
            </h2>
            <p>
              Vyntra Care connects healthcare providers with verified suppliers
              through a unified digital platform. From procurement and inventory
              tracking to fulfillment and compliance oversight, our system
              enables end-to-end visibility across the medical supply lifecycle.
            </p>

            <ul className="list-disc list-inside">
              <li>Centralized medical product procurement</li>
              <li>AI-driven inventory optimization and forecasting</li>
              <li>Secure order management and fulfillment tracking</li>
              <li>Compliance-focused supplier verification</li>
              <li>Actionable data insights for operational decision-making</li>
            </ul>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Technology & Innovation
            </h2>
            <p>
              At the core of Vyntra Care is a scalable, cloud-native
              architecture built specifically for healthcare environments. Our
              platform leverages advanced analytics and artificial intelligence
              to reduce waste, prevent stock shortages, and improve operational
              efficiency across facilities.
            </p>

            <p>
              Security and data integrity are foundational to our platform. We
              design our systems with healthcare compliance, privacy safeguards,
              and audit readiness as first-class priorities.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Who We Serve
            </h2>
            <p>
              Vyntra Care serves hospitals, clinics, diagnostic centers,
              pharmacies, and healthcare administrators seeking reliable,
              transparent, and scalable supply chain solutions.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Our Vision
            </h2>
            <p>
              We envision a future where healthcare supply chains are proactive,
              intelligent, and resilient — empowering providers to focus on what
              matters most: delivering high-quality patient care without
              operational uncertainty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
