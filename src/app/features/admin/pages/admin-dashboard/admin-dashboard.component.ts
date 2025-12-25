import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsCardComponent } from '../../../../shared/components/ui/stats-card/stats-card.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/ui/data-table/data-table.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import { HeaderComponent } from "../../../../shared/components/layout/header/header.component";

interface Order {
  orderId: string;
  entity: string;
  totalAmount: number;
  invoiceStatus: 'Paid' | 'Pending' | 'Cancelled';
}

type ChangeType = 'positive' | 'negative' | 'neutral';

interface StatItem {
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
  icon: string;
  iconBgColor: string;
  iconColor: string;
}

interface RevenueItem {
  title: string;
  amount: string;
  change: string;
  changeType: ChangeType;
  description: string;
}

interface AnalyticsSection {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [
    CommonModule,
    StatsCardComponent,
    DataTableComponent,
    FiltersComponent,
    HeaderComponent
],
})
export class AdminDashboardComponent implements OnInit {
  /* =======================
     Stats Cards
  ======================= */

  stats: StatItem[] = [
    {
      title: 'Total Facilities',
      value: '247',
      change: '+12%',
      changeType: 'positive',
      icon: 'fas fa-building',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Active Products',
      value: '1,834',
      change: '+8%',
      changeType: 'positive',
      icon: 'fas fa-boxes',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '8%',
      changeType: 'neutral',
      icon: 'fas fa-exclamation-triangle',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      title: 'Pending Orders',
      value: '56',
      change: '+3%',
      changeType: 'positive',
      icon: 'fas fa-clipboard-list',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  /* =======================
     Revenue Data
  ======================= */

  revenueData: RevenueItem[] = [
    {
      title: 'E-Commerce Store',
      amount: '$128,450',
      change: '+14.2%',
      changeType: 'positive',
      description: 'Online sales revenue',
    },
    {
      title: 'Facilities Revenue',
      amount: '$542,300',
      change: '+8.7%',
      changeType: 'positive',
      description: 'Physical facilities income',
    },
  ];

  /* =======================
     Analytics Sections
  ======================= */

  analyticsSections: AnalyticsSection[] = [
    {
      title: 'Products POV',
      description: 'View detailed product analytics and performance metrics',
      icon: 'fas fa-chart-bar',
    },
    {
      title: 'Facility Insights',
      description: 'Explore facility performance and utilization data',
      icon: 'fas fa-warehouse',
    },
  ];

  /* =======================
     Orders Data
  ======================= */

  orders: Order[] = [
    {
      orderId: 'ORD-001',
      entity: 'John Doe',
      totalAmount: 1250,
      invoiceStatus: 'Paid',
    },
    {
      orderId: 'ORD-002',
      entity: 'Jane Smith',
      totalAmount: 890,
      invoiceStatus: 'Pending',
    },
    {
      orderId: 'ORD-003',
      entity: 'Acme Corp',
      totalAmount: 2450,
      invoiceStatus: 'Paid',
    },
    {
      orderId: 'ORD-004',
      entity: 'Tech Solutions',
      totalAmount: 1675,
      invoiceStatus: 'Paid',
    },
    {
      orderId: 'ORD-005',
      entity: 'Retail Store',
      totalAmount: 540,
      invoiceStatus: 'Cancelled',
    },
    {
      orderId: 'ORD-006',
      entity: 'David Wilson',
      totalAmount: 3200,
      invoiceStatus: 'Pending',
    },
  ];

  /* =======================
     DataTable Configuration
  ======================= */

  orderColumns : TableColumn[] = [
    { key: 'orderId', label: 'Order ID', type: 'text' },
    { key: 'entity', label: 'Entity', type: 'text' },
    { key: 'totalAmount', label: 'Total Amount', type: 'text' },
    {
      key: 'invoiceStatus',
      label: 'Invoice Status',
      type: 'badge',
      badgeColors: {
        Paid: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Cancelled: 'bg-red-100 text-red-800',
      },
    },
  ];

  /* =======================
     Filters Configuration
  ======================= */

  orderFilterDropdowns = [
    {
      key: 'invoiceStatus',
      label: 'Invoice Status',
      options: ['Paid', 'Pending', 'Cancelled'],
    },
  ];

  /* =======================
     Filtering + Pagination
  ======================= */

  filteredOrders: Order[] = [];
  currentPage = 1;

  ngOnInit(): void {
    this.filteredOrders = [...this.orders];
  }

  onOrderFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const status = filters['invoiceStatus'];

    this.filteredOrders = this.orders.filter((order) => {
      const matchesSearch =
        order.orderId.toLowerCase().includes(search) ||
        order.entity.toLowerCase().includes(search);

      const matchesStatus = !status || order.invoiceStatus === status;

      return matchesSearch && matchesStatus;
    });

    this.currentPage = 1;
  }

  /* =======================
     Helpers
  ======================= */

  getRevenueChangeColor(changeType: ChangeType): string {
    return changeType === 'positive'
      ? 'text-green-600'
      : changeType === 'negative'
      ? 'text-red-600'
      : 'text-gray-600';
  }
}
