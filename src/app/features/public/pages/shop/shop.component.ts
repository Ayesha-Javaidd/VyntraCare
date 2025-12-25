import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image_url?: string;
  category_type: string;
}

const CATEGORIES = [
  'All Supplies',
  'Masks & Respirators',
  'Gloves',
  'Oxygen Care',
  'Patient Mobility',
];

@Component({
  selector: 'app-public-shop',
  templateUrl: 'shop.component.html',
  styleUrl: './shop.component.css',
  imports: [CommonModule, RouterModule],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  allProducts: Product[] = [];
  isLoading = true;
  selectedCategory = 'All Supplies';
  error: string | null = null;
  categories = CATEGORIES;

  ngOnInit(): void {
    this.loadMockProducts();
  }

  // Load mock products
  loadMockProducts() {
    this.isLoading = true;
    setTimeout(() => {
      this.allProducts = [
        {
          id: '1',
          name: 'CPAP Mask',
          category: 'Masks & Respirators',
          price: 129.99,
          image_url: '',
          category_type: 'Hospital Grade',
        },
        {
          id: '2',
          name: 'Medical Gloves',
          category: 'Gloves',
          price: 19.99,
          image_url: '',
          category_type: 'Hospital Grade',
        },
        {
          id: '3',
          name: 'Oxygen Concentrator',
          category: 'Oxygen Care',
          price: 499.99,
          image_url: '',
          category_type: 'Clinical Grade',
        },
        {
          id: '4',
          name: 'Patient Walker',
          category: 'Patient Mobility',
          price: 89.99,
          image_url: '',
          category_type: 'Hospital Grade',
        },
        {
          id: '5',
          name: 'N95 Mask',
          category: 'Masks & Respirators',
          price: 24.99,
          image_url: '',
          category_type: 'Clinical Grade',
        },
      ];
      this.applyCategoryFilter();
      this.isLoading = false;
    }, 1000);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.applyCategoryFilter();
  }

  applyCategoryFilter() {
    if (this.selectedCategory === 'All Supplies') {
      this.products = [...this.allProducts];
    } else {
      const lowerCat = this.selectedCategory.toLowerCase();
      this.products = this.allProducts.filter(
        (p) =>
          p.category.toLowerCase().includes(lowerCat) ||
          p.name.toLowerCase().includes(lowerCat)
      );
    }
  }

  refreshPage() {
    this.loadMockProducts();
  }
}
