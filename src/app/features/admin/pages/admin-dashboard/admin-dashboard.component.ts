import { Component } from '@angular/core';
import { StatsCardComponent } from "../../../../shared/components/ui/stats-card/stats-card.component";
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../../shared/components/ui/table/table.component";

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
  icon: string; // Font Awesome icon class
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
  icon: string; // Font Awesome icon class
}

interface QuickAction {
  title: string;
  icon: string; // Font Awesome icon class
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [StatsCardComponent, CommonModule, TableComponent],
})
export class AdminDashboardComponent {
  // Stats data with Font Awesome icons
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

  // Revenue data
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

  // Orders data
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

  // Table headers
  orderHeaders = ['Order ID', 'Entity', 'Total Amount', 'Invoice Status'];

  // Analytics sections with Font Awesome icons
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

  // Quick actions with Font Awesome icons
  quickActions: QuickAction[] = [
    { title: 'Add New Product', icon: 'fas fa-plus' },
    { title: 'Generate Report', icon: 'fas fa-file-alt' },
    { title: 'Manage Users', icon: 'fas fa-users' },
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  // Helper method for revenue change color
  getRevenueChangeColor(changeType: ChangeType): string {
    return changeType === 'positive'
      ? 'text-green-600'
      : changeType === 'negative'
      ? 'text-red-600'
      : 'text-gray-600';
  }

  // Get status icon for orders table
  getStatusIcon(status: string): string {
    switch (status) {
      case 'Paid':
        return 'fas fa-check-circle text-green-600';
      case 'Pending':
        return 'fas fa-clock text-yellow-600';
      case 'Cancelled':
        return 'fas fa-times-circle text-red-600';
      default:
        return 'fas fa-question-circle text-gray-600';
    }
  }
}
