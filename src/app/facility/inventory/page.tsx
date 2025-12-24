'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';
import { useUser } from '@/hooks/use-user';

export default function InventoryScan() {
  const { profile } = useUser();
  const [step, setStep] = useState<'scan' | 'input' | 'success'>('scan');
  const [products, setProducts] = useState<any[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      const { data } = await supabase.from('products').select('*').limit(5);
      setProducts(data || []);
      const initialCounts = (data || []).reduce((acc: any, p: any) => ({ ...acc, [p.sku]: 0 }), {});
      setCounts(initialCounts);
    };
    fetchProducts();
  }, []);

  const handleScanComplete = () => {
    setStep('input');
  };

  const handleInputChange = (sku: string, value: string) => {
    setCounts(prev => ({ ...prev, [sku]: parseInt(value) || 0 }));
  };

  const handleSubmitSnapshot = async () => {
    if (!profile?.facility_id) return;
    setIsSubmitting(true);

    try {
      const totalItems = Object.values(counts).reduce((acc, curr) => acc + curr, 0);
      
      const { error } = await supabase
        .from('inventory_snapshots')
        .insert({
          facility_id: profile.facility_id,
          recorded_by: profile.id,
          product_amounts: counts,
          total_items: totalItems,
        });

      if (error) throw error;
      setStep('success');
    } catch (err: any) {
      console.error('Error saving snapshot:', err.message);
      alert('Failed to save inventory snapshot. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'scan') {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">QR Inventory Sync</h1>
          <p className="text-slate-500 mt-2">Scan the supply room QR code to begin session</p>
        </div>
        
        <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center justify-center space-y-8">
          <div className="w-64 h-64 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden group cursor-pointer" onClick={handleScanComplete}>
            <div className="w-48 h-48 border-4 border-blue-600 rounded-2xl relative z-10 flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-600 animate-ping rounded-full opacity-20"></div>
              <svg className="w-24 h-24 text-blue-600 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-4 text-[10px] font-bold text-blue-600 uppercase tracking-widest">Awaiting Scan...</div>
          </div>
          <p className="text-sm font-medium text-slate-400">Position QR code within the frame to start</p>
        </div>
      </div>
    );
  }

  if (step === 'input') {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Supply Count</h1>
            <p className="text-slate-500">Facility ID: {profile?.facility_id?.substring(0, 8) || '...'}...</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-widest" onClick={() => setStep('scan')}>
            Cancel Session
          </button>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50">
            <h3 className="text-lg font-bold text-slate-900">Room A-102 Stock</h3>
            <p className="text-sm text-slate-400 mt-1">Verified scan at {new Date().toLocaleTimeString()}</p>
          </div>
          
          <div className="divide-y divide-slate-50">
            {products.map((product) => (
              <div key={product.id} className="p-8 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{product.name}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">SKU: {product.sku}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input 
                    type="number"
                    value={counts[product.sku] || 0}
                    onChange={(e) => handleInputChange(product.sku, e.target.value)}
                    className="w-24 px-4 py-3 bg-slate-50 border-none rounded-xl text-center font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                  <span className="text-xs font-bold text-slate-400 uppercase">Units</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-slate-50/50 flex justify-end">
            <button 
              onClick={handleSubmitSnapshot}
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 rounded-2xl transition-all shadow-xl shadow-blue-100 flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? 'Syncing...' : 'Complete Snapshot'}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 py-12">
      <div className="w-24 h-24 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-lg shadow-green-100 animate-bounce">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Sync Successful</h1>
        <p className="text-slate-500 mt-4 text-lg">Inventory snapshot has been recorded. Usage velocity recalculated.</p>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-left">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Snapshot Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-slate-50">
            <span className="text-slate-600 font-medium">Items Counted</span>
            <span className="text-slate-900 font-bold">{Object.keys(counts).length} Categories</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-50">
            <span className="text-slate-600 font-medium">Total Quantity</span>
            <span className="text-slate-900 font-bold">{Object.values(counts).reduce((a, b) => a + b, 0)} Units</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-600 font-medium">Sync Status</span>
            <span className="text-green-600 font-bold flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live on Chain
            </span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.location.href='/facility/dashboard'}
        className="text-blue-600 font-bold text-sm uppercase tracking-widest hover:underline pt-4"
      >
        Return to Facility Health Dashboard
      </button>
    </div>
  );
}