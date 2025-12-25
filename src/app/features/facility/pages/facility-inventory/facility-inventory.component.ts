import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/layout/header/header.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/ui/data-table/data-table.component';
import { StatCardComponent } from '../../../../shared/components/ui/stat-card/stat-card.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facility-inventory',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FiltersComponent,
    DataTableComponent,
    StatCardComponent,
    RouterLink,
  ],
  templateUrl: './facility-inventory.component.html',
})
export class FacilityInventoryComponent {
  title = 'Current Stock';

  currentPage = 1;
  pageSize = 5;

  /** Source data */
  allInventory = [
    {
      product: 'Surgical Masks (N95)',
      category: 'PPE',
      sku: '#PPE-2023-001',
      quantity: '450 boxes',
      status: 'In Stock',
    },
    {
      product: 'Latex Gloves (L)',
      category: 'PPE',
      sku: '#PPE-2023-015',
      quantity: '12 packs',
      status: 'Low Stock',
    },
    {
      product: 'Syringes (5ml)',
      category: 'Medical Supplies',
      sku: '#MED-2023-089',
      quantity: '1,200 units',
      status: 'In Stock',
    },
    {
      product: 'Ibuprofen (200mg)',
      category: 'Pharmaceuticals',
      sku: '#PHARM-2023-102',
      quantity: '5 bottles',
      status: 'Running Low',
    },
    {
      product: 'Bandages (Assorted)',
      category: 'First Aid',
      sku: '#FA-2023-044',
      quantity: '300 boxes',
      status: 'In Stock',
    },
  ];

  /** Filtered rows */
  filteredInventory = [...this.allInventory];

  /** Filters configuration */
  filterDropdowns = [
    {
      key: 'category',
      label: 'Category',
      options: ['PPE', 'Medical Supplies', 'Pharmaceuticals', 'First Aid'],
    },
    {
      key: 'status',
      label: 'Status',
      options: ['In Stock', 'Low Stock', 'Running Low'],
    },
  ];

  /** Table columns */
  columns: TableColumn[] = [
    {
      key: 'product',
      label: 'PRODUCT',
      type: 'text',
    },
    {
      key: 'category',
      label: 'CATEGORY',
      type: 'text',
    },
    {
      key: 'sku',
      label: 'SKU',
      type: 'text',
    },
    {
      key: 'quantity',
      label: 'QUANTITY',
      type: 'text',
    },
    {
      key: 'status',
      label: 'STATUS',
      type: 'badge',
      badgeColors: {
        'In Stock': 'bg-green-100 text-green-700',
        'Low Stock': 'bg-red-100 text-red-700',
        'Running Low': 'bg-yellow-100 text-yellow-700',
      },
    },
    {
      key: 'restock',
      label: 'RESTOCK',
      type: 'button',
      buttonText: 'Request',
      buttonAction: (row) => this.onRestock(row),
    },
  ];

  get totalItems(): number {
    return this.filteredInventory.length;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  /** Receive filter values from FiltersComponent */
  onFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const category = filters['category'];
    const status = filters['status'];

    this.filteredInventory = this.allInventory.filter((item) => {
      const matchesSearch =
        !search ||
        item.product.toLowerCase().includes(search) ||
        item.sku.toLowerCase().includes(search);

      const matchesCategory = !category || item.category === category;

      const matchesStatus = !status || item.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    this.currentPage = 1;
  }

  itemTotal: number = 125;
  lowStockItems: number = 12;

  onAddNewItem() {
    console.log('Add new inventory item');
  }

  onRestock(item: any) {
    console.log('Restock requested for:', item);
  }
}
