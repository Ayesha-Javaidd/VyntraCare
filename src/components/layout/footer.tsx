'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A1A33] text-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-white text-[#0A1A33] rounded-lg flex items-center justify-center font-bold text-lg">
                V
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                Vyntra Care
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              A next-generation healthcare supply ecosystem enabling hospitals,
              facilities, and providers with intelligent procurement, inventory,
              and AI-driven logistics.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="footer-link">
                  About Vyntra
                </Link>
              </li>
              <li>
                <Link href="/ai-vision" className="footer-link">
                  AI & Innovation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="footer-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="footer-link">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="footer-link">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="footer-link">
                  Compliance & Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Vyntra Care. All rights reserved.
          </p>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>HIPAA Compliant</span>
            <span>ISO 27001</span>
            <span>FDA Verified Partners</span>
          </div>
        </div>
      </div>

      {/* Footer link utility */}
      <style jsx global>{`
        .footer-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #cbd5e1;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #ffffff;
        }
      `}</style>
    </footer>
  );
}
