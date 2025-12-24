// import Link from "next/link";
// import Button from "@/components/ui/button";
// import {
//   ShieldCheck,
//   Star,
//   ChevronRight,
//   Building2,
//   ShoppingBag,
//   ScanFace,
//   HeartPulse,
//   Stethoscope,
// } from "lucide-react";
// import Card from "@/components/ui/card";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-[#0A1A33] selection:bg-primary/20">
//       {/* Hero Section */}
//       <main className="max-w-7xl mx-auto  px-6 py-20 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-[#0A1A33]/10 text-[#0A1A33] px-4 py-2 rounded-full border border-[#0A1A33]/20 cursor-pointer">
//               <ShieldCheck className="w-5 h-5" />
//               <span className="text-xs font-bold uppercase tracking-widest">
//                 Medical-Grade Confidence
//               </span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
//               Advanced Care. <br />
//               <span className="text-[#0A1A33] italic">Precision</span> Delivery.
//             </h1>

//             <p className="text-lg text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
//               Vyntra Care is the next-generation healthcare supply ecosystem.
//               From subacute management to AI-driven personal respiratory care,
//               we make medical logistics effortless, reliable, and fast.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
//               <Link href="/shop" className="cursor-pointer">
//                 <Button
//                   label="Start Shopping"
//                   className="px-10 py-4 text-lg cursor-pointer"
//                   icon={<ChevronRight className="w-5 h-5" />}
//                 />
//               </Link>
//               <Link href="/about" className="cursor-pointer">
//                 <Button
//                   label="Our AI Vision"
//                   variant="outline"
//                   className="px-10 py-4 text-lg border-[#0A1A33]  text-[#0A1A33] hover:bg-[#0A1A33] hover:text-slate-900 cursor-pointer"
//                 />
//               </Link>
//             </div>

//             {/* Social Proof */}
//             <div className="flex flex-wrap items-center gap-8 pt-8 justify-center lg:justify-start opacity-70">
//               <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1A33] cursor-pointer">
//                 <HeartPulse className="w-6 h-6 text-[#0A1A33]" /> PULSE HEALTH
//               </div>
//               <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1A33] cursor-pointer">
//                 <Stethoscope className="w-6 h-6 text-[#0A1A33]" /> MED-ELITE
//               </div>
//               <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1A33] underline underline-offset-4 decoration-[#0A1A33] cursor-pointer">
//                 OXIGEN+
//               </div>
//             </div>
//           </div>

//           {/* Right Hero Image / Feature */}
//           <div className="relative">
//             <div className="w-full aspect-square bg-gradient-to-tr from-[#0A1A33]/10 via-[#1E3A8A]/10 to-[#38BDF8]/10 rounded-[4rem] flex items-center justify-center p-12 relative overflow-hidden ring-1 ring-[#0A1A33]/20">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--medical-blue)_0%,_transparent_70%)] opacity-5" />
//               <div className="w-full h-full bg-white/40 rounded-[3rem] backdrop-blur-xl border border-white/50 flex flex-col items-center justify-center p-10 text-center space-y-6">
//                 <div className="w-20 h-20 bg-[#0A1A33] rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-[#0A1A33]/40 mb-2">
//                   <ScanFace className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#0A1A33]">
//                   AI Mask Sizing
//                 </h3>
//                 <p className="text-sm text-slate-700">
//                   Stop guessing. Scan your face and get the perfect CPAP mask
//                   size in seconds.
//                 </p>
//                 <Link href="/shop/sizing" className="w-full cursor-pointer">
//                   <Button
//                     label="Try AI Sizer"
//                     variant="outline"
//                     className="w-full border-[#0A1A33] text-[#0A1A33] hover:bg-slate-800 cursor-pointer hover:text-white"
//                     icon={<ChevronRight className="w-4 h-4" />}
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* Floating Testimonial */}
//             <div className="absolute -bottom-6 -left-6 apple-card p-6 bg-white/90 backdrop-blur max-w-[220px] border border-[#0A1A33]/20 shadow-2xl rounded-xl cursor-pointer">
//               <div className="flex items-center gap-1 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-3.5 h-3.5 fill-[#0A1A33] text-[#0A1A33]"
//                   />
//                 ))}
//               </div>
//               <p className="text-xs font-bold text-[#0A1A33] leading-tight">
//                 "The most intuitive healthcare platform I've ever used."
//               </p>
//               <p className="text-[10px] text-slate-600 mt-2 uppercase font-bold tracking-widest">
//                 — Dr. Aris Thorne
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Features Section */}
//       <section className="py-24 bg-[#0A1A33]">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-white mb-12 text-center">
//             Why Choose Vyntra Care?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="p-8 text-center cursor-pointer hover:shadow-xl transition-all duration-300">
//               <ShieldCheck className="w-10 h-10 mx-auto text-[#0A1A33]" />
//               <h3 className="text-xl font-bold mt-4">Trusted Quality</h3>
//               <p className="mt-2 text-slate-700">
//                 Certified clinical-grade supplies from verified suppliers,
//                 ensuring safety and reliability.
//               </p>
//             </Card>

