import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  get isLowStock(): boolean {
    return (this.product.stock_quantity || 0) < 50;
  }
}
