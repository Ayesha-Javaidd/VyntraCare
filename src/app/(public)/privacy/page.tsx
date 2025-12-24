import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">

            <p>
              Vyntra Care is committed to protecting your privacy and maintaining
              the confidentiality of your personal and healthcare-related data.
              This Privacy Policy explains how we collect, use, and safeguard
              your information.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect personal information such as your name, contact
              details, order history, and healthcare-related preferences when
              you use our platform.
            </p>

            <h2>Use of Information</h2>
            <p>
              Your information is used strictly to:
            </p>
            <ul>
              <li>Process orders and provide requested services</li>
              <li>Improve platform functionality and user experience</li>
              <li>Ensure compliance with healthcare regulations</li>
            </ul>

            <h2>Data Security & Compliance</h2>
            <p>
              We implement industry-standard encryption, secure infrastructure,
              and strict access controls to protect your data. Vyntra Care is
              designed with HIPAA-aligned principles to safeguard sensitive
              healthcare information.
            </p>

            <h2>Data Sharing</h2>
            <p>
              We do not sell or trade personal data. Information is shared only
              with trusted service providers when necessary to deliver services
              or comply with legal obligations.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal data, subject to applicable legal and regulatory
              requirements.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