//             <Card className="p-8 text-center cursor-pointer hover:shadow-xl transition-all duration-300">
//               <Building2 className="w-10 h-10 mx-auto text-[#0A1A33]" />
//               <h3 className="text-xl font-bold mt-4">Streamlined Management</h3>
//               <p className="mt-2 text-slate-700">
//                 Facilities can automate inventory, track trends, and reduce
//                 errors effortlessly.
//               </p>
//             </Card>

//             <Card className="p-8 text-center cursor-pointer hover:shadow-xl transition-all duration-300">
//               <ShoppingBag className="w-10 h-10 mx-auto text-[#0A1A33]" />
//               <h3 className="text-xl font-bold mt-4">Patient Convenience</h3>
//               <p className="mt-2 text-slate-700">
//                 AI-guided shopping experience for respiratory supplies with
//                 simple checkout and expert support.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Module Navigation */}
//       <section className="bg-[#E5E7EB]/30 py-24 border-y border-[#0A1A33]/20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {/* Facilities */}
//             <Link href="/facility/dashboard" className="group cursor-pointer">
//               <Card className="p-10 h-full border-2 border-transparent group-hover:border-[#0A1A33]/20 hover:bg-white transition-all duration-500 overflow-hidden relative rounded-2xl">
//                 <div className="flex flex-col h-full gap-6">
//                   <div className="w-14 h-14 bg-[#1E3A8A]/20 rounded-2xl flex items-center justify-center text-[#0A1A33] group-hover:bg-[#0A1A33] group-hover:text-white transition-all duration-500">
//                     <Building2 className="w-7 h-7" />
//                   </div>
//                   <div className="space-y-3">
//                     <h2 className="text-3xl font-bold tracking-tight text-[#0A1A33]">
//                       For Facilities
//                     </h2>
//                     <p className="text-lg text-slate-700 leading-relaxed">
//                       Streamline your supply chain with our subacute management
//                       portal. Automate inventory, track trends, and reduce
//                       errors.
//                     </p>
//                   </div>
//                   <div className="mt-auto pt-4 flex items-center gap-2 text-[#0A1A33] font-bold group-hover:text-slate-500">
//                     Access Facility Portal{" "}
//                     <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </Card>
//             </Link>

//             {/* Patients */}
//             <Link href="/shop" className="group cursor-pointer">
//               <Card className="p-10 h-full border-2 border-transparent group-hover:border-[#38BDF8]/20 hover:bg-white transition-all duration-500 overflow-hidden relative rounded-2xl">
//                 <div className="flex flex-col h-full gap-6">
//                   <div className="w-14 h-14 bg-[#1E3A8A]/20 rounded-2xl flex items-center justify-center text-[#0A1A33] group-hover:bg-[#0b2947] group-hover:text-white transition-all duration-500">
//                     <ShoppingBag className="w-7 h-7" />
//                   </div>
//                   <div className="space-y-3">
//                     <h2 className="text-3xl font-bold tracking-tight text-[#0A1A33]">
//                       For Patients
//                     </h2>
//                     <p className="text-lg text-slate-700 leading-relaxed">
//                       Shop premium respiratory supplies with AI guidance. Simple
//                       checkout, medical trust, and expert support.
//                     </p>
//                   </div>
//                   <div className="mt-auto pt-4 flex items-center gap-2 text-[#0b2947] font-bold group-hover:text-slate-500">
//                     Shop CPAP & Oxygen{" "}
//                     <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#0A1A33] text-white text-center">
//         <h2 className="text-4xl font-bold mb-4">
//           Ready to Experience Smarter Healthcare?
//         </h2>
//         <p className="text-lg mb-8 max-w-xl mx-auto">
//           Join Vyntra Care today and streamline medical supply procurement for
//           your facility or personal needs.
//         </p>
//         <Link href="/auth/signup" className="cursor-pointer">
//           <Button
//             label="Get Started"
//             className="px-12 py-4 text-lg cursor-pointer bg-[#38BDF8] text-[#0A1A33] hover:bg-[#22A3E0]"
//           />
//         </Link>
//       </section>

