import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleSidebarAction() {
    throw new Error('Method not implemented.');
  }
  @Input() pageTitle: string = 'Admin Dashboard';
  @Input() notificationCount: number = 0;
  @Input() profile: Profile = {
    name: 'Admin Profile',
    initials: 'AP',
  };

  @Output() notificationClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();
  @Output() logoutClick = new EventEmitter<void>();

  constructor() {
    this.updateScreenSize();
  }
  isMobile = false;
  onNotificationClick(): void {
    this.notificationClick.emit();
  }

  onProfileClick(): void {
    this.profileClick.emit();
  }

  onLogoutClick(): void {
    this.logoutClick.emit();
  }

  @HostListener('window:resize')
  updateScreenSize() {
    this.isMobile = window.innerWidth < 992;
  }
}

interface Profile {
  name: string;
  initials: string;
  avatar?: string;
}
