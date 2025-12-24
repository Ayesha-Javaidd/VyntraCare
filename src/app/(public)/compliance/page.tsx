import React from "react";

export default function CompliancePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-10">
          Compliance & Security
        </h1>

        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              Vyntra Care is committed to meeting the highest standards of
              healthcare compliance and data security. Our platform is designed
              to protect sensitive medical information while ensuring reliable
              supply chain operations.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              HIPAA & Regulatory Compliance
            </h2>
            <p>
              All patient and facility data is handled in strict accordance with
              HIPAA guidelines. Our systems comply with applicable healthcare
              regulations and are regularly audited to ensure adherence.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Data Security
            </h2>
            <p>
              Vyntra Care uses industry-standard encryption, multi-factor
              authentication, and secure cloud infrastructure to protect data
              both in transit and at rest.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Audit & Monitoring
            </h2>
            <p>
              Access to sensitive data is monitored and logged. Regular audits
              ensure accountability, traceability, and early detection of
              potential security incidents.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Supplier & Product Compliance
            </h2>
            <p>
              All medical suppliers are verified and meet regulatory standards.
              Products offered through our platform are compliant with local
              laws and certified for clinical use where applicable.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Continuous Improvement
            </h2>
            <p>
              We continuously update our compliance practices to keep pace with
              evolving healthcare regulations, technology, and best practices,
              ensuring that both our clients and patients are protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
