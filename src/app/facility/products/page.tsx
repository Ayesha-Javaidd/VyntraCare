'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';
import { useUser } from '@/hooks/use-user';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock_quantity: number;
  image_url?: string;
}

export default function FacilityProducts() {
  const { profile } = useUser();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('name');

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching facility products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Supply Catalog</h1>
          <p className="text-slate-500 mt-1">Order essentials for {profile?.facility_name || 'Your Facility'}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search catalog..."
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl relative">
            <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-[2rem] border border-slate-100 p-6 space-y-4 animate-pulse">
              <div className="w-full aspect-square bg-slate-50 rounded-2xl"></div>
              <div className="h-4 bg-slate-50 rounded w-2/3"></div>
              <div className="h-4 bg-slate-50 rounded w-1/2"></div>
            </div>
          ))
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full py-24 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No products available</h3>
            <p className="text-slate-500">Products will appear here once they are added to the catalog.</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all group overflow-hidden">
              <div className="relative aspect-square mb-6 bg-slate-50 rounded-[1.5rem] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-16 h-16 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors"></div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${(product.stock_quantity || 0) < 50 ? 'text-amber-500' : 'text-green-500'}`}>
                    {(product.stock_quantity || 0) < 50 ? 'Low Stock' : 'In Stock'}
                  </span>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-slate-50">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Standard Item</span>
                    <span className="text-xl font-extrabold text-slate-900">${(product.price || 0).toFixed(2)}</span>
                  </div>
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-100 group-hover:scale-110 active:scale-95">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h3 className="text-2xl font-bold mb-4">Bulk Procurement Advantage</h3>
          <p className="text-blue-100 text-sm leading-relaxed mb-8 opacity-80">
            Automated tiering is active for your facility. Order in case lots to unlock a further 12.5% discount on all respiratory products.
          </p>
          <button className="bg-white text-blue-900 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all">
            View Price Tiers
          </button>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </div>
    </div>
  );
}
