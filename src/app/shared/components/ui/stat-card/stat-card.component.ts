import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css'],
})
export class StatCardComponent {
  @Input() bgColor: string = 'bg-white';
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() icon!: string;
  @Input() iconBgClass: string = 'bg-blue-100';
  @Input() iconColorClass: string = 'text-blue-600';

  @Input() change?: string;
  @Input() changeType?: 'positive' | 'negative' | 'neutral';
}
