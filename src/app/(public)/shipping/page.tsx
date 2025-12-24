import React from 'react';

export default function ShippingPolicyPage() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-10">
          Shipping Policy
        </h1>

        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">

            <p>
              At Vyntra Care, we prioritize the safe and timely delivery of all
              clinical-grade medical equipment and supplies. Our shipping
              process is designed to ensure reliability, traceability, and
              compliance with healthcare regulations.
            </p>

            <h2>Processing Time</h2>
            <p>
              Most orders are processed and prepared for shipment within 24
              hours of confirmation. You will receive an email notification
              once your order is ready and in transit.
            </p>

            <h2>Shipping Methods</h2>
            <p>
              We provide complimentary white-glove shipping for all clinical
              equipment. This includes careful handling, secure packaging, and
              direct delivery to your facility or designated address.
            </p>

            <h2>Tracking & Updates</h2>
            <p>
              You can track the status of your shipment via the link provided
              in your order confirmation email. Our support team is available
              for assistance with any delivery questions.
            </p>

            <h2>International & Special Shipments</h2>
            <p>
              For international orders or specialized medical equipment requiring
              custom logistics, our team will provide shipping options and
              estimated delivery timelines.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
