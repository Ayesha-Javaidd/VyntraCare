import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityProductsComponent } from './facility-products.component';

describe('FacilityProductsComponent', () => {
  let component: FacilityProductsComponent;
  let fixture: ComponentFixture<FacilityProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
