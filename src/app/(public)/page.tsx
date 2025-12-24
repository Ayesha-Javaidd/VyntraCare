import Link from "next/link"
import Button from "@/components/ui/button"
import {
    ShieldCheck,
    Star,
    ChevronRight,
    Building2,
    ShoppingBag,
    ScanFace,
    HeartPulse,
    Stethoscope
} from "lucide-react"
import Card from "@/components/ui/card"

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full border border-primary/10">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest">Medical-Grade Confidence</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            Advanced Care. <br />
                            <span className="text-primary italic">Precision</span> Delivery.
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Vyntra Care is the healthcare supply ecosystem of the future. From subacute management to AI-driven personal respiratory care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <Link href="/shop">
                                <Button
                                    label="Start Shopping"
                                    className="px-10 py-4 text-lg"
                                    icon={<ChevronRight className="w-5 h-5" />}
                                />
                            </Link>
                            <Link href="/about">
                                <Button
                                    label="Our AI Vision"
                                    variant="outline"
                                    className="px-10 py-4 text-lg"
                                />
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-wrap items-center gap-8 pt-8 justify-center lg:justify-start grayscale opacity-50">
                            <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                                <HeartPulse className="w-6 h-6" /> PULSE HEALTH
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                                <Stethoscope className="w-6 h-6" /> MED-ELITE
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold opacity-80 underline underline-offset-4 decoration-primary">
                                OXIGEN+
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full aspect-square bg-gradient-to-tr from-primary/10 via-secondary to-medical-teal/10 rounded-[4rem] flex items-center justify-center p-12 relative overflow-hidden ring-1 ring-border">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--medical-blue)_0%,_transparent_70%)] opacity-5" />
                            <div className="w-full h-full bg-white/40 rounded-[3rem] backdrop-blur-xl border border-white/50 flex flex-col items-center justify-center p-10 text-center space-y-6">
                                <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-primary/40 mb-2">
                                    <ScanFace className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">AI Mask Sizing</h3>
                                <p className="text-sm text-muted-foreground">
                                    Stop guessing. Scan your face and get the perfect CPAP mask size in seconds.
                                </p>
                                <Link href="/shop/sizing" className="w-full">
                                    <Button label="Try AI Sizer" variant="outline" className="w-full" icon={<ChevronRight className="w-4 h-4" />} />
                                </Link>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 apple-card p-6 bg-white/90 backdrop-blur max-w-[200px] border border-border shadow-2xl">
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-xs font-bold text-foreground leading-tight">"The most intuitive healthcare platform I've ever used."</p>
                            <p className="text-[10px] text-muted-foreground mt-2 uppercase font-bold tracking-widest">— Dr. Aris Thorne</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Module Navigation */}
            <section className="bg-secondary/30 py-24 border-y border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <Link href="/facility/dashboard" className="group">
                            <Card className="p-10 h-full border-2 border-transparent group-hover:border-primary/20 hover:bg-white transition-all duration-500 overflow-hidden relative">
                                <div className="flex flex-col h-full gap-6">
                                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Building2 className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-bold tracking-tight text-foreground">For Facilities</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            Streamline your supply chain with our subacute management portal. Automate inventory, track trends, and reduce errors.
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-primary font-bold">
                                        Access Facility Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                            </Card>
                        </Link>

                        <Link href="/shop" className="group">
                            <Card className="p-10 h-full border-2 border-transparent group-hover:border-medical-teal/20 hover:bg-white transition-all duration-500 overflow-hidden relative">
                                <div className="flex flex-col h-full gap-6">
                                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-muted-foreground group-hover:bg-medical-teal group-hover:text-white transition-all duration-500">
                                        <ShoppingBag className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-bold tracking-tight text-foreground">For Patients</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            Shop premium respiratory supplies with AI guidance. Simple checkout, medical trust, and expert support.
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-medical-teal font-bold">
                                        Shop CPAP & Oxygen <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-medical-teal/5 rounded-full blur-3xl group-hover:bg-medical-teal/10 transition-colors" />
                            </Card>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}
