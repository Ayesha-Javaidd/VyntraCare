import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/layout/header/header.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/ui/data-table/data-table.component';

@Component({
  selector: 'app-facility-orders',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FiltersComponent,
    DataTableComponent,
  ],
  templateUrl: './facility-orders.component.html',
})
export class FacilityOrdersComponent {
  title = 'Orders List';

  currentPage = 1;
  pageSize = 5;

  /** Raw data (source of truth) */
  allOrders = [
    {
      orderId: '#ORD-7829',
      date: '2023-10-24',
      status: 'Delivered',
      products: 'Surgical Masks, Gloves + 3 more',
    },
    {
      orderId: '#ORD-7828',
      date: '2023-10-22',
      status: 'Processing',
      products: 'Insulin Syringes (500 box)',
    },
    {
      orderId: '#ORD-7825',
      date: '2023-10-18',
      status: 'Delivered',
      products: 'Hand Sanitizer, N95 Masks',
    },
    {
      orderId: '#ORD-7812',
      date: '2023-10-12',
      status: 'Cancelled',
      products: 'Bandages (Large)',
    },
    {
      orderId: '#ORD-7798',
      date: '2023-10-05',
      status: 'Delivered',
      products: 'General Med Kit + 5 more',
    },
  ];

  /** Filtered rows shown in table */
  filteredOrders = [...this.allOrders];

  /** Filter dropdown config (passed to FiltersComponent) */
  filterDropdowns = [
    {
      key: 'status',
      label: 'Status',
      options: ['Delivered', 'Processing', 'Cancelled'],
    },
  ];

  /** Table columns */
  columns: TableColumn[] = [
    {
      key: 'orderId',
      label: 'ORDER ID',
      type: 'text',
    },
    {
      key: 'date',
      label: 'DATE',
      type: 'date',
    },
    {
      key: 'status',
      label: 'STATUS',
      type: 'badge',
      badgeColors: {
        Delivered: 'bg-green-100 text-green-700',
        Processing: 'bg-yellow-100 text-yellow-700',
        Cancelled: 'bg-red-100 text-red-700',
      },
    },
    {
      key: 'products',
      label: 'PRODUCTS',
      type: 'text',
    },
    {
      key: 'reorder',
      label: 'REORDER',
      type: 'button',
      buttonText: 'Reorder',
      buttonAction: (row) => this.onReorder(row),
    },
  ];

  /** Pagination */
  get totalItems(): number {
    return this.filteredOrders.length;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  /** Receive filters from FiltersComponent */
  onFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const status = filters['status'];

    this.filteredOrders = this.allOrders.filter((order) => {
      const matchesSearch =
        !search || order.orderId.toLowerCase().includes(search);

      const matchesStatus = !status || order.status === status;

      return matchesSearch && matchesStatus;
    });

    // Reset pagination when filters change
    this.currentPage = 1;
  }

  onReorder(order: any) {
    console.log('Reorder clicked:', order);
  }
}
