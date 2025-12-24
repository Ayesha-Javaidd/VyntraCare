'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/services/supabase-client';

export default function CheckoutFlow() {
    const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
    const [cart, setCart] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderId, setOrderId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    useEffect(() => {
        const fetchCart = async () => {
            const { data } = await supabase.from('products').select('*').limit(2);
            setCart(data?.map(p => ({ ...p, quantity: 1 })) || []);
        };
        fetchCart();
    }, []);

    const total = cart.reduce((acc, curr) => acc + (curr.base_price * curr.quantity), 0);

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { data: order, error: orderError } = await supabase
                .from('orders')
                .insert({
                    total_amount: total,
                    status: 'pending',
                    payment_status: 'paid',
                })
                .select()
                .single();

            if (orderError) throw orderError;

            const orderItems = cart.map(item => ({
                order_id: order.id,
                product_id: item.id,
                quantity: item.quantity,
                unit_price: item.base_price,
            }));

            const { error: itemsError } = await supabase
                .from('order_items')
                .insert(orderItems);

            if (itemsError) throw itemsError;

            setOrderId(order.id);
            setStep('confirmation');
        } catch (err: any) {
            console.error('Checkout error:', err.message);
            alert('Failed to place order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (step === 'confirmation') {
        return (
            <div className="max-w-2xl mx-auto py-20 text-center space-y-8">
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-[2.5rem] flex items-center justify-center mx-auto animate-in zoom-in duration-500">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Order Confirmed</h1>
                    <p className="text-slate-500 mt-4 text-lg">Your medical supplies are being prepared for dispatch.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] text-left border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Order Reference</span>
                        <span className="font-mono font-bold text-slate-900">#{orderId?.substring(0, 8).toUpperCase()}</span>
                    </div>
                    <div className="space-y-4 pt-6 border-t border-slate-200">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">{item.name} x1</span>
                                <span className="text-slate-900 font-bold">${(item.base_price || 0).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between items-center pt-4 mt-2 border-t border-slate-900">
                            <span className="text-slate-900 font-black uppercase tracking-tighter">Total Paid</span>
                            <span className="text-2xl font-black text-slate-900">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                        Track Order Status
                    </button>
                    <button onClick={() => window.location.href = '/shop'} className="bg-white border border-slate-200 text-slate-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-12">
                    <div className="flex items-center gap-4">
                        <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step === 'shipping' ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'
                            }`}>
                            {step === 'shipping' ? '1' : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900">Shipping Information</h2>
                    </div>

                    {step === 'shipping' && (
                        <div className="grid grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="col-span-2 space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                                <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Delivery Address</label>
                                <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="123 Healthcare Way" />
                            </div>
                            <button onClick={() => setStep('payment')} className="col-span-2 bg-blue-600 text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 mt-4">
                                Proceed to Payment
                            </button>
                        </div>
                    )}

                    {step === 'payment' && (
                        <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 italic">Secure Encrypted</span>
                                </div>
                                <div className="space-y-4">
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Card Number" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="MM/YY" />
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="CVC" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handlePlaceOrder} disabled={isSubmitting} className="w-full bg-green-600 text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-100 disabled:opacity-50">
                                {isSubmitting ? 'Processing...' : `Pay $${total.toFixed(2)} & Complete Order`}
                            </button>
                        </div>
                    )}
                </div>

                <div className="bg-white border border-slate-100 p-8 rounded-[3rem] shadow-sm h-fit space-y-8">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Bag Summary</h3>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                                    <p className="text-xs text-slate-400 mt-1">Qty: 1</p>
                                </div>
                                <span className="text-sm font-bold text-slate-900">${(item.base_price || 0).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-slate-50 space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Subtotal</span>
                            <span className="text-slate-900 font-bold">${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Shipping</span>
                            <span className="text-green-600 font-bold">Complimentary</span>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-slate-900">
                            <span className="text-lg font-black text-slate-900">Total</span>
                            <span className="text-3xl font-black text-slate-900">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