//       {/* Light Section - Testimonials / Partners */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-[#0A1A33] mb-12">
//             What Our Users Say
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Testimonial 1 */}
//             <Card className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-center mb-4">
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//               </div>
//               <p className="text-slate-700 mb-2">
//                 "Vyntra Care transformed how we manage inventory. Accurate,
//                 fast, and reliable."
//               </p>
//               <p className="font-bold text-[#0A1A33]">
//                 — Emily R., Facility Manager
//               </p>
//             </Card>

//             {/* Testimonial 2 */}
//             <Card className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-center mb-4">
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//               </div>
//               <p className="text-slate-700 mb-2">
//                 "The AI mask sizing is incredible. Finally, a hassle-free
//                 experience!"
//               </p>
//               <p className="font-bold text-[#0A1A33]">— Daniel K., Patient</p>
//             </Card>

//             {/* Testimonial 3 */}
//             <Card className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-center mb-4">
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//                 <Star className="w-6 h-6 text-[#0A1A33]" />
//               </div>
//               <p className="text-slate-700 mb-2">
//                 "A seamless platform for patients and providers alike. Highly
//                 recommend."
//               </p>
//               <p className="font-bold text-[#0A1A33]">
//                 — Sarah M., Healthcare Consultant
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import {
  ShieldCheck,
  Star,
  ChevronRight,
  Building2,
  ShoppingBag,
  ScanFace,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import Card from "@/components/ui/card";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // animate only once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-[#0A1A33] selection:bg-primary/20">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 text-center lg:text-left"
            data-aos="fade-right"
          >
            <div className="inline-flex items-center gap-2 bg-[#0A1A33]/10 text-[#0A1A33] px-4 py-2 rounded-full border border-[#0A1A33]/20 cursor-pointer">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Medical-Grade Confidence
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Advanced Care. <br />
              <span className="text-[#0A1A33] italic">Precision</span> Delivery.
            </h1>

            <p className="text-lg text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Vyntra Care is the next-generation healthcare supply ecosystem.
              From subacute management to AI-driven personal respiratory care,
              we make medical logistics effortless, reliable, and fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link href="/shop" className="cursor-pointer">
                <Button
                  label="Start Shopping"
                  className="px-10 py-4 text-lg cursor-pointer"
                  icon={<ChevronRight className="w-5 h-5" />}
                />
              </Link>
              <Link href="/about" className="cursor-pointer">
                <Button
                  label="Our AI Vision"
                  variant="outline"
                  className="px-10 py-4 text-lg border-[#0A1A33] text-[#0A1A33] hover:bg-[#0A1A33] hover:text-slate-900 cursor-pointer"
                />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-8 pt-8 justify-center lg:justify-start opacity-70">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1A33] cursor-pointer">
                <HeartPulse className="w-6 h-6 text-[#0A1A33]" /> PULSE HEALTH
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1A33] cursor-pointer">
                <Stethoscope className="w-6 h-6 text-[#0A1A33]" /> MED-ELITE
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A1A33] underline underline-offset-4 decoration-[#0A1A33] cursor-pointer">
                OXIGEN+
              </div>
            </div>
          </div>

          {/* Right Hero Image / Feature */}
          <div className="relative" data-aos="fade-left">
            <div className="w-full aspect-square bg-gradient-to-tr from-[#0A1A33]/10 via-[#1E3A8A]/10 to-[#38BDF8]/10 rounded-[4rem] flex items-center justify-center p-12 relative overflow-hidden ring-1 ring-[#0A1A33]/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--medical-blue)_0%,_transparent_70%)] opacity-5" />
              <div className="w-full h-full bg-white/40 rounded-[3rem] backdrop-blur-xl border border-white/50 flex flex-col items-center justify-center p-10 text-center space-y-6">
                <div className="w-20 h-20 bg-[#0A1A33] rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-[#0A1A33]/40 mb-2">
                  <ScanFace className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1A33]">
                  AI Mask Sizing
                </h3>
                <p className="text-sm text-slate-700">
                  Stop guessing. Scan your face and get the perfect CPAP mask
                  size in seconds.
                </p>
                <Link href="/shop/sizing" className="w-full cursor-pointer">
                  <Button
                    label="Try AI Sizer"
                    variant="outline"
                    className="w-full border-[#0A1A33] text-[#0A1A33] hover:bg-slate-800 cursor-pointer hover:text-white"
                    icon={<ChevronRight className="w-4 h-4" />}
                  />
                </Link>
              </div>
            </div>

            {/* Floating Testimonial */}
            <div
              className="absolute -bottom-6 -left-6 apple-card p-6 bg-white/90 backdrop-blur max-w-[220px] border border-[#0A1A33]/20 shadow-2xl rounded-xl cursor-pointer"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#0A1A33] text-[#0A1A33]"
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-[#0A1A33] leading-tight">
                "The most intuitive healthcare platform I've ever used."
              </p>
              <p className="text-[10px] text-slate-600 mt-2 uppercase font-bold tracking-widest">
                — Dr. Aris Thorne
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-[#0A1A33]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-white mb-12 text-center"
            data-aos="fade-up"
          >
            Why Choose Vyntra Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="p-8 text-center cursor-pointer hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <ShieldCheck className="w-10 h-10 mx-auto text-[#0A1A33]" />
              <h3 className="text-xl font-bold mt-4">Trusted Quality</h3>
              <p className="mt-2 text-slate-700">
                Certified clinical-grade supplies from verified suppliers,
                ensuring safety and reliability.
              </p>
            </Card>

            <Card
              className="p-8 text-center cursor-pointer hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Building2 className="w-10 h-10 mx-auto text-[#0A1A33]" />
              <h3 className="text-xl font-bold mt-4">Streamlined Management</h3>
              <p className="mt-2 text-slate-700">
                Facilities can automate inventory, track trends, and reduce
                errors effortlessly.
              </p>
            </Card>

            <Card
              className="p-8 text-center cursor-pointer hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ShoppingBag className="w-10 h-10 mx-auto text-[#0A1A33]" />
              <h3 className="text-xl font-bold mt-4">Patient Convenience</h3>
              <p className="mt-2 text-slate-700">
                AI-guided shopping experience for respiratory supplies with
                simple checkout and expert support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Module Navigation */}
      <section className="bg-[#E5E7EB]/30 py-24 border-y border-[#0A1A33]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link
              href="/facility/dashboard"
              className="group cursor-pointer"
              data-aos="fade-right"
            >
              <Card className="p-10 h-full border-2 border-transparent group-hover:border-[#0A1A33]/20 hover:bg-white transition-all duration-500 overflow-hidden relative rounded-2xl">
                <div className="flex flex-col h-full gap-6">
                  <div className="w-14 h-14 bg-[#1E3A8A]/20 rounded-2xl flex items-center justify-center text-[#0A1A33] group-hover:bg-[#0A1A33] group-hover:text-white transition-all duration-500">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0A1A33]">
                      For Facilities
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Streamline your supply chain with our subacute management
                      portal. Automate inventory, track trends, and reduce
                      errors.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[#0A1A33] font-bold group-hover:text-slate-500">
                    Access Facility Portal{" "}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link
              href="/shop"
              className="group cursor-pointer"
              data-aos="fade-left"
            >
              <Card className="p-10 h-full border-2 border-transparent group-hover:border-[#38BDF8]/20 hover:bg-white transition-all duration-500 overflow-hidden relative rounded-2xl">
                <div className="flex flex-col h-full gap-6">
                  <div className="w-14 h-14 bg-[#1E3A8A]/20 rounded-2xl flex items-center justify-center text-[#0A1A33] group-hover:bg-[#0b2947] group-hover:text-white transition-all duration-500">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight text-[#0A1A33]">
                      For Patients
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Shop premium respiratory supplies with AI guidance. Simple
                      checkout, medical trust, and expert support.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[#0b2947] font-bold group-hover:text-slate-500">
                    Shop CPAP & Oxygen{" "}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-[#0A1A33] text-white text-center"
        data-aos="fade-right"
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Experience Smarter Healthcare?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Join Vyntra Care today and streamline medical supply procurement for
          your facility or personal needs.
        </p>
        <Link href="/auth/signup" className="cursor-pointer">
          <Button
            label="Get Started"
            className="px-12 py-4 text-lg cursor-pointer bg-[#38BDF8] text-[#0A1A33] hover:bg-[#22A3E0]"
          />
        </Link>
      </section>

      {/* Light Section - Testimonials / Partners */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-[#0A1A33] mb-12"
            data-aos="fade-up"
          >
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#0A1A33]" />
                ))}
              </div>
              <p className="text-slate-700 mb-2">
                "Vyntra Care transformed how we manage inventory. Accurate,
                fast, and reliable."
              </p>
              <p className="font-bold text-[#0A1A33]">
                — Emily R., Facility Manager
              </p>
            </Card>

            <Card
              className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#0A1A33]" />
                ))}
              </div>
              <p className="text-slate-700 mb-2">
                "The AI mask sizing is incredible. Finally, a hassle-free
                experience!"
              </p>
              <p className="font-bold text-[#0A1A33]">— Daniel K., Patient</p>
            </Card>

            <Card
              className="p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#0A1A33]" />
                ))}
              </div>
              <p className="text-slate-700 mb-2">
                "A seamless platform for patients and providers alike. Highly
                recommend."
              </p>
              <p className="font-bold text-[#0A1A33]">
                — Sarah M., Healthcare Consultant
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
