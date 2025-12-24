// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { useUser } from '@/hooks/use-user';

// export default function Navbar() {
//     const { profile, signOut } = useUser();

//     return (
//         <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
//             <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//                 <Link href="/" className="flex items-center gap-2 group">
//                     <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">V</div>
//                     <span className="text-xl font-bold text-slate-900 tracking-tight">Vyntra Care</span>
//                 </Link>

//                 <div className="hidden md:flex items-center gap-8">
//                     <Link href="/shop" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Shop</Link>
//                     <Link href="/shop/sizing" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">AI Sizing</Link>
//                     <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</Link>
//                     <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     {profile ? (
//                         <div className="flex items-center gap-4">
//                             <Link
//                                 href={profile.role === 'admin' ? '/admin/dashboard' : '/facility/dashboard'}
//                                 className="text-sm font-bold text-blue-600"
//                             >
//                                 Dashboard
//                             </Link>
//                             <button
//                                 onClick={() => signOut()}
//                                 className="text-sm font-semibold text-slate-500 hover:text-red-500 transition-colors"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     ) : (
//                         <>
//                             <Link href="/auth/login" className="text-sm font-semibold text-slate-600 hover:text-blue-600">Login</Link>
//                             <Link href="/auth/signup" className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">Sign Up</Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }



'use client';

import React from 'react';
import Link from 'next/link';
import { useUser } from '@/hooks/use-user';

export default function Navbar() {
  const { profile, signOut } = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1A33]  backdrop-blur-md border-b border-[#0A1A33]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0A1A33] font-bold text-xl group-hover:scale-110 transition-transform">
            V
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Vyntra Care</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-semibold text-white hover:text-[#63B3ED] transition-colors">
            Shop
          </Link>
          <Link href="/shop/sizing" className="text-sm font-semibold text-white hover:text-[#63B3ED] transition-colors">
            AI Sizing
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white hover:text-[#63B3ED] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-white hover:text-[#63B3ED] transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth / Dashboard */}
        <div className="flex items-center gap-4">
          {profile ? (
            <div className="flex items-center gap-4">
              <Link
                href={profile.role === 'admin' ? '/admin/dashboard' : '/facility/dashboard'}
                className="text-sm font-bold text-[#63B3ED] hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="text-sm font-semibold text-white hover:text-red-400 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm font-semibold text-white hover:text-[#63B3ED] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white text-[#0A1A33] px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#E2E8F0] transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
