import React from 'react';

export default function ReturnPolicyPage() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-8">
          Return Policy
        </h1>

        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">

            <p>
              At Vyntra Care, patient safety and product integrity are our top
              priorities. Due to the regulated nature of medical and healthcare
              supplies, we maintain a strict but transparent return policy.
            </p>

            <h2>Eligible Returns</h2>
            <p>
              Returns are accepted under the following conditions:
            </p>
            <ul>
              <li>The item is defective or damaged upon delivery</li>
              <li>The product remains unopened and unused</li>
              <li>The return request is submitted within 30 days of delivery</li>
            </ul>

            <h2>Non-Returnable Items</h2>
            <p>
              For hygiene and regulatory reasons, the following items cannot be
              returned:
            </p>
            <ul>
              <li>Opened or used medical devices</li>
              <li>Personal respiratory equipment once unsealed</li>
              <li>Customized or AI-fitted products</li>
            </ul>

            <h2>Return Process</h2>
            <p>
              To initiate a return, please contact our support team with your
              order number and a brief description of the issue. Our team will
              review your request and provide return authorization instructions
              if eligible.
            </p>

            <h2>Refunds</h2>
            <p>
              Approved refunds are processed to the original payment method
              within 7–10 business days after inspection and approval.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
