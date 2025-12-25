import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { NavbarComponent } from "../../shared/components/layout/navbar/navbar.component";

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
})
export class PublicLayoutComponent {}
