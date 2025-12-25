import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityFormsComponent } from './facility-forms.component';

describe('FacilityFormsComponent', () => {
  let component: FacilityFormsComponent;
  let fixture: ComponentFixture<FacilityFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
