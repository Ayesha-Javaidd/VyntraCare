import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css',
})
export class AdminSidebarComponent {
  navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: 'layout-dashboard' },
    { label: 'Manage Products', href: '/admin/products', icon: 'package' },
    { label: 'Facilities', href: '/admin/facilities', icon: 'building-2' },
    { label: 'Catalog Assignment', href: '/admin/catalog', icon: 'settings-2' },
    {
      label: 'Orders / Invoices',
      href: '/admin/orders',
      icon: 'clipboard-list',
    },
  ];
}
