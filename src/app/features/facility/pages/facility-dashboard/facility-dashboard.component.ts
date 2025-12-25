import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../../../shared/components/ui/stat-card/stat-card.component';
import { HeaderComponent } from "../../../../shared/components/layout/header/header.component";

type TimeRange = '24H' | '7D' | '30D' | 'ALL';

@Component({
  selector: 'app-facility-dashboard',
  standalone: true,
  imports: [CommonModule, StatCardComponent, HeaderComponent],
  templateUrl: './facility-dashboard.component.html',
})
export class FacilityDashboardComponent implements OnInit {
  isLoading = true;

  facilityName = 'Your Facility';

  selectedRange: TimeRange = '7D';
  timeRanges: TimeRange[] = ['24H', '7D', '30D', 'ALL'];

  stats = {
    stockLevel: 0,
    activeOrders: 0,
    weeklyUsage: 1200,
    healthScore: 94,
  };

  ngOnInit(): void {
    this.fetchFacilityStats();
  }

  onRangeChange(range: TimeRange) {
    this.selectedRange = range;
    this.fetchFacilityStats();
  }

  fetchFacilityStats() {
    this.isLoading = true;

    // 🔹 Replace with Supabase / API service
    setTimeout(() => {
      this.stats = {
        stockLevel: 8421,
        activeOrders: 18,
        weeklyUsage: 1200,
        healthScore: 94,
      };
      this.isLoading = false;
    }, 600);
  }
}
