"use client"

import { useState } from "react"
import Link from "next/link"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import {
    Building2,
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    Info,
    ChevronRight,
    User,
    MapPin,
    Mail,
    Building
} from "lucide-react"

export default function FacilityRegisterPage() {
    const [step, setStep] = useState(1) // 1: Form, 2: Success
    const [formData, setFormData] = useState({
        name: "",
        manager: "",
        email: "",
        address: "",
        city: "",
        zip: ""
    })

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Header */}
            <header className="py-6 px-10 flex items-center justify-between border-b border-border bg-white sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">V</div>
                    <span className="text-lg font-bold tracking-tight">Vyntra Care</span>
                </Link>
                <Link href="/auth/login" className="text-sm font-bold text-primary hover:underline">Already registered? Log In</Link>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 bg-secondary/20">
                <div className="w-full max-w-2xl">
                    {step === 1 ? (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center space-y-2">
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight">Facility Registration</h1>
                                <p className="text-muted-foreground">Join the Vyntra Care ecosystem and automate your supply chain.</p>
                            </div>

                            <Card className="p-8 shadow-xl shadow-black/5 border-border/50">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="Facility Name"
                                            placeholder="e.g. Mercy Heights Subacute"
                                            required
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", typeof e === 'string' ? e : e.target.value)}
                                            icon={<Building className="w-4 h-4" />}
                                        />
                                        <Input
                                            label="Manager Full Name"
                                            placeholder="John Doe"
                                            required
                                            value={formData.manager}
                                            onChange={(e) => handleChange("manager", typeof e === 'string' ? e : e.target.value)}
                                            icon={<User className="w-4 h-4" />}
                                        />
                                        <Input
                                            label="Work Email"
                                            type="email"
                                            placeholder="manager@facility.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", typeof e === 'string' ? e : e.target.value)}
                                            icon={<Mail className="w-4 h-4" />}
                                            className="md:col-span-2"
                                        />
                                        <Input
                                            label="Street Address"
                                            placeholder="123 Care Lane"
                                            required
                                            value={formData.address}
                                            onChange={(e) => handleChange("address", typeof e === 'string' ? e : e.target.value)}
                                            icon={<MapPin className="w-4 h-4" />}
                                            className="md:col-span-2"
                                        />
                                        <Input
                                            label="City"
                                            placeholder="San Francisco"
                                            required
                                            value={formData.city}
                                            onChange={(e) => handleChange("city", typeof e === 'string' ? e : e.target.value)}
                                        />
                                        <Input
                                            label="ZIP / Postal Code"
                                            placeholder="94103"
                                            required
                                            value={formData.zip}
                                            onChange={(e) => handleChange("zip", typeof e === 'string' ? e : e.target.value)}
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            label="Submit Registration"
                                            type="submit"
                                            className="w-full py-4 text-lg"
                                            icon={<ChevronRight className="w-5 h-5" />}
                                        />
                                    </div>
                                </form>
                            </Card>

                            <div className="flex justify-center gap-8 py-4 opacity-50 grayscale">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ShieldCheck className="w-4 h-4" /> HIPAA Compliant</div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ShieldCheck className="w-4 h-4" /> Secure Data</div>
                            </div>
                        </div>
                    ) : (
                        <Card className="p-12 text-center flex flex-col items-center gap-6 animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-medical-green/10 rounded-full flex items-center justify-center text-medical-green mb-2">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tight">Application Received</h2>
                                <p className="text-muted-foreground max-w-sm mx-auto">
                                    Thank you for joining Vyntra Care. Our team will review your facility details and contact you at <span className="text-foreground font-bold">{formData.email}</span> within 24 hours.
                                </p>
                            </div>
                            <div className="bg-secondary/50 rounded-2xl p-6 w-full text-left flex gap-4">
                                <Info className="w-6 h-6 text-primary shrink-0" />
                                <p className="text-sm text-foreground leading-relaxed">
                                    Once approved, you'll receive a unique QR code for your supply room and access to our bulk pricing catalog.
                                </p>
                            </div>
                            <Link href="/" className="w-full">
                                <Button label="Return to Home" variant="outline" className="w-full" icon={<ArrowLeft className="w-4 h-4" />} />
                            </Link>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    )
}
