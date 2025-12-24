import React from "react";

export default function AIVisionPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold text-[#0A1A33] mb-10">
          AI Vision
        </h1>

        <div className="bg-white border border-[#0A1A33]/10 rounded-3xl p-10 shadow-sm">
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              At Vyntra Care, we envision a world where medical supplies are
              never out of stock. Our AI Vision technology leverages advanced
              predictive modeling to anticipate demand before it happens,
              ensuring healthcare facilities are always prepared.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Predictive Analytics
            </h2>
            <p>
              Using historical order data, seasonal trends, and real-time usage
              patterns, our AI algorithms forecast inventory needs with high
              accuracy. Facilities receive actionable insights to prevent
              shortages or overstocking.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              AI-Driven Optimization
            </h2>
            <p>
              AI Vision not only predicts demand but also recommends optimal
              procurement schedules, automatically adjusting orders based on
              changing conditions. This reduces waste and operational costs
              while improving patient care reliability.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Integration with Supply Chain
            </h2>
            <p>
              Our AI system seamlessly integrates with suppliers, logistics
              partners, and internal inventory systems. Automated alerts and
              replenishment notifications ensure your facility always has the
              right supplies at the right time.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Data Privacy & Security
            </h2>
            <p>
              AI Vision operates with strict adherence to data security and
              HIPAA compliance. All analytics are performed in a secure
              environment, and no sensitive patient data is exposed during AI
              forecasting.
            </p>

            <h2 className="text-[#0A1A33] font-bold border-l-4 border-primary pl-4 mt-8 mb-4">
              Future of Healthcare
            </h2>
            <p>
              Vyntra Care’s AI Vision represents a step toward fully
              intelligent, self-optimizing supply chains. Our goal is to empower
              healthcare providers to focus on patient care while the system
              intelligently manages inventory and supply forecasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
