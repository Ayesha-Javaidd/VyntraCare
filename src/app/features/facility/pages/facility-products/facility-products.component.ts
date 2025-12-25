import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../shared/components/ui/product-modal/product-modal.component';
import { HeaderComponent } from '../../../../shared/components/layout/header/header.component';
import { ProductCardComponent } from '../../../../shared/components/ui/product-card/product-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facility-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductCardComponent, FormsModule],
  templateUrl: 'facility-products.component.html',
})
export class FacilityProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;
  search = '';
  facilityName = 'Your Facility';

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    // Replace with Supabase service call
    setTimeout(() => {
      this.products = [
        {
          id: 1,
          name: 'Nitrile Gloves',
          category: 'PPE',
          price: 12.99,
          stock_quantity: 40,
        },
        {
          id: 2,
          name: 'Surgical Masks',
          category: 'PPE',
          price: 8.5,
          stock_quantity: 120,
        },
        {
          id: 3,
          name: 'Thermometers',
          category: 'Diagnostics',
          price: 25.0,
          stock_quantity: 30,
        },
        {
          id: 4,
          name: 'Stethoscopes',
          category: 'Diagnostics',
          price: 45.0,
          stock_quantity: 15,
        },
        {
          id: 5,
          name: 'Hand Sanitizer',
          category: 'Hygiene',
          price: 5.0,
          stock_quantity: 200,
        },
        {
          id: 6,
          name: 'Face Shields',
          category: 'PPE',
          price: 10.0,
          stock_quantity: 60,
        },
        {
          id: 7,
          name: 'Syringes',
          category: 'Consumables',
          price: 0.5,
          stock_quantity: 500,
        },
        {
          id: 8,
          name: 'IV Drip Sets',
          category: 'Consumables',
          price: 7.0,
          stock_quantity: 80,
        },
        {
          id: 9,
          name: 'Blood Pressure Monitors',
          category: 'Diagnostics',
          price: 75.0,
          stock_quantity: 12,
        },
        {
          id: 10,
          name: 'Oxygen Masks',
          category: 'Respiratory',
          price: 15.0,
          stock_quantity: 50,
        },
      ];
      this.isLoading = false;
    }, 800);
  }

  get filteredProducts(): Product[] {
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(this.search.toLowerCase()) ||
        p.category.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
