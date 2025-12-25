import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiVisionComponent } from './ai-vision.component';

describe('AiVisionComponent', () => {
  let component: AiVisionComponent;
  let fixture: ComponentFixture<AiVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
