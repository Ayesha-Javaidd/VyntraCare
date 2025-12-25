import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() placeholder?: string;
  @Input() required: boolean = false;
  @Input() className: string = '';
  @Input() icon?: string; // HTML or class
  @Input() dark: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
