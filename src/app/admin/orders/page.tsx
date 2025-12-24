"use client"

import { useState } from "react"
import Card from "@/components/ui/card"
import Table from "@/components/ui/table"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Select from "@/components/ui/select"
import {
    Search,
    Download,
    FileText,
    ExternalLink,
    Filter,
    Package
} from "lucide-react"

export default function AdminOrdersPage() {
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

    const orders = [
        {
            id: "ORD-8821",
            customer: "John Doe",
            facility: "Mercy Heights",
            date: "2023-10-24",
            amount: "$450.00",
            status: "Delivered",
            invoice: "INV-8821"
        },
        {
            id: "ORD-8822",
            customer: "Jane Smith",
            facility: "Subacute North",
            date: "2023-10-23",
            amount: "$1,200.00",
            status: "Processing",
            invoice: "INV-8822"
        },
        {
            id: "ORD-8823",
            customer: "Robert Brown",
            facility: "N/A (Retail)",
            date: "2023-10-22",
            amount: "$85.00",
            status: "Shipped",
            invoice: "INV-8823"
        },
        {
            id: "ORD-8824",
            customer: "Sarah Johnson",
            facility: "Green Valley",
            date: "2023-10-22",
            amount: "$240.00",
            status: "Processing",
            invoice: "INV-8824"
        },
        {
            id: "ORD-8825",
            customer: "Michael Wilson",
            facility: "Subacute North",
            date: "2023-10-21",
            amount: "$560.00",
            status: "Delivered",
            invoice: "INV-8825"
        },
    ]

    const filteredOrders = orders.filter(o => {
        const matchesSearch = o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase())
        const matchesStatus = statusFilter === "all" || o.status.toLowerCase() === statusFilter.toLowerCase()
        return matchesSearch && matchesStatus
    })

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Orders & Invoices</h1>
                    <p className="text-muted-foreground mt-1">Track all purchase activity and manage financial documents.</p>
                </div>

                <div className="flex gap-3">
                    <Button
                        label="Download All Reports"
                        variant="outline"
                        icon={<Download className="w-5 h-5" />}
                    />
                </div>
            </div>

            {/* Filters */}
            <Card className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <Input
                        label="Search Orders"
                        placeholder="Search by Order ID or Customer..."
                        value={search}
                        onChange={(e) => setSearch(typeof e === 'string' ? e : e.target.value)}
                        icon={<Search className="w-4 h-4" />}
                        className="flex-1"
                    />

                    <Select
                        label="Order Status"
                        value={statusFilter}
                        onChange={setStatusFilter}
                        options={[
                            { label: "All Statuses", value: "all" },
                            { label: "Processing", value: "processing" },
                            { label: "Shipped", value: "shipped" },
                            { label: "Delivered", value: "delivered" },
                            { label: "Cancelled", value: "cancelled" },
                        ]}
                        className="w-full md:w-64"
                    />

                    <div className="flex items-end pb-0.5">
                        <Button
                            label="Filters"
                            variant="outline"
                            icon={<Filter className="w-4 h-4" />}
                        />
                    </div>
                </div>
            </Card>

            {/* Orders Table */}
            <Card className="p-0 overflow-hidden">
                <Table
                    headers={["Order", "Customer & Facility", "Date", "Status", "Amount", "Invoice"]}
                    rows={filteredOrders}
                    renderRow={(row) => (
                        <>
                            <td className="px-4 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-secondary rounded-lg">
                                        <Package className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground">{row.id}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-4">
                                <p className="text-sm font-semibold text-foreground">{row.customer}</p>
                                <p className="text-xs text-muted-foreground">{row.facility}</p>
                            </td>
                            <td className="px-4 py-4 text-sm text-muted-foreground">{row.date}</td>
                            <td className="px-4 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider
                  ${row.status === 'Delivered' ? 'bg-green-50 text-green-600' :
                                        row.status === 'Processing' ? 'bg-orange-50 text-orange-600' :
                                            'bg-blue-50 text-blue-600'}
                `}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm font-bold text-foreground">{row.amount}</td>
                            <td className="px-4 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 text-primary hover:underline cursor-pointer group">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-sm font-bold">{row.invoice}</span>
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <button className="p-1.5 hover:bg-secondary rounded-lg text-muted-foreground transition-colors">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </>
                    )}
                />
            </Card>

            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="Monthly Invoicing" description="Pending vs Paid amount for this month.">
                    <div className="h-48 flex items-end gap-2 pb-2">
                        {[45, 60, 30, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full bg-primary/10 rounded-t-lg relative group">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500 group-hover:bg-primary/80"
                                        style={{ height: `${h}%` }}
                                    />
                                </div>
                                <span className="text-[10px] text-muted-foreground font-bold uppercase">M{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Payment Methods" description="Distribution of order payments.">
                    <div className="space-y-4">
                        {[
                            { label: "Credit Card", value: 65, color: "bg-blue-500" },
                            { label: "Direct Invoice", value: 25, color: "bg-medical-teal" },
                            { label: "Insurance Billing", value: 10, color: "bg-medical-green" },
                        ].map((method) => (
                            <div key={method.label} className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                    <span className="text-muted-foreground">{method.label}</span>
                                    <span className="text-foreground">{method.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className={`h-full ${method.color}`} style={{ width: `${method.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
