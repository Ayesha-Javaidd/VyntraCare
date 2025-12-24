'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';
import { useUser } from '@/hooks/use-user';

interface Order {
  id: string;
  created_at: string;
  status: string;
  total_amount: number;
}

export default function FacilityOrders() {
  const { profile } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profile?.facility_id) {
      fetchOrders(profile.facility_id);
    } else if (profile) {
      setIsLoading(false);
    }
  }, [profile]);

  const fetchOrders = async (facilityId: string) => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('facility_id', facilityId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (err) {
      console.error('Error fetching facility orders:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Order Activity</h1>
          <p className="text-slate-500 mt-1">Track procurement status and historical invoices</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-all">
            Download Yearly Report
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Order Ref</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Timestamp</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Procurement Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Total Value</th>
                <th className="px-8 py-5 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-8 py-12 text-center text-slate-400">Syncing order history...</td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-12 text-center text-slate-400">No orders found.</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="font-bold text-slate-900 tracking-tight uppercase">{order.id.substring(0, 8)}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-500 font-medium">{new Date(order.created_at).toLocaleDateString()}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 text-[10px] font-bold rounded-full border uppercase tracking-widest ${
                        order.status === 'completed' ? 'bg-green-50 text-green-700 border-green-100' :
                        order.status === 'processing' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                        'bg-slate-50 text-slate-500 border-slate-100'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 font-bold text-slate-900">${(order.total_amount || 0).toFixed(2)}</td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-blue-600 font-bold text-xs uppercase tracking-widest hover:underline">
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Need Assistance?</h4>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-900 font-bold mb-1">Logistics Support</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">Chat with your assigned procurement officer for order modifications or rush requests.</p>
              <button className="text-blue-600 font-extrabold text-xs uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">Start Chat</button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group border-l-4 border-l-blue-600">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Auto-Replenish Active</h4>
          <p className="text-slate-900 font-bold mb-1">Next Delivery Projected</p>
          <p className="text-3xl font-extrabold text-blue-600">Dec 28, 2023</p>
          <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-tighter">Based on your usage velocity of 1.2k units/wk</p>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
        </div>
      </div>
    </div>
  );
}
