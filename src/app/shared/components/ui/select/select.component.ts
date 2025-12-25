import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Input() value: string = '';
  @Input() label?: string;
  @Input() className: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.valueChange.emit(target.value);
  }
}
