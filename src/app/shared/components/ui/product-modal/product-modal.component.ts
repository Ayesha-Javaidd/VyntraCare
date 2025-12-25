import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalShellComponent } from '../modal-shell/modal-shell.component';

export interface Product {
  id?: number;
  name: string;
  price?: number;
  category: string;
  status?: 'In Stock' | 'Low Stock' | 'Out of Stock';
  unitType?: string;
  imageUrl?: string;
  stock_quantity?: number;
}

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalShellComponent],
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  @Input() show = false;
  @Input() product: Product = {
    name: '',
    category: '',
    unitType: '',
    status: 'In Stock', // default value
    imageUrl: '',
  };
  @Input() categories: string[] = [];
  @Input() units: string[] = [];
  @Input() mode: 'add' | 'update' = 'add'; // Mode determines title & button label

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Product>();

  imagePreview: string | ArrayBuffer | null = null;

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.product.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  handleSubmit() {
    // Ensure status is defined before emitting
    if (!this.product.status) {
      this.product.status = 'In Stock';
    }
    this.submit.emit(this.product);
  }
}
