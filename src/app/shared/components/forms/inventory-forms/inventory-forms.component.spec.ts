import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFormsComponent } from './inventory-forms.component';

describe('InventoryFormsComponent', () => {
  let component: InventoryFormsComponent;
  let fixture: ComponentFixture<InventoryFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
