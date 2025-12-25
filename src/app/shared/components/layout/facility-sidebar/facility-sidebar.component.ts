import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-facility-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './facility-sidebar.component.html',
  styleUrl: './facility-sidebar.component.css',
})
export class FacilitySidebarComponent {
  navItems = [
    {
      label: 'Dashboard',
      href: '/facility/dashboard',
      icon: 'layout-dashboard',
    },
    { label: 'Products', href: '/facility/products', icon: 'package' },
    { label: 'Orders', href: '/facility/orders', icon: 'clipboard-list' },
    { label: 'Inventory', href: '/facility/inventory', icon: 'warehouse' },
  ];
}
