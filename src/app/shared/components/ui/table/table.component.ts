import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() rows: any[] = [];
  @Input() className: string = '';

  @ContentChild('rowTemplate') rowTemplate!: TemplateRef<any>;

  renderRow(row: any, index: number): TemplateRef<any> | null {
    return this.rowTemplate;
  }
}
