import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/ui/data-table/data-table.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import { HeaderComponent } from "../../../../shared/components/layout/header/header.component";

interface Product {
  id: number;
  name: string;
  category: string;
  quantitySold: number;
  availableQty: number;
  avgSalePrice: number;
  avgPurchasePrice: number;
  margin: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

@Component({
  standalone: true,
  selector: 'app-products-management',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  imports: [CommonModule, DataTableComponent, FiltersComponent, HeaderComponent],
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Surgical Gloves (Box of 100)',
      category: 'Disposables',
      quantitySold: 2450,
      availableQty: 8500,
      avgSalePrice: 24.99,
      avgPurchasePrice: 12.5,
      margin: 60.0,
      status: 'In Stock',
      lastUpdated: '2024-01-15',
    },
    {
      id: 2,
      name: 'N95 Respirator Masks',
      category: 'PPE',
      quantitySold: 1820,
      availableQty: 5200,
      avgSalePrice: 18.5,
      avgPurchasePrice: 8.25,
      margin: 55.4,
      status: 'In Stock',
      lastUpdated: '2024-01-14',
    },
    {
      id: 3,
      name: 'Disposable Syringes 10ml',
      category: 'Disposables',
      quantitySold: 3200,
      availableQty: 12000,
      avgSalePrice: 0.85,
      avgPurchasePrice: 0.32,
      margin: 62.4,
      status: 'In Stock',
      lastUpdated: '2024-01-15',
    },
    {
      id: 4,
      name: 'Digital Thermometer',
      category: 'Diagnostic',
      quantitySold: 890,
      availableQty: 2100,
      avgSalePrice: 45.0,
      avgPurchasePrice: 22.0,
      margin: 51.1,
      status: 'In Stock',
      lastUpdated: '2024-01-13',
    },
    {
      id: 5,
      name: 'Blood Pressure Monitor',
      category: 'Diagnostic',
      quantitySold: 456,
      availableQty: 780,
      avgSalePrice: 89.99,
      avgPurchasePrice: 42.0,
      margin: 53.3,
      status: 'Low Stock',
      lastUpdated: '2024-01-12',
    },
    {
      id: 6,
      name: 'First Aid Kit Premium',
      category: 'First Aid',
      quantitySold: 672,
      availableQty: 1450,
      avgSalePrice: 65.0,
      avgPurchasePrice: 28.5,
      margin: 56.1,
      status: 'In Stock',
      lastUpdated: '2024-01-14',
    },
    {
      id: 7,
      name: 'Sterile Bandages Pack',
      category: 'Wound Care',
      quantitySold: 4100,
      availableQty: 9800,
      avgSalePrice: 12.99,
      avgPurchasePrice: 5.2,
      margin: 60.0,
      status: 'In Stock',
      lastUpdated: '2024-01-15',
    },
    {
      id: 8,
      name: 'Alcohol Swabs (200ct)',
      category: 'Disinfectants',
      quantitySold: 2890,
      availableQty: 7200,
      avgSalePrice: 8.99,
      avgPurchasePrice: 3.5,
      margin: 61.1,
      status: 'In Stock',
      lastUpdated: '2024-01-14',
    },
  ];
  productColumns: TableColumn[] = [
    { key: 'name', label: 'Product', type: 'text' },
    { key: 'category', label: 'Category', type: 'badge' },
    { key: 'quantitySold', label: 'Sold', type: 'text' },
    { key: 'availableQty', label: 'Available', type: 'text' }, // changed from 'progress'
    { key: 'avgSalePrice', label: 'Avg Sale', type: 'text' },
    { key: 'avgPurchasePrice', label: 'Avg Purchase', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        'In Stock': 'bg-green-100 text-green-800',
        'Low Stock': 'bg-yellow-100 text-yellow-800',
        'Out of Stock': 'bg-red-100 text-red-800',
      },
    },
  ];

  productFilters = [
    {
      key: 'category',
      label: 'Category',
      options: [
        'Disposables',
        'PPE',
        'Diagnostic',
        'First Aid',
        'Wound Care',
        'Disinfectants',
      ],
    },
    {
      key: 'status',
      label: 'Status',
      options: ['In Stock', 'Low Stock', 'Out of Stock'],
    },
  ];

  filteredProducts: Product[] = [];
  currentPage = 1;
  pageSize = 5;

  totalProducts = 0;
  totalSold = 0;
  totalAvailable = 0;
  averageMargin = 0;

  ngOnInit(): void {
    this.filteredProducts = [...this.products];
    this.updateAnalytics();
  }

  onFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const category = filters['category'];
    const status = filters['status'];

    this.filteredProducts = this.products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search);

      const matchesCategory = !category || p.category === category;
      const matchesStatus = !status || p.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    this.currentPage = 1;
  }

  addNewProduct() {
    alert('Add New Product');
  }

  editProduct(product: Product) {
    alert(`Editing product: ${product.name}`);
  }

  deleteProduct(product: Product) {
    if (confirm(`Delete ${product.name}?`)) {
      this.products = this.products.filter((p) => p.id !== product.id);
      this.filteredProducts = [...this.products];
      this.updateAnalytics();
    }
  }

  private updateAnalytics() {
    this.totalProducts = this.products.length;
    this.totalSold = this.products.reduce((sum, p) => sum + p.quantitySold, 0);
    this.totalAvailable = this.products.reduce(
      (sum, p) => sum + p.availableQty,
      0
    );
    this.averageMargin =
      this.products.reduce((sum, p) => sum + p.margin, 0) /
      this.products.length;
  }
}
