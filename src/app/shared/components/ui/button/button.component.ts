import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() className: string = '';
  @Input() icon?: string;
  @Output() onClick = new EventEmitter<void>();



  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() disabled = false;

  @Input() customColor?: string;

  baseStyles =
    'inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed gap-2';

  variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline:
      'bg-transparent border border-border text-foreground hover:bg-secondary/50',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
    ghost:
      'bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50',
  };

  handleClick() {
    this.onClick.emit();
  }
}
