import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/ui/data-table/data-table.component';
import { HeaderComponent } from '../../../../shared/components/layout/header/header.component';

interface Order {
  orderId: string;
  entity: string;
  totalAmount: number;
  invoiceStatus: 'Paid' | 'Pending' | 'Overdue';
  date: string;
}

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [
    CommonModule,
    FiltersComponent,
    DataTableComponent,
    HeaderComponent,
  ],
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[] = [
    {
      orderId: 'ORD-001',
      entity: 'John Doe',
      totalAmount: 1250,
      invoiceStatus: 'Paid',
      date: '2025-12-20',
    },
    {
      orderId: 'ORD-002',
      entity: 'Jane Smith',
      totalAmount: 890,
      invoiceStatus: 'Pending',
      date: '2025-12-21',
    },
    {
      orderId: 'ORD-003',
      entity: 'Acme Corp',
      totalAmount: 2450,
      invoiceStatus: 'Paid',
      date: '2025-12-18',
    },
    {
      orderId: 'ORD-004',
      entity: 'Tech Solutions',
      totalAmount: 1675,
      invoiceStatus: 'Overdue',
      date: '2025-12-19',
    },
    {
      orderId: 'ORD-005',
      entity: 'Alice Johnson',
      totalAmount: 980,
      invoiceStatus: 'Pending',
      date: '2025-12-23',
    },
  ];

  filteredOrders: Order[] = [];
  currentPage = 1;
  pageSize = 5;

  orderColumns: TableColumn[] = [
    { key: 'orderId', label: 'Order ID', type: 'text' },
    { key: 'entity', label: 'Customer/Facility', type: 'text' },
    { key: 'totalAmount', label: 'Total Amount', type: 'text' },
    {
      key: 'invoiceStatus',
      label: 'Invoice Status',
      type: 'badge',
      badgeColors: {
        Paid: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Overdue: 'bg-red-100 text-red-800',
      },
    },
    { key: 'date', label: 'Date', type: 'text' },
  ];

  orderFilters = [
    {
      key: 'invoiceStatus',
      label: 'Invoice Status',
      options: ['Paid', 'Pending', 'Overdue'],
    },
    {
      key: 'entity',
      label: 'Customer/Facility',
      options: [
        'John Doe',
        'Jane Smith',
        'Acme Corp',
        'Tech Solutions',
        'Alice Johnson',
      ],
    },
  ];

  ngOnInit(): void {
    this.filteredOrders = [...this.orders];
  }

  onFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const status = filters['invoiceStatus'];
    const entity = filters['entity'];

    this.filteredOrders = this.orders.filter((o) => {
      const matchesSearch =
        o.orderId.toLowerCase().includes(search) ||
        o.entity.toLowerCase().includes(search);
      const matchesStatus = !status || o.invoiceStatus === status;
      const matchesEntity = !entity || o.entity === entity;
      return matchesSearch && matchesStatus && matchesEntity;
    });

    this.currentPage = 1;
  }

  viewOrder(order: Order) {
    alert(`Viewing order ${order.orderId}`);
  }

  deleteOrder(order: Order) {
    if (confirm(`Are you sure you want to delete order ${order.orderId}?`)) {
      this.orders = this.orders.filter((o) => o.orderId !== order.orderId);
      this.filteredOrders = [...this.orders];
    }
  }
}
