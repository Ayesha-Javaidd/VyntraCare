import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [CommonModule],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css',
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() change: string = '';
  @Input() changeType: 'positive' | 'negative' | 'neutral' = 'neutral';
  @Input() icon?: string;
  @Input() iconBgColor: string = 'bg-blue-100';
  @Input() iconColor: string = 'text-blue-600';
}
