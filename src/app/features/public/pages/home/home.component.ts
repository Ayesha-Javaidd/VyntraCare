// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import {
//   LucideAngularModule,
//   ShieldCheck,
//   Star,
//   ChevronRight,
//   Building2,
//   ShoppingBag,
//   ScanFace,
//   HeartPulse,
//   Stethoscope,
// } from 'lucide-angular';

// import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
// import { CardComponent } from '../../../../shared/components/ui/card/card.component';
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterLink,
//     ButtonComponent,
//     CardComponent,
//     LucideAngularModule,
//   ],
//   templateUrl: './home.component.html',
// })
// export class HomeComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   readonly icons = {
//     ShieldCheck,
//     Star,
//     ChevronRight,
//     Building2,
//     ShoppingBag,
//     ScanFace,
//     HeartPulse,
//     Stethoscope,
//   };

//   stars = [1, 2, 3, 4, 5];

//   ngAfterViewInit(): void {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: 'ease-out-cubic',
//     });
//   }

//   trackByIndex(index: number): number {
//     return index;
//   }
// }

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
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }
}
