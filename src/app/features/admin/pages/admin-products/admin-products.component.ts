import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../../shared/components/ui/table/table.component';
import { FormsModule, NgModel } from '@angular/forms';

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

interface FilterOption {
  label: string;
  value: string;
}

@Component({
  standalone: true,
  selector: 'app-products-management',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  imports: [CommonModule, TableComponent, FormsModule],
})
export class AdminProductsComponent {
  // Products data
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

  // Table headers
  productHeaders = [
    'Product Name',
    'Category',
    'Quantity Sold',
    'Available Qty',
    'Avg Sale Price',
    'Avg Purchase Price',
    'Margin',
    'Status',
    'Actions',
  ];

  // Filter options
  categoryOptions: FilterOption[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Disposables', value: 'Disposables' },
    { label: 'PPE', value: 'PPE' },
    { label: 'Diagnostic', value: 'Diagnostic' },
    { label: 'First Aid', value: 'First Aid' },
    { label: 'Wound Care', value: 'Wound Care' },
    { label: 'Disinfectants', value: 'Disinfectants' },
  ];

  statusOptions: FilterOption[] = [
    { label: 'All Status', value: 'all' },
    { label: 'In Stock', value: 'In Stock' },
    { label: 'Low Stock', value: 'Low Stock' },
    { label: 'Out of Stock', value: 'Out of Stock' },
  ];

  sortOptions: FilterOption[] = [
    { label: 'Most Sold', value: 'most-sold' },
    { label: 'Highest Margin', value: 'highest-margin' },
    { label: 'Highest Price', value: 'highest-price' },
    { label: 'Name (A-Z)', value: 'name-asc' },
    { label: 'Name (Z-A)', value: 'name-desc' },
  ];

  // Selected filters
  selectedCategory: string = 'all';
  selectedStatus: string = 'all';
  selectedSort: string = 'most-sold';
  searchQuery: string = '';

  // Analytics metrics
  totalProducts = this.products.length;
  totalSold = this.products.reduce(
    (sum, product) => sum + product.quantitySold,
    0
  );
  totalAvailable = this.products.reduce(
    (sum, product) => sum + product.availableQty,
    0
  );
  averageMargin =
    this.products.reduce((sum, product) => sum + product.margin, 0) /
    this.products.length;

  // Get filtered and sorted products
  get filteredProducts(): Product[] {
    let filtered = [...this.products];

    // Apply search filter
    if (this.searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    // Apply status filter
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(
        (product) => product.status === this.selectedStatus
      );
    }

    // Apply sorting
    switch (this.selectedSort) {
      case 'most-sold':
        filtered.sort((a, b) => b.quantitySold - a.quantitySold);
        break;
      case 'highest-margin':
        filtered.sort((a, b) => b.margin - a.margin);
        break;
      case 'highest-price':
        filtered.sort((a, b) => b.avgSalePrice - a.avgSalePrice);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }

  // Get status class
  getStatusClass(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  // Get margin class based on value
  getMarginClass(margin: number): string {
    if (margin >= 60) return 'text-green-600 font-bold';
    if (margin >= 50) return 'text-blue-600';
    return 'text-gray-600';
  }

  // Get stock level indicator
  getStockLevel(available: number, sold: number): string {
    const percentage = (available / (available + sold)) * 100;
    if (percentage < 20) return 'text-red-600';
    if (percentage < 40) return 'text-yellow-600';
    return 'text-green-600';
  }

  // Add new product
  addNewProduct() {
    // In a real app, this would open a modal/form
    alert('Add New Product functionality would open a form here.');
  }

  // Edit product
  editProduct(product: Product) {
    // In a real app, this would open a modal/form
    alert(`Editing product: ${product.name}`);
  }

  // Delete product
  deleteProduct(product: Product) {
    if (confirm(`Are you sure you want to delete ${product.name}?`)) {
      this.products = this.products.filter((p) => p.id !== product.id);
      this.updateAnalytics();
    }
  }

  // Update analytics after changes
  private updateAnalytics() {
    this.totalProducts = this.products.length;
    this.totalSold = this.products.reduce(
      (sum, product) => sum + product.quantitySold,
      0
    );
    this.totalAvailable = this.products.reduce(
      (sum, product) => sum + product.availableQty,
      0
    );
    this.averageMargin =
      this.products.reduce((sum, product) => sum + product.margin, 0) /
      this.products.length;
  }

  // Reset filters
  resetFilters() {
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.selectedSort = 'most-sold';
    this.searchQuery = '';
  }
}
