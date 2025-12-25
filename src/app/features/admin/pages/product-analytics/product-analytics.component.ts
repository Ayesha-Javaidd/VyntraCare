import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/ui/data-table/data-table.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/layout/header/header.component';

interface ProductAnalytics {
  name: string;
  quantity: number;
  avgSalePrice: number;
  avgPurchasePrice: number;
  margin: number; // in %
}

interface ProductSales {
  name: string;
  sku: string;
  quantitySold: number;
  availableQty: number;
}

@Component({
  standalone: true,
  selector: 'app-admin-product-analytics',
  templateUrl: './product-analytics.component.html',
  styleUrls: ['./product-analytics.component.css'],
  imports: [CommonModule, DataTableComponent, RouterModule, HeaderComponent],
})
export class ProductAnalyticsComponent implements OnInit {
  constructor(private router: Router) {}

  // Filters
  analyticsFilters = [
    { key: 'search', label: 'Search', options: [] },
    {
      key: 'category',
      label: 'Category',
      options: ['Disposables', 'PPE', 'Diagnostic'],
    },
  ];

  salesFilters = [{ key: 'search', label: 'Search', options: [] }];

  analyticsFilterValues: { [key: string]: string } = {};
  salesFilterValues: { [key: string]: string } = {};

  // Data
  analyticsData: ProductAnalytics[] = [
    {
      name: 'Surgical Masks',
      quantity: 5000,
      avgSalePrice: 0.5,
      avgPurchasePrice: 0.2,
      margin: 60,
    },
    {
      name: 'Latex Gloves (Box)',
      quantity: 200,
      avgSalePrice: 15,
      avgPurchasePrice: 8,
      margin: 46,
    },
    {
      name: 'Sanitizer 500ml',
      quantity: 150,
      avgSalePrice: 8.5,
      avgPurchasePrice: 4.5,
      margin: 47,
    },
    {
      name: 'N95 Respirators',
      quantity: 1200,
      avgSalePrice: 2.5,
      avgPurchasePrice: 1.1,
      margin: 56,
    },
    {
      name: 'Face Shields',
      quantity: 300,
      avgSalePrice: 4,
      avgPurchasePrice: 1.5,
      margin: 62,
    },
  ];

  salesData: ProductSales[] = [
    {
      name: 'N95 Respirator Standard',
      sku: 'N95-STD-001',
      quantitySold: 120,
      availableQty: 880,
    },
    {
      name: 'Nitrile Exam Gloves (L)',
      sku: 'GLV-NIT-L',
      quantitySold: 450,
      availableQty: 45,
    },
    {
      name: 'Surgical Gown (L)',
      sku: 'GWN-SUR-L',
      quantitySold: 85,
      availableQty: 320,
    },
    {
      name: 'Digital Thermometer',
      sku: 'THM-DIG-002',
      quantitySold: 42,
      availableQty: 150,
    },
    {
      name: 'Face Shields (Reusable)',
      sku: 'SHLD-REU-01',
      quantitySold: 18,
      availableQty: 50,
    },
  ];

  analyticsColumns: TableColumn[] = [
    { key: 'name', label: 'Product', type: 'text' },
    { key: 'quantity', label: 'Quantity', type: 'text' },
    { key: 'avgSalePrice', label: 'Avg Sale Price', type: 'text' },
    { key: 'avgPurchasePrice', label: 'Avg Purchase Price', type: 'text' },
    {
      key: 'margin',
      label: 'Margin',
      type: 'badge',
      badgeColors: { default: 'bg-green-100 text-green-800' },
    },
  ];

  salesColumns: TableColumn[] = [
    { key: 'name', label: 'Product Name', type: 'text' },
    { key: 'sku', label: 'SKU', type: 'text' },
    { key: 'quantitySold', label: 'Quantity Sold', type: 'text' },
    { key: 'availableQty', label: 'Available Quantity', type: 'text' },
  ];

  filteredAnalytics: ProductAnalytics[] = [];
  filteredSales: ProductSales[] = [];

  ngOnInit(): void {
    this.filteredAnalytics = [...this.analyticsData];
    this.filteredSales = [...this.salesData];
  }

  onAnalyticsFilterChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const category = filters['category'];
    this.filteredAnalytics = this.analyticsData.filter(
      (p) =>
        p.name.toLowerCase().includes(search) && (!category || category === '')
    );
  }

  onSalesFilterChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    this.filteredSales = this.salesData.filter((p) =>
      p.name.toLowerCase().includes(search)
    );
  }

  goBack() {
    this.router.navigate(['/admin/dashboard']);
  }
}
