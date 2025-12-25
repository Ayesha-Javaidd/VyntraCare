import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityManagerSidebarComponent } from './facility-manager-sidebar.component';

describe('FacilityManagerSidebarComponent', () => {
  let component: FacilityManagerSidebarComponent;
  let fixture: ComponentFixture<FacilityManagerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityManagerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityManagerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
