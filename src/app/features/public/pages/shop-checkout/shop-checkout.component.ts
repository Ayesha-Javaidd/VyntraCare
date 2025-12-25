import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface CartItem {
  id: string;
  name: string;
  base_price: number;
  quantity: number;
}

type Step = 'shipping' | 'payment' | 'confirmation';
@Component({
  standalone: true,
  selector: 'app-shop-checkout',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: 'shop-checkout.component.html',
  styleUrl: './shop-checkout.component.css',
})
export class ShopCheckoutComponent implements OnInit {
  step: Step = 'shipping';
  isSubmitting = false;
  orderId: string | null = null;

  cart: CartItem[] = [];
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  };

  ngOnInit(): void {
    // Dummy cart data (replace with API call if needed)
    this.cart = [
      { id: '1', name: 'Medical Mask', base_price: 12.99, quantity: 1 },
      { id: '2', name: 'Gloves Pack', base_price: 9.99, quantity: 1 },
    ];
  }

  get total(): number {
    return this.cart.reduce(
      (acc, curr) => acc + curr.base_price * curr.quantity,
      0
    );
  }

  proceedToPayment() {
    this.step = 'payment';
  }

  async placeOrder() {
    this.isSubmitting = true;

    try {
      // Simulate order placement (replace with actual API)
      await new Promise((res) => setTimeout(res, 1500));
      this.orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
      this.step = 'confirmation';
    } catch (err) {
      alert('Failed to place order. Please try again.');
    } finally {
      this.isSubmitting = false;
    }
  }

  continueShopping() {
    window.location.href = '/shop';
  }
}
