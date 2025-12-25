import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPdfExtractionComponent } from './admin-pdf-extraction.component';

describe('AdminPdfExtractionComponent', () => {
  let component: AdminPdfExtractionComponent;
  let fixture: ComponentFixture<AdminPdfExtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPdfExtractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPdfExtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
