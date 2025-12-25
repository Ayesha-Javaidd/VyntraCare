import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityInventoryComponent } from './facility-inventory.component';

describe('FacilityInventoryComponent', () => {
  let component: FacilityInventoryComponent;
  let fixture: ComponentFixture<FacilityInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityInventoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
