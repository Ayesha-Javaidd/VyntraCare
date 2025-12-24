"use client"

import { useState } from "react"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"
import {
    Settings2,
    Plus,
    Building2,
    ChevronRight,
    ArrowUpCircle,
    MoreVertical,
    CheckCircle2
} from "lucide-react"

export default function AdminCatalogAssignmentPage() {
    const [buckets, setBuckets] = useState([
        {
            id: "BK-01",
            name: "Standard Tier",
            limit: "$5,000",
            facilities: ["North Star Skilled Nursing", "Care Point East"],
            productsCount: 124,
            color: "bg-blue-50 text-blue-600 border-blue-100"
        },
        {
            id: "BK-02",
            name: "Premium Tier",
            limit: "$15,000",
            facilities: ["Mercy Heights Subacute", "Green Valley Rehabilitation"],
            productsCount: 186,
            color: "bg-purple-50 text-purple-600 border-purple-100"
        },
        {
            id: "BK-03",
            name: "LTC Basic",
            limit: "$2,500",
            facilities: ["Harbor View Assisted Living"],
            productsCount: 82,
            color: "bg-medical-teal/10 text-medical-teal border-medical-teal/20"
        },
    ])

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Catalog Assignment</h1>
                    <p className="text-muted-foreground mt-1">Assign facilities to price buckets and manage supply limits.</p>
                </div>

                <Button
                    label="Create New Bucket"
                    icon={<Plus className="w-5 h-5" />}
                    onClick={() => alert('Create Price Bucket modal coming soon!')}
                />
            </div>

            {/* Buckets Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {buckets.map((bucket) => (
                    <Card key={bucket.id} className="relative group">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${bucket.color}`}>
                                {bucket.id}
                            </div>
                            <button className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-secondary">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-foreground">{bucket.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ArrowUpCircle className="w-4 h-4" />
                                Max Limit: <span className="font-bold text-foreground">{bucket.limit}</span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex justify-between items-center text-sm font-medium border-b border-border/50 pb-2">
                                <span className="text-muted-foreground">Assigned Facilities</span>
                                <span className="bg-secondary px-2 py-0.5 rounded text-xs text-foreground">{bucket.facilities.length}</span>
                            </div>

                            <div className="space-y-2 max-h-48 overflow-auto pr-1 custom-scrollbar">
                                {bucket.facilities.map((fac) => (
                                    <div key={fac} className="flex items-center justify-between gap-3 p-2 rounded-xl bg-secondary/30 group/item hover:bg-white hover:shadow-sm ring-1 ring-transparent hover:ring-black/5 transition-all cursor-default">
                                        <div className="flex items-center gap-2.5">
                                            <Building2 className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                                            <span className="text-sm font-medium text-foreground">{fac}</span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-all" />
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-border/50">
                                <div className="flex items-center gap-2 text-primary">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span className="text-sm font-bold">{bucket.productsCount} Products Restricted</span>
                                </div>
                            </div>

                            <Button
                                label="Assign Facility"
                                variant="outline"
                                className="w-full mt-2"
                                icon={<Plus className="w-4 h-4" />}
                                onClick={() => alert('Assign Facility modal coming soon!')}
                            />
                        </div>
                    </Card>
                ))}

                {/* Add Bucket Empty State */}
                <button
                    onClick={() => alert('Add New Price Bucket modal coming soon!')}
                    className="apple-card border-dashed border-2 border-border bg-transparent shadow-none hover:bg-secondary/20 hover:border-primary/30 flex flex-col items-center justify-center min-h-[400px] gap-3 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground group-hover:text-primary">Add New Price Bucket</p>
                </button>
            </div>

            {/* Global Configuration Card */}
            <Card title="Global Controls" description="System-wide settings for catalog logic.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-foreground">Auto-Assign New Facilities</p>
                                <p className="text-xs text-muted-foreground">Automatically place new registrations in Standard Tier.</p>
                            </div>
                            <div className="w-12 h-6 bg-medical-green rounded-full relative p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full absolute right-1" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-foreground">Bulk Pricing Override</p>
                                <p className="text-xs text-muted-foreground">Allow facility-specific price overrides outside buckets.</p>
                            </div>
                            <div className="w-12 h-6 bg-border rounded-full relative p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full absolute left-1" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary/50 rounded-2xl p-4 flex gap-4">
                        <Settings2 className="w-6 h-6 text-primary shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-foreground">Admin Tip</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                You can drag and drop facilities between buckets to quickly reassign them. Bucket changes take effect immediately on the facility portal.
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
