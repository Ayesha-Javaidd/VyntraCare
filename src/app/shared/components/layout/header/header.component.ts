import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() title: string = 'Dashboard'; // Default title
  @Input() profileName: string = 'Admin'; // Default profile name
  @Input() profileImage: string = ''; // Optional profile image URL
}
