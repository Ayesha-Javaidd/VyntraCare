import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityRegisterComponent } from './facility-register.component';

describe('FacilityRegisterComponent', () => {
  let component: FacilityRegisterComponent;
  let fixture: ComponentFixture<FacilityRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
