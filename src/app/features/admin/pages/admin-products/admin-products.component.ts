import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/ui/data-table/data-table.component';
import { FiltersComponent } from '../../../../shared/components/ui/filters/filters.component';
import { HeaderComponent } from '../../../../shared/components/layout/header/header.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { StatCardComponent } from '../../../../shared/components/ui/stat-card/stat-card.component';
import {
  Product,
  ProductModalComponent,
} from '../../../../shared/components/ui/product-modal/product-modal.component';
import { ModalShellComponent } from '../../../../shared/components/ui/modal-shell/modal-shell.component';

@Component({
  selector: 'app-products-management',
  standalone: true,
  imports: [
    CommonModule,
    DataTableComponent,
    FiltersComponent,
    HeaderComponent,
    StatCardComponent,
    ProductModalComponent,
  ],
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Surgical Gloves (Box of 100)',
      category: 'Disposables',
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'N95 Respirator Masks',
      category: 'PPE',
      status: 'In Stock',
    },
    {
      id: 3,
      name: 'Disposable Syringes 10ml',
      category: 'Disposables',
      status: 'In Stock',
    },
    {
      id: 4,
      name: 'Digital Thermometer',
      category: 'Diagnostic',
      status: 'In Stock',
    },
    {
      id: 5,
      name: 'Blood Pressure Monitor',
      category: 'Diagnostic',
      status: 'Low Stock',
    },
    {
      id: 6,
      name: 'First Aid Kit Premium',
      category: 'First Aid',
      status: 'In Stock',
    },
    {
      id: 7,
      name: 'Sterile Bandages Pack',
      category: 'Wound Care',
      status: 'In Stock',
    },
    {
      id: 8,
      name: 'Alcohol Swabs (200ct)',
      category: 'Disinfectants',
      status: 'In Stock',
    },
  ];

  filteredProducts: Product[] = [];
  currentPage = 1;
  pageSize = 5;

  productFilters = [
    { key: 'search', label: 'Search', options: [] },
    {
      key: 'status',
      label: 'Status',
      options: ['In Stock', 'Low Stock', 'Out of Stock'],
    },
  ];
  productColumns: TableColumn[] = [
    { key: 'id', label: 'ID', type: 'text' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'category', label: 'Category', type: 'text' },
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
    {
      key: 'addStock',
      label: 'Add Stock',
      type: 'button',
      buttonText: 'Add',
      buttonAction: (row) => this.addStock(row),
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredProducts = [...this.products];
  }

  // Stats
  get totalProducts(): number {
    return this.products.length;
  }
  get inStock(): number {
    return this.products.filter((p) => p.status === 'In Stock').length;
  }
  get lowStock(): number {
    return this.products.filter((p) => p.status === 'Low Stock').length;
  }
  get outOfStock(): number {
    return this.products.filter((p) => p.status === 'Out of Stock').length;
  }

  categories: string[] = [
    'Disposables',
    'PPE',
    'Diagnostic',
    'First Aid',
    'Wound Care',
    'Disinfectants',
  ];
  units: string[] = ['Box', 'Pack', 'Piece', 'Set', 'Bottle'];

  // Actions

  addStock(product: Product) {
    alert(`Add stock to ${product.name}`);
  }
  showModal = false;
  modalMode: 'add' | 'update' = 'add';
  selectedProduct: Product | null = null;

  addNewProduct() {
    this.modalMode = 'add';
    this.selectedProduct = {
      id: 0,
      name: '',
      category: '',
      status: 'In Stock',
    };
    this.showModal = true;
  }

  editProduct(product: Product) {
    this.modalMode = 'update';
    this.selectedProduct = { ...product };
    this.showModal = true;
  }

  handleModalSubmit(product: Product) {
    if (this.modalMode === 'add') {
      const newId = Math.max(...this.products.map((p) => p.id ?? 0)) + 1;

      this.products.push({ ...product, id: newId });
    } else if (this.modalMode === 'update' && this.selectedProduct) {
      const index = this.products.findIndex(
        (p) => p.id === this.selectedProduct!.id
      );
      if (index > -1)
        this.products[index] = { ...product, id: this.selectedProduct.id };
    }
    this.filteredProducts = [...this.products];
    this.showModal = false;
  }

  deleteProduct(product: Product) {
    if (confirm(`Delete ${product.name}?`)) {
      this.products = this.products.filter((p) => p.id !== product.id);
      this.filteredProducts = [...this.products];
    }
  }

  onFiltersChange(filters: { [key: string]: string }) {
    const search = (filters['search'] || '').toLowerCase();
    const status = filters['status'];
    this.filteredProducts = this.products.filter(
      (p) =>
        (p.name.toLowerCase().includes(search) ||
          p.category.toLowerCase().includes(search)) &&
        (!status || p.status === status)
    );
    this.currentPage = 1;
  }

  goBack() {
    this.router.navigate(['/admin/dashboard']);
  }
}
