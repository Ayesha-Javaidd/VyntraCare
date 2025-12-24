'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';

interface Facility {
  id: string;
  name: string;
  location: string;
  status: string;
  monthly_usage: number;
}

export default function FacilitiesOverview() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const { data, error } = await supabase
        .from('facilities')
        .select('*')
        .order('name');
      
      if (error) throw error;
      setFacilities(data || []);
    } catch (err: any) {
      console.error('Error fetching facilities:', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const groupedFacilities = facilities.reduce((acc: Record<string, Facility[]>, fac) => {
    const loc = fac.location || 'Unassigned';
    if (!acc[loc]) acc[loc] = [];
    acc[loc].push(fac);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Facilities Network</h1>
          <p className="text-slate-500">Managing {facilities.length} active healthcare partners</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-all">
            Export Network PDF
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-100">
            Registration Requests
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Active Sites', value: facilities.length, sub: 'In 12 States', color: 'blue' },
          { label: 'Total Patients', value: '4.2k', sub: 'Projected Reach', color: 'teal' },
          { label: 'Avg Stock Health', value: '92%', sub: 'Global Average', color: 'green' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <span className="text-sm font-medium text-slate-500">{stat.label}</span>
            <div className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</div>
            <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">{stat.sub}</div>
          </div>
        ))}
      </div>

      {isLoading ? (
        <div className="bg-white p-12 rounded-[2rem] text-center text-slate-400 border border-slate-100">
          Syncing with healthcare network...
        </div>
      ) : Object.keys(groupedFacilities).length === 0 ? (
        <div className="bg-white p-12 rounded-[2rem] text-center text-slate-400 border border-slate-100">
          No facilities found.
        </div>
      ) : (
        Object.keys(groupedFacilities).map((location) => (
          <div key={location} className="space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] ml-2">{location}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {groupedFacilities[location].map((fac: Facility) => (
                <div key={fac.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        {fac.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{fac.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-xs text-slate-500 font-medium">Standard Price Tier</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-slate-50">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Stock Health</span>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Monthly Usage</span>
                      <div className="text-sm font-bold text-slate-900">${(fac.monthly_usage || 0).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}