import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalShellComponent } from '../modal-shell/modal-shell.component';
import { FormsModule } from '@angular/forms';

export interface Product {
  name: string;
  category: string;
  unitType: string;
  imageUrl?: string;
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
    this.submit.emit(this.product);
  }
}
