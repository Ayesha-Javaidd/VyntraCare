import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="bg-[#eef2fa] min-h-screen flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Vertical Cards */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-bold text-[#0B1E4A]">
            Contact Information
          </h2>

          <div className="flex flex-col space-y-6">
            {/* Phone */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center text-[#0B1E4A] border border-[#0B1E4A]/20 rounded-full text-2xl">
                <FiPhone />
              </div>
              <h3 className="font-semibold text-[#0B1E4A]">+82 543 6544</h3>
              <p className="text-sm text-[#475569]">
                Reach out to us anytime, we are happy to assist.
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center text-[#0B1E4A] border border-[#0B1E4A]/20 rounded-full text-2xl">
                <FiMail />
              </div>
              <h3 className="font-semibold text-[#0B1E4A]">mail@grance.co</h3>
              <p className="text-sm text-[#475569]">
                Send us an email and we’ll respond promptly.
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center text-[#0B1E4A] border border-[#0B1E4A]/20 rounded-full text-2xl">
                <FiMapPin />
              </div>
              <h3 className="font-semibold text-[#0B1E4A]">London Eye, UK</h3>
              <p className="text-sm text-[#475569]">
                Visit us at our central London office.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Light Gray Contact Form */}
        <div className="flex flex-col justify-center bg-[#b6c1d2] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-4 text-[#0B1E4A]">
            Get In Touch
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 text-[#0B1E4A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 text-[#0B1E4A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 text-[#0B1E4A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 text-[#0B1E4A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] h-32 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#162968] text-white font-bold hover:bg-[#2b4ba2] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
