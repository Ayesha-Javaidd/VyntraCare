'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image_url?: string;
    category_type: string; // From the DB 'category' column (facility, ecommerce, both)
}

const CATEGORIES = [
    'All Supplies',
    'Masks & Respirators',
    'Gloves',
    'Oxygen Care',
    'Patient Mobility'
];

export default function PublicShop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All Supplies');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                let query = supabase
                    .from('products')
                    .select('*')
                    .or('category.eq.ecommerce,category.eq.both')
                    .order('name');

                const { data, error } = await query;

                if (error) throw error;

                let filtered = data || [];
                if (selectedCategory !== 'All Supplies') {
                    filtered = filtered.filter(p =>
                        p.name.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]) ||
                        (p as any).product_type?.includes(selectedCategory)
                    );
                }

                setProducts(filtered);
            } catch (err: any) {
                console.error('Error fetching shop products:', err);
                setError('Unable to load products. Our clinical team is investigating.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-slate-50 py-16 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Vyntra Care Shop</h1>
                    <p className="text-slate-500 text-xl max-w-2xl">
                        Premium medical supplies, clinical grade testing, and respiratory care equipment delivered directly to your institution or home.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 space-y-10">
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Categories</h3>
                            <div className="space-y-1.5">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`group w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-bold transition-all ${selectedCategory === cat
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 scale-[1.02]'
                                            : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'
                                            }`}
                                    >
                                        <span>{cat}</span>
                                        {selectedCategory === cat && (
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-3">Clinical Advantage</h4>
                                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                                    Trusted by 500+ nursing facilities nationwide for mission-critical supplies.
                                </p>
                                <button className="text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:text-blue-300 transition-colors">Learn More →</button>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {error ? (
                            <div className="py-32 text-center bg-red-50 rounded-[3rem] border border-red-100">
                                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{error}</h3>
                                <button onClick={() => window.location.reload()} className="text-blue-600 font-bold hover:underline">Try Refreshing</button>
                            </div>
                        ) : isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="space-y-6 animate-pulse">
                                        <div className="aspect-[4/5] bg-slate-100 rounded-[3rem]"></div>
                                        <div className="space-y-2 px-4">
                                            <div className="h-4 bg-slate-100 rounded w-2/3"></div>
                                            <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : products.length === 0 ? (
                            <div className="py-40 text-center bg-slate-50/50 rounded-[3rem] border border-dashed border-slate-200">
                                <div className="w-20 h-20 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">No items in this category</h3>
                                <p className="text-slate-500 max-w-sm mx-auto">We're constantly restocking our inventory. Check back soon for new arrivals.</p>
                                <button onClick={() => setSelectedCategory('All Supplies')} className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all">Show All Items</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                {products.map((product) => (
                                    <div key={product.id} className="group cursor-pointer flex flex-col h-full">
                                        <div className="relative aspect-[4/5] mb-8 bg-slate-50 rounded-[3rem] flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-xl group-hover:shadow-blue-900/5 transition-all duration-700">
                                            {product.image_url ? (
                                                <img
                                                    src={product.image_url}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center gap-4 text-slate-200">
                                                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                    </svg>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Vyntra Verified</span>
                                                </div>
                                            )}
                                            <div className="absolute top-6 right-6 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                                                <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl hover:bg-blue-600 hover:text-white transition-all">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-2 flex-grow flex flex-col">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest px-2 py-1 bg-blue-50 rounded-lg">Hospital Grade</span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.category_type}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors group-hover:text-blue-600 leading-tight">{product.name}</h3>
                                            <div className="mt-auto flex items-end justify-between border-t border-slate-50 pt-6">
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Price</p>
                                                    <span className="text-3xl font-black text-slate-900 tracking-tighter">${(product.price || 0).toFixed(2)}</span>
                                                </div>
                                                <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all transform active:scale-95 shadow-lg shadow-slate-100">
                                                    Add to Bag
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
