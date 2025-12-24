'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';
import { useUser } from '@/hooks/use-user';

export default function FacilityDashboard() {
  const { profile } = useUser();
  const [stats, setStats] = useState({
    stockLevel: 0,
    activeOrders: 0,
    weeklyUsage: 0,
    healthScore: 94,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profile?.facility_id) {
      fetchFacilityStats(profile.facility_id);
    } else if (profile) {
      setIsLoading(false);
    }
  }, [profile]);

  const fetchFacilityStats = async (facilityId: string) => {
    try {
      // Fetch Active Orders
      const { count: orderCount } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .eq('facility_id', facilityId)
        .in('status', ['pending', 'processing', 'shipped']);

      // Fetch Latest Inventory Snapshot for Stock Level
      const { data: latestSnapshot } = await supabase
        .from('inventory_snapshots')
        .select('total_items')
        .eq('facility_id', facilityId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      setStats(prev => ({
        ...prev,
        activeOrders: orderCount || 0,
        stockLevel: latestSnapshot?.total_items || 0,
      }));
    } catch (err: any) {
      console.error('Error fetching facility stats:', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Facility Health</h1>
          <p className="text-slate-500 mt-1">Real-time inventory and logistics for {profile?.facility_name || 'Your Facility'}</p>
        </div>
        <div className="hidden md:flex gap-2">
          {['24H', '7D', '30D', 'ALL'].map((range) => (
            <button key={range} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${range === '7D' ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'bg-white text-slate-400 hover:bg-slate-50'
              }`}>
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Stock Level', value: isLoading ? '...' : stats.stockLevel, sub: 'Items on-hand', color: 'blue' },
          { label: 'Active Orders', value: isLoading ? '...' : stats.activeOrders, sub: 'In-transit/Pending', color: 'teal' },
          { label: 'Avg Weekly Usage', value: isLoading ? '...' : '1.2k', sub: 'Calculated Units', color: 'amber' },
          { label: 'Health Score', value: `${stats.healthScore}%`, sub: 'Replenishment Efficiency', color: 'green' },
        ].map((stat, i) => (
          <div key={i} className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                {stat.value}
              </span>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  stat.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                    stat.color === 'green' ? 'bg-green-50 text-green-600' :
                      'bg-amber-50 text-amber-600'
                }`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-400 mt-4 tracking-tight uppercase">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">8-Week Rolling Usage</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Average</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between items-stretch gap-3">
            {[40, 55, 45, 70, 85, 60, 95, 80].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer relative">
                <div
                  className="w-full bg-blue-100 group-hover:bg-blue-600 transition-all rounded-t-xl"
                  style={{ height: `${v}%` }}
                ></div>
                <span className="text-[10px] font-bold text-slate-400 mt-3 text-center uppercase tracking-tighter">W{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Inventory Action</span>
              <h3 className="text-2xl font-bold mt-2">New QR Scan Required</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">System predicts "Nitrile Gloves" depletion in 48h. Verify current stock.</p>
              <button
                onClick={() => window.location.href = '/facility/inventory'}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group/btn"
              >
                Start Inventory Scan
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Urgent Alerts (2)</h4>
            <div className="space-y-4">
              {[
                { title: 'Inbound Shipment Delay', desc: 'Order #VY-8842 delayed by weather.', type: 'warn' },
                { title: 'Billing Update', desc: 'Invoice for Nov is ready for review.', type: 'info' }
              ].map((alert, i) => (
                <div key={i} className="flex gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${alert.type === 'warn' ? 'bg-amber-400' : 'bg-blue-400'}`}></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{alert.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{alert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}