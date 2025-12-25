import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import AOS from 'aos';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { CardComponent } from '../../../../shared/components/ui/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  stars = Array(5);

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-out-cubic',
      once: true, // only animate once
      offset: 100, // offset from bottom of screen
    });
  }
}
