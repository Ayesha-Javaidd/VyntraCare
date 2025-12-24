import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-10">
          Terms & Conditions
        </h1>

        {/* Content Card */}
        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              These Terms and Conditions govern your access to and use of the
              Vyntra Care platform, including the procurement of medical
              supplies, facility services, and AI-enabled features. By using
              Vyntra Care, you agree to comply with these terms.
            </p>

            {/* Headings with side border */}
            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Platform Use
            </h2>
            <p>
              Vyntra Care is intended for use by healthcare facilities,
              professionals, and authorized individuals. You agree to use the
              platform solely for lawful purposes and in accordance with
              applicable healthcare regulations.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Accounts & Access
            </h2>
            <p>
              Users are responsible for maintaining the confidentiality of
              account credentials. Any activity performed under your account is
              your responsibility.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Medical Products & Services
            </h2>
            <p>
              All medical supplies offered through Vyntra Care are subject to
              availability and regulatory requirements. Product descriptions,
              pricing, and availability may change without notice.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              AI-Enabled Features
            </h2>
            <p>
              AI-driven tools, including sizing and recommendations, are
              intended to assist—not replace—professional medical judgment.
              Users remain responsible for clinical decisions and product
              selection.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Payments & Billing
            </h2>
            <p>
              Payments must be completed through authorized payment methods.
              Failure to complete payment may result in order cancellation or
              account suspension.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Vyntra Care shall not be
              liable for indirect, incidental, or consequential damages arising
              from the use of the platform or purchased products.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to the
              platform if these terms are violated or if required by law.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Changes to Terms
            </h2>
            <p>
              These terms may be updated periodically. Continued use of the
              platform constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
