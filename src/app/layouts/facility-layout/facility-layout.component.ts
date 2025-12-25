import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { FacilitySidebarComponent } from '../../shared/components/layout/facility-sidebar/facility-sidebar.component';

@Component({
  selector: 'app-facility-layout',
  imports: [RouterOutlet, FacilitySidebarComponent],
  templateUrl: './facility-layout.component.html',
  styleUrl: './facility-layout.component.css',
})
export class FacilityLayoutComponent {}
