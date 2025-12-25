import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../../shared/components/layout/admin-sidebar/admin-sidebar.component';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, RouterOutlet, AdminSidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {}
