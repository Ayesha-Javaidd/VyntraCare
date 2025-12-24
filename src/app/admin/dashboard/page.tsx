"use client"

import { useState } from "react"
import Card from "@/components/ui/card"
import Table from "@/components/ui/table"
import Select from "@/components/ui/select"
import {
  TrendingUp,
  Users,
  Package,
  Building2,
  FileText,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function AdminDashboardPage() {
  const [revenueRange, setRevenueRange] = useState("month")

  const metrics = [
    {
      label: "Total Revenue",
      value: "$124,592.00",
      trend: "+12.5%",
      isPositive: true,
      icon: TrendingUp,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      label: "Active Facilities",
      value: "48",
      trend: "+3",
      isPositive: true,
      icon: Building2,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      label: "New Orders",
      value: "156",
      trend: "-2.4%",
      isPositive: false,
      icon: Package,
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      label: "Total Customers",
      value: "1,204",
      trend: "+82",
      isPositive: true,
      icon: Users,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", facility: "Mercy Heights", date: "2023-10-24", amount: "$450.00", invoice: "INV-8821" },
    { id: "ORD-002", customer: "Jane Smith", facility: "Subacute North", date: "2023-10-23", amount: "$1,200.00", invoice: "INV-8822" },
    { id: "ORD-003", customer: "Robert Brown", facility: "N/A (Retail)", date: "2023-10-22", amount: "$85.00", invoice: "INV-8823" },
    { id: "ORD-004", customer: "Sarah Johnson", facility: "Green Valley", date: "2023-10-22", amount: "$240.00", invoice: "INV-8824" },
    { id: "ORD-005", customer: "Michael Wilson", facility: "Subacute North", date: "2023-10-21", amount: "$560.00", invoice: "INV-8825" },
  ]

  return (
    <div className="space-y-8">
      {/* Header with Selector */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Admin. Here's what's happening today.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Compare by</span>
          <Select
            value={revenueRange}
            onChange={setRevenueRange}
            options={[
              { label: "This Week", value: "week" },
              { label: "This Month", value: "month" },
              { label: "This Year", value: "year" },
              { label: "Last 5 Years", value: "5years" },
            ]}
            className="w-48"
          />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.label} className="relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${metric.bg} ${metric.color}`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${metric.isPositive ? "text-green-500" : "text-red-500"}`}>
                {metric.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {metric.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">{metric.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Revenue Velocity</h3>
              <p className="text-sm text-slate-500">Rolling 30-day performance</p>
            </div>
            <select className="bg-slate-50 border-none text-sm font-medium text-slate-700 rounded-xl px-4 py-2 outline-none">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[45, 62, 58, 75, 90, 82, 95, 110, 105, 120].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div
                  className="bg-blue-100 group-hover:bg-blue-600 transition-all rounded-t-lg"
                  style={{ height: `${(h / 120) * 100}%` }}
                ></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  ${h}k
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Nov 1</span>
            <span>Nov 10</span>
            <span>Nov 20</span>
            <span>Nov 30</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Facility Activity Density</h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 49 }).map((_, i) => {
              const opacity = [0.1, 0.3, 0.6, 0.8, 1][Math.floor(Math.random() * 5)]
              return (
                <div
                  key={i}
                  className="aspect-square rounded-md transition-all hover:scale-110 cursor-help"
                  style={{ backgroundColor: `rgba(20, 184, 166, ${opacity})` }}
                  title={`${Math.floor(opacity * 100)}% Activity`}
                ></div>
              )
            })}
          </div>
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">Activity Level:</span>
            <div className="flex gap-1">
              {[0.1, 0.3, 0.6, 0.8, 1].map((o, i) => (
                <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: `rgba(20, 184, 166, ${o})` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}