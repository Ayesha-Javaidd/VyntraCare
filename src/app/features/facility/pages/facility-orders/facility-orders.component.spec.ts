import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityOrdersComponent } from './facility-orders.component';

describe('FacilityOrdersComponent', () => {
  let component: FacilityOrdersComponent;
  let fixture: ComponentFixture<FacilityOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
